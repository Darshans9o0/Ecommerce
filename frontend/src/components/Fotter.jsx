import React from 'react'
import { assets } from '../assets/assets'

const Fotter = () => {
  return (
    <div>
        <div className=' flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm '> 
            <div>
                <img src={assets.logo} className='mt-5 w-32' alt="" />
                <p className='w-full md:w-2/3 text-gray-700'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. , sunt porro id totam et voluptatibus aspernatur doloribus. Excepturi repellendus minima ratione dolor eius.
                </p>
            </div>
            <div>
                <p className='text-xl font-medium mb-5'>Compnay</p>
                <ul className='flex flex-col gap-1 text-gray-500'>
                    <li>Home</li>
                    <li> About us </li>
                    <li> Delivery </li>
                    <li>Privacy Policy </li>

                </ul>
            </div>
            <div>
                <p  className='text-xl font-medium mb-5 '>Get in touch</p>
                <ul className='flex flex-col gap-1 text-gray-500'>
                    <li>+1-222-234-456</li>
                    <li>contact@us</li>
                </ul>

            </div>

        </div>
    </div>
  )
}

export default Fotter