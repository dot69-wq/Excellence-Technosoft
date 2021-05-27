import React from 'react'

const Even = ()=>{

    const arr = [1,43,2,5,32,46]
    for(let i=0; i<arr.length;i++){
        if(arr[i]%2 === 0){
            console.log(arr[i]);
        }
    }

    return ( <> </> )
}

export default Even;