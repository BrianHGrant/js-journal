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
