import React from 'react'
import Card from './Card';




const Cards = ({courses}) => {

let allCourses=[];



    //returns you a list of all courses recieved from the api response 
      const getCourse=()=>{
      
  
    Object.values(courses).forEach((courseCategory) =>{
      courseCategory.forEach((courseData)=>{
        allCourses.push(courseData)
      })
    })
    return allCourses;
}



  return (

    <div>

        {getCourse().map((course)=>{
          return(
          <Card key={course.id} course={course}></Card>)
        })}

    </div>
  )
}

export default Cards;