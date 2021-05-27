import React from 'react'

const Repeated = ()=>{

    let arr = [1,2,3,4,4,5]
    for (let i=0; i<arr.length-1; i++){
        if(arr[i+1] != arr[i]+1){
            console.log(arr[i]);
    }
}
    return ( <> </> )
}

export default Repeated;