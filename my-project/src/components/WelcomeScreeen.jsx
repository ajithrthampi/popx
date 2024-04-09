import React from 'react'
import { Link } from 'react-router-dom'

const WelcomeScreeen = () => {
    return (
        <section className=' h-full p-4  pb-10' >
            <div className='flex flex-col justify-end  h-full'>
                <p className='roboto-bold text-2xl'>Welocme to  PopX</p>
                <p className='roboto-regular text-[#a9abaf] textsm w-[200px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>

                <div className='flex flex-col gap-2 mt-6'>
                    <Link to="/signup">
                        <button className='w-full h-10 rounded-md roboto-regular bg-[#6c25ff] text-white '>Create Account</button>
                    </Link>
                    <Link to="/signin">
                        <button className='w-full h-10 rounded-md roboto-regular bg-[#cebafb]'>Already Registered? Login</button>
                    </Link>
                </div>

            </div>
        </section>
    )
}

export default WelcomeScreeen