var reverseString = function(str) {
        var reverse = "";
    for (let index = str.length-1; index >= 0; index--) {

          var charAt = str.charAt(index);
          reverse = reverse+charAt;

        
        
    }
     return reverse;
}
var result = reverseString("Do it anyhow");
console.log(result);

//reverse last word
var reverseStr = function(str) {
var reverse = "";
for (let index = str.length-1; index >= 0; index--) {
      var char = str.charAt(index);
      if (char == " ") {
        break;
        
      }
      reverse = reverse+char;
}
 return reverse;
}
var result = reverseStr("Do it anyhow");
console.log(result);

var vowelCount = function(str){
var count = 0;
for (let index = 0; index < str.length; index++) {
    var char = str.charAt(index);
    if (char == " ") {
        count = count+1;
    }
    
}
return count;
}
var result = vowelCount("I am angular champ");
console.log(result);

var vowelCount1 = function(str){
    var count = 0;
    for (let index = 0; index < str.length; index++) {
        var char = str.charAt(index);
        if (char == "a" || char == "i"|| char =="e"|| char =="o"||char =="u" ) {
            count = count+1;
        }
        
    }
    return count;
    }
    var result = vowelCount1("I am angular champ");
    console.log(result);

    var firstWordCount = function(str){
        var count ="";
        for (let index = 0; index < str.length; index++) {
            var char = str.charAt(index);
            count = count+char;
            if (char==" ") {
                break;
            }
            
        }
        return count;
    }
    var result = firstWordCount("focus is the key of success")
    console.log(`${result} and ${result.length}`);



var firstWord = function(str){
    var count = "";
    for (let index = 0; index < str.length; index++) {
        var charAt = str.charAt(index);
        count = count+charAt;
        if (charAt == " ") {
            break;
        }
        
    }
    return count;


}
var result = firstWord("she will win");
console.log(`${result} and ${result.length} `);