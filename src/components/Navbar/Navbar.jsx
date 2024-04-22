import React, { useState } from "react";
import About from '../About/About'
import Logo from "../../assets/logo.svg"
import Login from '../Login/Login'
import Register from "../Register/Register";

function Navbar() 
{

  const [loginStatus , setLoginStatus] = useState(false); 
  const [registerStatus , setRegisterStatus] = useState(false);

  const toggleState = ()=>{
    setLoginStatus(loginStatus => !loginStatus);
  }

  const toggleRegisterState= ()=>{
    setRegisterStatus(registerStatus => !registerStatus);
  }
  
  if(loginStatus)
  {
    return (
      <>
        <Login loginStatus={loginStatus} setLoginStatus={setLoginStatus}/>

        <div className="relative">
            <nav className="bg-white border-gray-200 dark:bg-gray-900 overflow-hidden">
              <div className=" flex flex-wrap items-center justify-between mx-auto p-4 shadow-md overflow-hidden relative" >
      
                <a
                  className="flex items-center space-x-3 rtl:space-x-reverse"
                >
                  <img
                    src={Logo}
                    className="h-8"
                    alt="Fitpro Logo"
                  />
                  <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                    Fitpro
                  </span>
                </a>
      
      
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse items-center">
      
                  <button
                    type="button"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mx-1"
                 >
                    <a href="/register">SignUp</a>
                  </button>
      
                  <button
                    type="button"
                    className="text-blue-700 bg-white border border-blue-700 hover:bg-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 dark:text-white "
                    onClick={toggleState}
                  >
                    Login
                  </button>
      
      
                  <span className='md:hidden font-semibold' >&#9776;</span>
                </div>
      
      
                <div
                  className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                  id="navbar-cta"
                >
                  <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    <li>
                      <a
                        href="#"
                        className="block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:dark:text-blue-500"
                        aria-current="page"
                      >
                        Home
                      </a>
                    </li>
                    <li>
                      <a
                        href="/about"
                        className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                      >
                        About
                      </a>
                    </li>
                    <li>
                      <a
                        href="/services"
                        className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                      >
                        Services
                      </a>
                    </li>
                    
                  </ul>
                </div>
      
              </div>
            </nav>
          </div>
      </>
    )
  }else if(registerStatus)
  {
    return (
      <>
          <Register registerStatus={registerStatus} setRegisterStatus={setRegisterStatus} />
          <div className="relative">
            <nav className="bg-white border-gray-200 dark:bg-gray-900 overflow-hidden">
              <div className=" flex flex-wrap items-center justify-between mx-auto p-4 shadow-md overflow-hidden relative" >
      
                <a
                  className="flex items-center space-x-3 rtl:space-x-reverse"
                >
                  <img
                    src={Logo}
                    className="h-8"
                    alt="Fitpro Logo"
                  />
                  <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                    Fitpro
                  </span>
                </a>
      
      
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse items-center">
      
                  <button
                    type="button"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mx-1"
                 >
                    <a href="/register">SignUp</a>
                  </button>
      
                  <button
                    type="button"
                    className="text-blue-700 bg-white border border-blue-700 hover:bg-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 dark:text-white "
                    onClick={toggleState}
                  >
                    Login
                  </button>
      
      
                  <span className='md:hidden font-semibold' >&#9776;</span>
                </div>
      
      
                <div
                  className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                  id="navbar-cta"
                >
                  <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    <li>
                      <a
                        href="#"
                        className="block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:dark:text-blue-500"
                        aria-current="page"
                      >
                        Home
                      </a>
                    </li>
                    <li>
                      <a
                        href="/about"
                        className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                      >
                        About
                      </a>
                    </li>
                    <li>
                      <a
                        href="/services"
                        className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                      >
                        Services
                      </a>
                    </li>
                   
                  </ul>
                </div>
      
              </div>
            </nav>
          </div>
     </>
    )
  }
  else{
    return( 
        <>
          <div>
            <nav className="bg-white border-gray-200 dark:bg-gray-900 overflow-hidden">
              <div className=" flex flex-wrap items-center justify-between mx-auto p-4 shadow-md overflow-hidden relative" >
      
                <a
                  className="flex items-center space-x-3 rtl:space-x-reverse"
                >
                  <img
                    src={Logo}
                    className="h-8"
                    alt="Fitpro Logo"
                  />
                  <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                    Fitpro
                  </span>
                </a>
      
      
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse items-center">
      
                  <button
                    type="button"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mx-1"
                    onClick={toggleRegisterState}
                 >
                    SignUp
                  </button>
      
                  <button
                    type="button"
                    className="text-blue-700 bg-white border border-blue-700 hover:bg-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 dark:text-white "
                    onClick={toggleState}
                  >
                    Login
                  </button>
      
      
                  <span className='md:hidden font-semibold' >&#9776;</span>
                </div>
      
      
                <div
                  className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                  id="navbar-cta"
                >
                  <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    <li>
                      <a
                        href="#"
                        className="block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:dark:text-blue-500"
                        aria-current="page"
                      >
                        Home
                      </a>
                    </li>
                    <li>
                      <a
                        href="/about"
                        className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                      >
                        About
                      </a>
                    </li>
                    <li>
                      <a
                        href="/services"
                        className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                      >
                        Services
                      </a>
                    </li>
                    
                  </ul>
                </div>
      
              </div>
            </nav>
          </div>
        </>
      );
  }
}

export default Navbar;
