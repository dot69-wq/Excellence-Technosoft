import React,{useEffect,useState} from 'react'

const Api = ()=>{
    const [cat,setCat] = useState();
    const [click, setClick] = useState();
    useEffect( ()=>{
        const Sample = async ()=>{
        const wrapper = await fetch(`https://dog.ceo/api/breeds/image/random`);  //console.log(wrapper);
        const jon = await wrapper.json();  // console.log(jon);
        setCat(jon.message);  
                            }
        Sample();
    },[setCat] )
    return(
        <section className="display">
           <img src={cat}/>
        </section>
    )
}

export default Api;