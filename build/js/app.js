(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Entry = require('./../js/entry.js').entryModule;

$(document).ready(function() {
  $('#journal-entry-form').submit(function(event) {
    event.preventDefault();
    var userEntry = $('#entry').val();
    var currentEntry = new Entry(userEntry);
    var wordCount = splitWords(userEntry).length;
    var vowelCount = currentEntry.countVowels();
    var consanantCount = currentEntry.countConsanants();
    var currentTeaser = currentEntry.teaser();
    $('#entries').append("<p>" + currentTeaser + "</p>");
    $('#entries').append("<p>" + wordCount + "</p>");
    $('#entries').append("<p>" + vowelCount + "</p>");
    $('#entries').append("<p>" + consanantCount + "</p>");
  });
});

},{"./../js/entry.js":2}],2:[function(require,module,exports){
splitWords = function (inputString) {
  var wordArray = inputString.split(" ");
  var wordArrayResult = [];
  wordArray.forEach(function(word) {
    if(word !== "") {
      wordArrayResult.push(word);
    }
  });
  return wordArrayResult;
};

function Entry(userInput) {
  this.entryBody = userInput;
}

Entry.prototype.countVowels = function () {
  var re = new RegExp(/[^aeiou]/gi);
  var shortenedString = this.entryBody.replace(re, '');
  return shortenedString.length;
};

Entry.prototype.countConsanants = function() {
  var re = new RegExp(/[^bcdfghjklmnpqrstvwxyz]/gi);
  var shortenedString = this.entryBody.replace(re, '');
  return shortenedString.length;
};

Entry.prototype.teaser = function() {
  var re = new RegExp(/(.*?)[.|!|?]/);
  var teaserString = this.entryBody.match(re)[0];
  teaserStringSplit = splitWords(teaserString);
  if(teaserStringSplit.length <= 8) {
    return teaserString;
  } else {
    var returnString = "";
    for(i = 0; i < 8; i ++) {
      returnString = returnString + teaserStringSplit[i] + " ";
    }
    return returnString;
  }
};
exports.entryModule = Entry;

},{}]},{},[1]);
