import Header from "./Header";
import { useState } from "react";

const Login =()=>{
    const [isSignInForm ,setIsSignInForm] = useState(true);
    const toggleSignInform = ()=>{
         setIsSignInForm(!isSignInForm);
    }
    return(
        <>
        <Header/>
        <div className="absolute"> 
            <div className="h-lvh w-lvw overflow-hidden ">
              <div className="h-lvh w-lvw bg-black opacity-50 absolute z-0"></div>
              <img className="z-0 size-[120%]" src="https://assets.nflxext.com/ffe/siteui/vlv3/150c4b42-11f6-4576-a00f-c631308b1e43/web/IN-en-20241216-TRIFECTA-perspective_915a9055-68ad-4e81-b19a-442f1cd134dc_medium.jpg"/>
            </div>
        </div>
        <form className="w-3/12 absolute p-12 bg-black bg-opacity-75 my-36 mx-auto right-0 left-0 text-white rounded justify-center align-center">
                <h1 className="font-bold text-3xl mb-5">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                <input type="text" placeholder="Email addresh" className="py-2 my-2  w-full rounded bg-stone-700 bg-opacity-25 border-[1px] border-stone-500 "></input>
                {!isSignInForm && (
                    <input type="text" placeholder="Your Name" className="py-2 my-2  w-full rounded bg-stone-700 bg-opacity-25 border-[1px] border-stone-500 "></input>
                )}
                <input type="password" placeholder="password" className="py-2 my-2 w-full rounded  bg-stone-700 bg-opacity-25 border-[1px] border-stone-500"></input>
                <button className="bg-[#E50914] py-2 my-2 w-full rounded">{isSignInForm ? "Sign In" : "Sign Up"}</button>
                <p className="text-center">Forgot password?</p>
                {isSignInForm ? <p className="py-4">New to Netflix? <a className="cursor-pointer font-bold" onClick={toggleSignInform}>Sign up now.</a></p> : <p className="py-4">Alredy Registread<a className="cursor-pointer font-bold" onClick={toggleSignInform}>Sign in now.</a></p>}
                
        </form>{isSignInForm ? "Sign In" : "Sign Up"}
        </>
    )
}
export default Login;