var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');
var util = require('util');
var xml2js = require('xml2js');

var app = express();

var jsonParser = bodyParser.json();

// var deployUrl = 'https://print-preview-proxy.herokuapp.com';
var apiServerUrl = 'https://hugo-api-ext-test.nzz.ch';


//======== App Setup

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
app.use(bodyParser.json());


//======== JSON-XML conversion

var parseString = require('xml2js').parseString;

/**
 * Convert XML to JSON
 */
var xml2json = function (xmlContent, callback) {
  parseString(xmlContent, function (err, result) {
    console.log('------- XML -> JSON');
    console.log(xmlContent);
    callback(result);
  });
};

/**
 * Convert JSON to XML
 */
var json2xml = function (content) {
  console.log('------- JSON -> XML');
  console.log(JSON.stringify(content));
  console.log("->");

  var builder = new xml2js.Builder({
    rootName: 'format',
    xmldec: { 'version': '1.0', 'encoding': 'UTF-8', 'standalone': false },
    renderOpts:  { 'pretty': false }
    // renderOpts:  { 'pretty': true, 'indent': ' ', 'newline': '\n' }
  });
  var xmlContent = builder.buildObject(content);
  console.log(xmlContent);
  return xmlContent;
};

/**
 * Take JSON article, format using API server, write formatted article
 * back to response object given
 */
var getFormatting = function (content, response) {
  var xmlContent = json2xml(content);
  var path = '/textformater/format';
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
      console.log('--------- Response JSON: ----------');
      console.log(JSON.stringify(jsonBody));
      response.send(jsonBody);
    });
    console.log('--------- Response XML: ----------');
    console.log(body);
    console.timeEnd(path);
  });
};


//======== App Routes

app.get('/', function (request, response) {
  response.on('data', function (chunk) {
    console.log('BODY: ' + chunk);
  });

  response.json({
    hello: 'world'
  });
});

app.post('/textformater/format', function (request, response){
  request.accepts('application/json');
  console.log('\n============================  '+new Date());
  getFormatting(request.body, response);
});


app.listen(app.get('port'), function () {
  console.log('Node app is running on port', app.get('port'));
});
