'use client'

import React, { useState, useRef } from 'react';
import Image from 'next/image'
import { useRouter, usePathname } from 'next/navigation'
import axios from "axios";
import { Audio } from 'react-loader-spinner';
const loginPage = () => {
    
    const router = useRouter();
    const currentPath = usePathname();
    let emailRef: any = useRef(null);
    let passwordRef: any = useRef(null);
    let [isShaking, setIsShaking] = useState(false);

   const[loading,setloading]=useState(false);

    const handleOnSubmitClick = async (e: any) => {
        e.preventDefault();
setloading(true);
        if(await compareCredentials(emailRef.current.value, passwordRef.current.value)==="false") {
            setIsShaking(true);
            
            setTimeout(() => setIsShaking(false),1000);
        } else {
            console.log("login")
            localStorage.setItem('email', emailRef.current.value);
            router.push('/dashboard'); 
        }
        setloading(false);
    }
    async function compareCredentials(email: string, password: string) {
        try {
            const response = await axios.get('http://127.0.0.1:8082/api/advisory/login', {
                params: {
                  email: email,
                  password: password
                }
              });
                        console.log(response.data);
          
         return response.data;
          
        }
         catch (error) {
         
          return "false";
        }
    
    }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
    <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600 max-w">
            Or
            <a href="/createaccount" className="font-medium text-purple-600 hover:text-purple-500 ml-1">
                create an account
            </a>
        </p>
    </div>

    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" action="#" method="POST">
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email address
                    </label>
                    <div className="mt-1">
                        <input id="email" name="email" type="email" autoComplete="email" required ref={emailRef} onChange={(e) => emailRef.current.value = e.target.value}
                            className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            placeholder="Enter your email address"/>
                    </div>
                </div>

                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                        Password
                    </label>
                    <div className="mt-1">
                        <input id="password" name="password" type="password" autoComplete="current-password" required ref={passwordRef} onChange={(e) => passwordRef.current.value = e.target.value}
                            className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            placeholder="Enter your password"/>
                    </div>
                </div>

               
                <div>
                    <button type="submit" onClick={handleOnSubmitClick}
                        className={`${isShaking ? `animate-shake bg-red-500` : `bg-purple-600 hover:bg-purple-700 focus:ring-purple-500`} group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white  focus:outline-none focus:ring-2 focus:ring-offset-2 `}>
                        Sign in
                    </button>
                </div>
            </form>
           
        </div>
    </div>
</div>
  )
}

export default loginPage;