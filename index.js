const NAME = 'Print Prototype Proxy';
const VERSION = '1.3';

var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');
var util = require('util');
var xml2js = require('xml2js');
var mock = require('./mock.js');

var app = express();
var jsonParser = bodyParser.json();

// var deployUrl = 'https://print-preview-proxy.herokuapp.com';
var apiServerUrl = 'https://hugo-api-ext-test.nzz.ch';
var endpoints = {
  'get': [
    'getRequestSystemList',
    'getPublicationList',
    'getPublicationDays',
    'getDepartmentList',
    'getTemplateList',
    'getLayoutList'
  ],
  'post': [
    'getPreview',
    'export'
  ]
};
var i;


/**
 * XML parser for requests, body-parser won't do it
 * actually accepts any type of format
 */
function xmlParser(request, response, next) {
  var data = '';
  request.setEncoding('utf8');
  request.on('data', function(chunk) {
    data += chunk;
  });
  request.on('end', function() {
    request.body = data;
    next();
  });
}

app.set('port', (process.env.PORT || 5000));
// app.use(express.static(__dirname + '/public'));

// Allow CORS
app.use(function (request, response, next) {
  response.header('Access-Control-Allow-Origin', '*');
  response.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  response.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

  // intercept OPTIONS method
  if ('OPTIONS' == request.method) {
    response.sendStatus(200);
  } else {
    next();
  }
});
//app.use(jsonParser);
//app.use(xmlParser);

app.use(function (request, response, next) {
  if (request.is('application/xml')) {
    xmlParser(request, response, next);

  } else if (request.is('application/json')) {
    jsonParser(request, response, next);

  } else {
    next();
  }
});


//======== JSON-XML conversion

/**
 * Convert XML to JSON
 */
var xml2json = function (xmlContent, callback) {
  xml2js.parseString(xmlContent, function (err, result) {
    // console.log('------- XML -> JSON');
    // console.log(xmlContent);
    callback(result);
  });
};

/**
 * Convert JSON to XML
 */
var json2xml = function (content) {
  // console.log('------- JSON -> XML');
  // console.log(JSON.stringify(content));
  // console.log("->");

  var builder = new xml2js.Builder({
    rootName: 'format',
    xmldec: { 'version': '1.0', 'encoding': 'UTF-8', 'standalone': false },
    renderOpts:  { 'pretty': false }
    // renderOpts:  { 'pretty': true, 'indent': ' ', 'newline': '\n' }
  });
  var xmlContent = builder.buildObject(content);
  return xmlContent;
};

/**
 * Used by prototype
 * Take JSON article, format using prototype API server, write formatted
 * article back to response object given
 */
var getFormatting = function (content, response) {
  var xmlContent = json2xml(content);
  var path = '/textformater/format/1';
  console.time(path);
  request({
    method: 'POST',
    url: apiServerUrl + path,
    headers: {
      'Content-Type': 'application/xml',
      'Accept': 'application/xml'
    },
    // body: "<?xml version=\"1.0\" encoding=\"UTF-8\"?><format><config><layout type=\"3row\" numberOfRows=\"3\"/></config><article><content id=\"1\" type=\"title\">Ein Triumphzug für Artur Mas</content></article></format>"
    body: xmlContent
  }, function (error, backendResponse, body) {
    xml2json(body, function(jsonBody) {
      // console.log('--------- Response JSON: ----------');
      // console.log(JSON.stringify(jsonBody));
      response.send(jsonBody);
    });
    //console.log('--------- Response XML: ----------');
    //console.log(body);
    console.timeEnd(path);
  });
};

/**
 * Used by Livingdocs Editor
 * Take XML article, try to format using prototype API server, if there is a
 * problem retrieving the formatted article use mock data as fallback
 */
var getPreview = function (xmlContent, response) {
  var path = '/textformater/format/1'; // this will probably change
  console.time(path);
  request({
    method: 'POST',
    url: apiServerUrl + path,
    headers: {
      'Content-Type': 'application/xml',
      'Accept': 'application/xml'
    },
    body: xmlContent
  }, function (error, backendResponse, data) {
    var index = data.indexOf('<formated');

    if ((backendResponse.statusCode !== 200) || (index < 0)) {
      // there was a problem, return mock data
      data = mock.endpoints['getPreview'].post.data;

    } else {
      // prototype data received
      // make prototype data conform with required structure
      data = data.substr(0, index) +
        '<Api><ApiCms cmsCommand="getPreview">' +
        data.substr(index) +
        '</ApiCms></Api>';
    }

    response.format({
      'application/xml': function () {
        response.send(data);
      }
    });
    //console.log('--------- Response XML: ----------');
    //console.log(data);
    console.timeEnd(path);
  });
};


//======== App Routes

app.get('/', function (request, response) {
  response.json({
    name: NAME,
    version: VERSION
  });
});

app.post('/textformater/format', function (request, response){
  request.accepts('application/json');
  // console.log('\n============================  '+new Date());
  getFormatting(request.body, response);
});

var appgets = [];
function createAppGet(endpoint) {
  return function() {
    //console.log(endpoint);
    app.get('/' + endpoint, function (request, response){
      request.accepts('application/json');
      // console.log('\n============================  '+new Date());
      var data = mock.endpoints[endpoint].get.data;

      // Return XML
      response.format({
        'application/xml': function(){
          response.send(data);
        }
      });
    });
  }
}

for (i = 0; i < endpoints.get.length; i++) {
  appgets[i] = createAppGet(endpoints.get[i]);
}

for (i = 0; i < endpoints.get.length; i++) {
  appgets[i]();
}


app.get('/getDocumentMetadata', function (request, response) {
  var data = mock.endpoints['getDocumentMetadata'].post.data;

  response.format({
    'application/xml': function () {
      //response.send('<?xml version="1.0" encoding="UTF-8"?><foo>' + data + '</foo>');
      response.send(data);
    }
  });
});

app.post('/getDocumentMetadata', function (request, response) {
  var data = mock.endpoints['getDocumentMetadata'].post.data;
  // add request body to response to show it was received
  response.append('Request-Data', request.body);

  response.format({
    'application/xml': function () {
      response.send(data);
      //response.send('<?xml version="1.0" encoding="UTF-8"?><foo>' + request.body + '</foo>');
    }
  });
});

app.post('/getPreview', function (request, response) {
  var data = mock.endpoints['getPreview'].post.data;
  data = request.body;
  //console.log(data);
  getPreview(data, response);
});

app.post('/export', function (request, response) {
  var data = mock.endpoints['export'].post.data;
  // add request body to response to show it was received
  response.append('Request-Data', request.body);

  response.format({
    'application/xml': function () {
      response.send(data);
    }
  });
});


app.listen(app.get('port'), function () {
  console.log('Node app is running on port', app.get('port'));
});
