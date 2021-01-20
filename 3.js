function moro3(params) {
    var n = 100
    var on = []
    var multiple = []
    //insert initial value to on
    for (let i = 1; i < n+1; i++) {
        on.push(i)
    
    }
    console.log('FIRST TRIP' ,on)
    //loop everything start from 2 ,because 1 already done ( all ON )
    for (let j = 2; j < n+1; j++) {
        multiple = [];
        console.log( 'TRIP NUMBER ', j-1 )
        console.log(on)
        for (let k = 1; k < n+1; k++) {
         
            if (k % j == 0) { // multiple of given k ( each trips)
                //if value is On array ( which means its turned on)
                if( on.includes(k) ){
                    //filter the array ( switch to off)
                    on = on.filter(function name(value) {
                        return value == k
                    })
                    //if it was not on ON's array
                }else {
                    //add to ON array ( switched to on)
                    on.push(k)
                }
              
            }
         
        }

      
    }
    // latest condition of the lamps after trips
    console.log("last trip",on)
    
}

moro3()