import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";

import {apiUrl, filterData} from "./data"
import { toast } from "react-toastify";
import Spinner from "./components/Spinner";




const App = () => {

const[courses, setCourses]=useState(null);
const [loading, setLoading]= useState(true)

useEffect(()=>{

  const fetchData = async() =>{

       setLoading(true)

    try {
      const res= await fetch(apiUrl);
      const output=await res.json();

      setCourses(output.data);


    } catch (error) {
        toast.error("something went wrong");
    }

    setLoading(false)
  }
  
     fetchData();
}, [])





  return(
         
    <div className="min-h-screen flex flex-col">

      <div>
          <Navbar></Navbar>
      </div>
      

      <div >
          <Filter filterData={filterData}></Filter>
      </div>
      
       <div>
          {loading ? (<Spinner/>) : (<Cards courses={courses}/>)}

          
       </div>
       
    </div>
  );
};

export default App;
