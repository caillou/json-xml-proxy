var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');
var util = require('util');
var xml2js = require('xml2js');
var parseString = require('xml2js').parseString;

data = {
  "documentMetadata": {
    "publication": "nzz-online",
    "remote": [
      {
        "system": "polopoly",
        "id": "23453454"
      },
      {
        "system": "hugo",
        "id": "428754z9",
        "revision": "48r4893478",
        "modifiedAt": "12.07.2016 19.45+01"
      }
    ],
    "author": [
      {
        "id": "3837",
        "email": "",
        "fullname": ""
      }
    ],
    "nzzWebDepartment": "todo",
    "nzzPrintDepartment": "todo",

    "publishDate": "...",
    "modificationDate": "...",
    "creationDate": "....",
    "versionDate": "..."
  },
  "content": {
    "html": "<article class=\"nzz-standard\" data-ld-document-url=\"http://livingdocs.nzz.ch/publication/[id]\" itemscope itemtype=\"http://schema.org/NewsArticle\">  <h1 data-component=\"headline\" class=\"headline\" itemprop=\"headline\">    <!-- text -->  </h1>  <div  data-component=\"catchline\" class=\"catchline\">    <!-- text -->  </div>  <p data-component=\"lead\" class=\"lead\">    <!-- text -->  </p>  <blockquote data-component=\"quote\" class=\"quote\">    <!-- text -->  </blockquote></article>"
  }
};

xml = '<?xml version="1.0" encoding="UTF-8" standalone="no"?><format>    <documentMetadata>        <publication>nzz-online</publication>        <remote>            <system>polopoly</system>            <id>23453454</id>        </remote>        <remote>            <system>hugo</system>            <id>428754z9</id>            <revision>48r4893478</revision>            <modifiedAt>12.07.2016 19.45+01</modifiedAt>        </remote>        <author>            <id>3837</id>            <email />            <fullname />        </author>        <nzzWebDepartment>todo</nzzWebDepartment>        <nzzPrintDepartment>todo</nzzPrintDepartment>        <publishDate>...</publishDate>        <modificationDate>...</modificationDate>        <creationDate>....</creationDate>        <versionDate>...</versionDate>    </documentMetadata>    <content>        <html>&lt;article class="nzz-standard" data-ld-document-url="http://livingdocs.nzz.ch/publication/[id]" itemscope itemtype="http://schema.org/NewsArticle"&gt;  &lt;h1 data-component="headline" class="headline" itemprop="headline"&gt;    &lt;!-- text --&gt;  &lt;/h1&gt;  &lt;div  data-component="catchline" class="catchline"&gt;    &lt;!-- text --&gt;  &lt;/div&gt;  &lt;p data-component="lead" class="lead"&gt;    &lt;!-- text --&gt;  &lt;/p&gt;  &lt;blockquote data-component="quote" class="quote"&gt;    &lt;!-- text --&gt;  &lt;/blockquote&gt;&lt;/article&gt;</html>    </content></format>';

var xml2json = function (xmlContent, callback) {
  parseString(xmlContent, function (err, result) {
    // console.log('------- XML -> JSON');
    // console.log(xmlContent);
    callback(result);
  });
};

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
  // console.log(xmlContent);
  return xmlContent;
};

var xmlContent = json2xml(data);
console.log(xmlContent);
console.log('---');
xml2json(xml, function(json) {
  console.log(JSON.stringify(json));
});
