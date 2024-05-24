import BlogsList from "./BlogsList";
import useFetch from "./useFetch";
import { useState } from "react";

const Home = () => {

// const { pending, error, data: blogs} = useFetch("http://localhost:8000/blogs");

//   return ( 
//     <>
//     { error && <div> {error} </div>}
//     {pending && <div>Loading....</div>}
//     {blogs && <BlogsList article= {blogs} title="All Blogs" />}
//     </>
//    );

const[number, setNumber] = useState("");
const[gender, setgender] = useState("");

const clear = () =>
{
  setgender("")
}

const handleClick = (e) => {setNumber(e.target.value);
  }

  const checkGender = () => {

    if(number.length >= 13 ){
      const placeNum = number.charAt(7);

      if(placeNum >= 1 && placeNum <=4)
      {
        setgender("male");
      }
     
   
    
   else if (placeNum >= 5 && placeNum <= 8) {
    setgender("female");
   }
  }
  }

return(
<div>
  <input type="text" value={number} onChange={handleClick}></input>
  <button onClick={checkGender}>Submit</button> 
  <button onClick={clear}>Clear</button> 
  <p>{gender}</p>
</div>)

}
 
export default Home;
