
function moro2 (n) {
  //input into string
  var string = n.toString()
  //loop as many as string.length
    for (var i = 0; i <= string.length; i++) {
        // loop for every row value
        for (var j = string.length-1; j >= i; j--) {
          //if string.length - 1 = j its mean the first value of the row from the left
          j == string.length-1 ? document.write(string.charAt(i)):document.write('0');
            
        }
        //break the line
        document.write('<br>');   
    }
}
moro2(1345679);