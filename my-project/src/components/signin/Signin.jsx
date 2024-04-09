import React from 'react'
import SignupComponent from '../signup/SignupComponent'
import { Link } from 'react-router-dom'

const Signin = () => {
    return (
        <section className=' relative h-full p-4'>
            <p className='roboto-bold text-2xl w-[160px] '>Signin to your PopX account</p>
            <div className='pt-4'>
                <p className='roboto-regular text-[#87888b] textsm w-[200px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </div>

            <div className='mt-6 flex flex-col gap-5'>
                <SignupComponent type={"email"} label={"Email Address"} />
                <SignupComponent type={"password"} label={"Password"} />
            </div>
            <Link to="/settings">
                <button className='w-full h-10 rounded-md roboto-regular bg-[#cbcbcb] text-white mt-4'>Login</button>
            </Link>
        </section>
    )
}

export default Signin