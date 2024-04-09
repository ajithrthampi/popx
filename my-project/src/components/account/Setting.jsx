import React from 'react'

const Setting = () => {
    return (
        <section className='bg-[#f7f8f9] h-full '>
            <div className='h-14 w-full bg-white p-4 flex items-center'>
                <p className="roboto-medium ">Account Settings</p>
            </div>

            <div className='p-4 border-dotted border-b border-'>
                <div className='flex gap-4'>
                    <img className='rounded-full w-14 h-14 object-cover' src="https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    <div className=' flex flex-col gap-1'>
                        <p className="roboto-medium text-xs ">Marry Doe</p>
                        <p className="roboto-regular text-xs ">Marry@Gmail.com</p>
                    </div>
                </div>

                <p className='roboto-regular  text-xs capitalize mt-8'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus iusto ipsa eos minus culpa quam ut at recusandae, id praesentium ex esse impedit odit </p>
            </div>
        </section>
    )
}

export default Setting