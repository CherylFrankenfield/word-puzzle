$(document).ready(function() {
  $("form#form1").submit(function(event){
  event.preventDefault();
    var vowels = ["a", "e", "i", "o", "u"];
    var sentence1 = $("input#item1").val();
    var seperates = sentence1.split("");
    for (var index = 0; index < seperates.length; index++){
      for (var vowelIndex =0; vowelIndex < vowels.length; vowelIndex++) {
        if (seperates[index] === vowels[vowelIndex]){
          seperates[index] = "-";
        }
      }
    }
    var answer = seperates.join("");
    $(".answer").append("<p>" + answer + "</p>")
});
});
//   var vowels = ["a", "e", "i", "o", "u"]
//   var sentence = $("p#sentence").val();
//   alert(sentence);
//   var answer = []
//   split.forEach(function(vowel) {
//    $(vowels).replace("-");
//     answer.push(split)
//     alert(answer);
// });
//
// // var seperate = str.split("");
// // var split = split.replace(vowels, "-")
//
//
// });
// var sentence1 = "Testing"
// var vowels = ["a", "e", "i", "o", "u"];
// var seperates = [sentence1.split("")];
// var answer = []
// var newSeperates = seperates.map(function(vowel) {
//   return (vowels).replace("-");
//   answer.push(vowel);
// });
// seperates.forEach(function(seperate){
//   (vowels === "-"),
//   answer.push(vowels + seperate);
// });
// strr.split('a').join(' ').split('e').join(' ').split('i').join('').split('o').join(' ').split('u').join(' ')
// seperated.forEach(function(vowel) {
//   seperated.split(vowels).join('-');
//
// })
// (vowels === "-")
//
// if ("" === vowels){
//
// }


  // if(index === vowel){
  //   $()return answer += "-")
  // } else {
  //   $(return answer += index);
  // } alert(answer);
