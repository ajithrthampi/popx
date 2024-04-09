import React, { useState } from 'react'

const SignupComponent = ({type, label}) => {
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const [focused, setFocused] = useState(false)

    const handleInputChange = (e) => {
        setEmail(e.target.value);
      };
    
      const handleInputFocus = () => {
        setFocused(true);
      };

  return (
    <section className=''>

    <div className="relative ">
        <input
            type={type}
            className="w-full px-3 py-3 border rounded-md text-sm border-gray-200 focus:outline-none outline-none"
            value={email}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
        />
        <label
            className={`absolute roboto-regular left-3 transition-all duration-300 ${focused || email ? "-top-2 w-24 bg-white text-xs  text-[#a880fc] " : "top-4 text-xs "
                }`}
        >
            {label}
        </label>
    </div>


</section>
  )
}

export default SignupComponent