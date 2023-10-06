import React from 'react'
import {FcLike} from "react-icons/fc"

const Card = ({course}) => {




  return (

    <div className='w-[300px] bg-bgDark2 rounded-md overflow-hidden text-white'>
        
         <div className='relative'>
                <img src={course.image.url} alt="" />

                <div className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-3 flex justify-center items-center'>
                  
                  <button >
                       <FcLike fontSize="1.75rem"></FcLike>
                  </button>
                </div>

         </div>
               
          

          <div className='p-4'>
            <p className='text-white font-semibold text-lg  leading-6 mb-3'>{course.title}</p>
            <p>
              {
              course.description.length>100 ? 
              (course.description.substr(0,100))+ "..." : 
              (course.description)
            }
            </p>
          </div>

    </div>
  
  )
}

export default Card;