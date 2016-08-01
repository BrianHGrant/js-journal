splitWords = function (inputString) {
  var wordArray = inputString.split(" ");
  var wordArrayResult = [];
  wordArray.forEach(function(word) {
    if(word != "") {
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
  }

Entry.prototype.countConsanants = function() {
  var re = new RegExp(/[^bcdfghjklmnpqrstvwxyz]/gi);
  var shortenedString = this.entryBody.replace(re, '');
  return shortenedString.length;
}

Entry.prototype.teaser = function() {
  var re = new RegExp(/(.*?)[.|!|?]/);
  var teaserString = this.entryBody.match(re)[0];
  teaserStringSplit = splitWords(teaserString)
  if(teaserStringSplit.length <= 8) {
    return teaserString;
  } else {
    var returnString = "";
    for(i = 0; i < 8; i ++) {
      returnString = returnString + teaserStringSplit[i] + " ";
    }
    return returnString;
  }
}
