import React, { useState } from 'react'
import SignupComponent from './SignupComponent'
import { Link } from 'react-router-dom'

const Signup = () => {

    return (
        <section className=' relative h-full p-4 pb-10'>
            <p className='roboto-bold text-2xl w-[160px] '>Create your PopX account</p>
            <div className='mt-8 flex flex-col gap-5'>
                <SignupComponent type={"text"} label={"Full Name"} />
                <SignupComponent type={"number"} label={"Phone Number"} />
                <SignupComponent type={"email"} label={"Email Address"} />
                <SignupComponent type={"password"} label={"Password"} />
                <SignupComponent type={"text"} label={"Company Name"} />
            </div>

            <div className="mt-5">
                <p className="roboto-medium text-xs">Are you an Agency?</p>
                <div className='flex gap-5'>
                    <div className="flex items-center gap-2 mt-1">
                        <div className=" w-5 h-5 rounded-full border flex items-center justify-center">
                            <input className="rounded-full w-4 h-4 checked:bg-[#6c25ff] cursor-pointer" type="checkbox" />
                        </div>
                        <p className="roboto-regular text-xs ">Yes</p>
                    </div>

                    <div className="flex items-center gap-2 mt-1">
                        <div className=" w-5 h-5 rounded-full border flex items-center justify-center ">
                            <input className="rounded-full w-4 h-4 checked:bg-[#6c25ff] cursor-pointer" type="checkbox" />
                        </div>
                        <p className="roboto-regular text-xs ">No</p>
                    </div>

                </div>
            </div>
            <div className='absolute bottom-0 right-0 left-0 p-4 pb-6'>
                <Link to="/settings">
                    <button className='w-full h-10 rounded-md roboto-regular bg-[#6c25ff] text-white '>Create Account</button>
                </Link>
            </div>

        </section>

    )
}

export default Signup