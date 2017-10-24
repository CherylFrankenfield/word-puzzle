$(document).ready(function() {
  $("form#form1").submit(function(event){
  event.preventDefault();
});
  var sentence = $("p#sentence").val();
  alert(sentence);
  var vowels = ["a", "e", "i", "o", "u"]
  var answer = []
  split.forEach(function(vowel) {
   $(vowels).replace("-");
    answer.push(split)
    alert(answer);
});

// var seperate = str.split("");
// var split = split.replace(vowels, "-")


});
var sentence1 = "Testing"
var vowels = ["a", "e", "i", "o", "u"]
var seperated = sentence1.split("");
var answer = []
seperated.forEach(function(seperate){
  vowels.forEach(function(vowel){
    $(vowels).append("-");
    answer.push(vowel + seperate);
  });
});
strr.split('a').join(' ').split('e').join(' ').split('i').join('').split('o').join(' ').split('u').join(' ')
seperated.forEach(function(vowel) {
  seperated.split(vowels).join('-');

})
