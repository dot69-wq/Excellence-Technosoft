import React from 'react'

const Consecutive = ()=>{

    const arr = [1,1,1,0,0,1,1,1,1,0];
    let count = 0, max = 0; 
    for(let i=0; i<arr.length;i++){
        if(arr[i] === 0){
            count = 0;
        }
        else{
            count++;
        }
        max = max > count ? max : count;
    }
    console.log(max);

    return( <> </> )
}

export default Consecutive;