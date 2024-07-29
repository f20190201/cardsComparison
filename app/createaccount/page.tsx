'use client'

import React, { useState, useRef } from 'react';
import Image from 'next/image'
import { useRouter, usePathname } from 'next/navigation'
import axios from "axios";
const registerPage = () => {
    
    const router = useRouter();
    let emailRef: any = useRef(null);
    let passwordRef: any = useRef(null);
    let [isShaking, setIsShaking] = useState(false);

    const [errorMessage, setErrorMessage] = useState('');


    const handleOnSubmitClick = async (e: any) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const userData = {
            firstname: formData.get('firstname'),
            lastname: formData.get('lastname'),
            gender: formData.get('gender'),
            age: formData.get('age'),
            email: formData.get('email'),
            password: formData.get('password'),
        };
        if (!userData.firstname || !userData.lastname || !userData.gender || !userData.age || !userData.email || !userData.password) {
            setErrorMessage('Please fill in all required fields.');
            return; // Stop submission if validation fails
        }

        try {
            const response = await axios.post('http://127.0.0.1:8080/api/register', userData);
            console.log("Registration successful", response.data);
            router.push('/login'); // Redirect upon successfull registration
        } catch (error) {
            console.error("Registration failed", error);
            setErrorMessage('Registration failed. Please try again.');
        }
          
    }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
    Create your account
</h2>
<div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
    <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <form onSubmit= {handleOnSubmitClick} className="space-y-6" action="/register" method="POST">
            <div>
                <label htmlFor="firstname" className="block text-sm font-medium text-gray-700">
                    First Name
                </label>
                <div className="mt-1">
                    <input id="firstname" name="firstname" type="text" required
                        className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        placeholder="Enter your first name"/>
                </div>
            </div>

            <div>
                <label htmlFor="lastname" className="block text-sm font-medium text-gray-700">
                    Last Name
                </label>
                <div className="mt-1">
                    <input id="lastname" name="lastname" type="text" required
                        className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        placeholder="Enter your last name"/>
                </div>
            </div>

            <div>
                <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
                    Gender
                </label>
                <select id="gender" name="gender" required
                        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                    <option value="">Select your gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
            </div>

            <div>
                <label htmlFor="age" className="block text-sm font-medium text-gray-700">
                    Age
                </label>
                <div className="mt-1">
                    <input id="age" name="age" type="number" required
                        className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        placeholder="Enter your age"/>
                </div>
            </div>

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
            {errorMessage && <div className="text-red-500">{errorMessage}</div>}
            <div>
                <button type="submit"
                    className={`${isShaking ? `animate-shake bg-red-500` : `bg-purple-600 hover:bg-purple-700 focus:ring-purple-500`} group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white  focus:outline-none focus:ring-2 focus:ring-offset-2 `}>
                    Create Account
                </button>
            </div>

        </form>
    </div>
</div>
</div>)
}

export default registerPage;