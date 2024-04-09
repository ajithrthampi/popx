import Setting from "./components/account/Setting"
import Signin from "./components/signin/Signin"
import Signup from "./components/signup/Signup"
import WelcomeScreeen from "./components/WelcomeScreeen"
import { Routes, Route } from "react-router-dom";

function App() {


  return (
    <div className="w-full sm:h-screen flex justify-center items-center ">
      <div className="w-full bg-white shadow sm:max-w-xs border sm:h-[calc(100vh-7rem)] h-[100dvh]  mb-8">
        <Routes>
          <Route path='/' element={<WelcomeScreeen />} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/signin' element={<Signin/>} />
          <Route path='/settings' element={<Setting/>} />

        </Routes>
      </div>
    </div>
  )
}

export default App
