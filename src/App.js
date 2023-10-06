import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";

import {apiUrl, filterData} from "./data"
import { toast } from "react-toastify";
import Spinner from "./components/Spinner";




const App = () => {

const[courses, setCourses]=useState(null);
const [loading, setLoading]= useState(true);

const [category, setCategory]= useState( filterData[0].title)

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
          <Filter  category={category} setCategory={setCategory}
          filterData={filterData}></Filter>
      </div>
      
       <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
          {loading ? (<Spinner/>) : (<Cards courses={courses} category={category}/>)}

          
       </div>
       
    </div>
  );
};

export default App;
