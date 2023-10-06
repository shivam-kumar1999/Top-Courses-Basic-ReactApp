import React from 'react'
import Card from './Card';




const Cards = ({courses, category}) => {

let allCourses=[];



    //returns you a list of all courses recieved from the api response 
      const getCourse=()=>{

        if(category==="All"){

               Object.values(courses).forEach((courseCategory) =>{
               courseCategory.forEach((courseData)=>{
               allCourses.push(courseData)
             })
           })
         return allCourses;
        }
      
        else{
          //mai sirf specific category ka data pass krunga
          return courses[category];
        }
  
    
}



  return (

    <div className='flex flex-wrap justify-center gap-4 mb-4'>

        {getCourse().map((course)=>{
          return(
          <Card key={course.id} course={course} ></Card>)
        })}

    </div>
  )
}

export default Cards;