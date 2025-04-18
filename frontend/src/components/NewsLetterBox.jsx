import React from 'react'

const NewsLetterBox = () => {
    const onSubmitHandler = (event) => {
        event.preventDefault();
    }

      return (
    <div className='text-center'>
        <p className='text-2xl  font-medium text-gray-600'>Subscribe Now & Get 20% Off</p>
        <p className='text-gray-400 mt-3 '>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque quibusdam maiores maxime et veniam! Officiis exercitationem, incidunt quis facere tenetur facilis, repellendus dolores fugit ullam ipsa ratione totam cumque ducimus?
        </p> 
        <form onSubmit={onSubmitHandler} className='w-64 sm:w-1/2 flex  items-center gap-3 mx-auto my-6  border pl-3'>
            <input className='w-64 sm:flex-1 outline-none ' type="email" placeholder='Enter your Em@il' required />
            <button type='submit' className=  'bg-black text-white text-xs px-10 py-4 '> Subscribe </button>
        </form>
    </div>
  )
}

export default NewsLetterBox