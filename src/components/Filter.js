import React from 'react'

const Filter = ({filterData}) => {
  return (
    <div className='w-11/12 flex flex-wrap max-w-max space-x-4 gap-y-4 mx-auto py-4 justify-center items-center'>

      {filterData.map( (data) =>{

        return(<button key={data.id}  className='text-lg px-2 py-1 rounded-md font-medium text-white bg-bgDark hover:bg-black transition-all duration-300 border-2'>
          {data.title}
        </button>)
     
     })}
         
    </div>
  )
}

export default Filter;