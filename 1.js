
function stockAndCount( n, arr ) {
    let pairs = 0;
    //reduce the array to single value
    const colors = arr.reduce((acc, val) => {
        (!!acc[val]) ? acc[val] += 1 : acc[val] = 1;
        return acc;
    }, {});
    // loop for object
    Object.keys(colors).forEach( n => {
        let _pair = parseInt( colors[n] / 2);
        if ( _pair >= 1 ) pairs += _pair;
    });
      //return number of paired shoes
    document.write(pairs);  
}
 //example function call
var n = 5
var array = [2,2,1,1,3]

stockAndCount( n, array )