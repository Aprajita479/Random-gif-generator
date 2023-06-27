import { useState} from "react"
import Spinner from "./Spinner";

import useGif from "../hooks/useGif";
export default function Tag() {
  
  // const API_KEY=process.env.REACT_APP_GIPHY_API_KEY;

  // const [gif,setGif]=useState('');
  // const [loading,setLoading]=useState('false');
  

//ya function url se gif nikalka image nikalka dala deta hai source mai
  // async function fetchData(){
  //   setLoading(true);
  //   const url=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`
  //   const {data}=await  axios.get(url);
  //   const imageSource=data.data.images.downsized_large.url;
  //   // console.log(imageSource);
  //   setGif(imageSource)
  //   setLoading(false);


  // }
  // useEffect(()=>{
  //   fetchData()
  // }, []);
  const [tag,setTag]=useState('car');
  const {gif,loading,fetchData}=useGif(tag);



  return(
 
      <div className="w-1/2   bg-blue-500 rounded-lg 
      border border-black flex flex-col items-center gap-y-5">
        <h1 className="font-bold  mt-[15px] uppercase text-3xl underline 
        ">  Random {tag} Gif</h1>
        
        {
          loading ?  (<Spinner/>):(<img src={gif} alt="" width="450px"/>)
        }
        <input className="w-10/12 text-lg py-2  rounded-lg  mb-[3px] text-center"
        onChange={(event)=>setTag(event.target.value)}
         value={tag}/>
        
        <button className="w-10/12 bg-white  text-lg py-2  rounded-lg  mb-[20px]" 
         onClick={()=>fetchData(tag)}>Generate</button>
      </div>
    
  )
}
