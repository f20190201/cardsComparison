'use client'
import React, { useState,useEffect } from 'react'
import { BsArrowRightShort } from 'react-icons/bs'
import { IoHomeSharp } from "react-icons/io5";
import { GrAchievement } from "react-icons/gr";
import { SiChatbot } from "react-icons/si";
import DataTable from '../components/table.jsx';
import CreateNewModal from '../components/modal.jsx';
import { newsRows, finHealthData } from './newsData.js';
import Chat from '../components/Chat'; 
import axios from "axios";


const userDashboard = () => {
    let [isSideBarExpanded, setIsSideBarExpanded] = useState(true);
    let [createNewModalOpen , setcreateNewModalOpen] = useState(false);
    let [isChatBotOpen, setIsChatBotOpen] = useState(false);
    const[user,setuser]=useState({
      firstName:"",
      lastName:""
    })
const[values,setValues]=useState({
  investedAmount:"",
  emergencyFund:"",
  investmentExperience:""
});
const storedEmail = localStorage.getItem('email');
    const handleCreateNewGoal = () => {
      setcreateNewModalOpen(true);
    };

    const handleExpandSidebar = () => {
        setIsSideBarExpanded((prevState) => !prevState);
    }
    useEffect(() => {
      generateContent();
      generateinfo();
  }, []);
  
    async function generateContent() {
     

      try {
        const response = await axios.get(`http://localhost:8082/api/advisory/getInvestmentDetails?email=${storedEmail}`);
        console.log(response.data);
        setValues(response.data)
        
      } catch (error) {
        throw new Error( 'Network response was not ok');
      }
  
    }
    async function generateinfo() {
      try {
        const response = await axios.get(`http://localhost:8082/api/advisory/getcustomer?email=${storedEmail}`);
        console.log(response.data);
       setuser(response.data)
        
      } catch (error) {
        throw new Error( 'Network response was not ok');
      }
  
    }
  return (
    <>
    <body className="flex min-h-screen bg-gray-100" style={{ display: "flex" }}>
    <CreateNewModal open={createNewModalOpen} onClose={setcreateNewModalOpen} />     

      <div className="flex-grow text-gray-800" style={{ width: "94.5vw" }}>
        <header className="flex items-center h-20 px-6 sm:px-10 bg-white shadow-lg">
          <button className="block sm:hidden relative flex-shrink-0 p-2 mr-2 text-gray-600 hover:bg-gray-100 hover:text-gray-800 focus:bg-gray-100 focus:text-gray-800 rounded-full">
            <span className="sr-only">Menu</span>
            <svg
              aria-hidden="true"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </button>
          <div className="relative w-full max-w-md sm:-ml-2">
          
           
          </div>
          <div className="flex flex-shrink-0 items-center ml-auto">
            <button className="inline-flex items-center p-2 hover:bg-gray-100 focus:bg-gray-100 rounded-lg">
              <span className="sr-only">User Menu</span>
              <div className="hidden md:flex md:flex-col md:items-end md:leading-tight">
                <span className="font-semibold">Grace Simmons</span>
              
              </div>
             
              
            </button>
            <div className="border-l pl-3 ml-3 space-x-1">
             
              <button className="relative p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 focus:bg-gray-100 focus:text-gray-600 rounded-full">
                <span className="sr-only">Log out</span>
                <svg
                  aria-hidden="true"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  />
                </svg>
              </button>
            </div>
          </div>
        </header>
        
        {!isChatBotOpen && <main className="p-6 sm:p-10 space-y-6">
          <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row justify-between">
            <div className="mr-6">
              <h1 className="text-4xl font-semibold mb-2">Hey,{user?.firstName}</h1>
              <h2 className="text-gray-600 ml-0.5">
                Get started with your financial journey{" "}
              </h2>
            </div>
            <div className="flex flex-wrap items-start justify-end -mb-3">
              <button 
              onClick={ () => setIsChatBotOpen((prevState) => !prevState) }
              className="inline-flex px-5 py-3 text-purple-600 hover:text-purple-700 focus:text-purple-700 hover:bg-purple-100 focus:bg-purple-100 border border-purple-600 rounded-md mb-3">
               
              <SiChatbot style={{margin: '0.3rem 0.7rem 0 0'}}/>Personal financial advisor
              </button>
              <button
              onClick={handleCreateNewGoal}
              className="inline-flex px-5 py-3 text-white bg-purple-600 hover:bg-purple-700 focus:bg-purple-700 rounded-md ml-6 mb-3">
                <svg
                  aria-hidden="true"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="flex-shrink-0 h-6 w-6 text-white -ml-1 mr-2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
Manage Goal              </button>
            </div>
          </div>
          <section className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            <div className="flex items-center p-8 bg-white shadow-lg rounded-lg">
              <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-purple-600 bg-purple-100 rounded-full mr-6">
                <IoHomeSharp className="text-3xl" />
              </div>
              <div>
                <span className="block text-2xl font-bold">{values?.investedAmount ||"NA"}</span>
                <span className="block text-gray-500">Invested Amount</span>
              </div>
            </div>
            <div className="flex items-center p-8 bg-white shadow-lg rounded-lg">
              <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-green-600 bg-green-100 rounded-full mr-6">
                <svg
                  aria-hidden="true"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </div>
              <div>
                <span className="block text-2xl font-bold">{values?.emergencyFund ||"NA"}</span>
                <span className="block text-gray-500">Emergency Fund</span>
              </div>
            </div>
           
            <div className="flex items-center p-8 bg-white shadow-lg rounded-lg">
              <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-blue-600 bg-blue-100 rounded-full mr-6">
                <GrAchievement className="text-3xl" />
              </div>
              <div>
                <span className="block text-2xl font-bold">{values?.investmentExperience ||"NA"  }</span>
                <span className="block text-gray-500">Investment Experience</span>
              </div>
            </div>
          </section>
          <section className="grid md:grid-cols-2 xl:grid-cols-4 xl:grid-rows-3 xl:grid-flow-col gap-6">
            <div className="flex flex-col md:col-span-2 md:row-span-2 bg-white shadow rounded-lg">
              <div className="px-6 py-5 font-semibold border-b border-gray-100">
                Financial news, specially curated for you
              </div>
              <div className="p-4 flex-grow shadow-lg rounded">
              <DataTable rows={newsRows}></DataTable>
              </div>
            </div>
            <div className="flex flex-col row-span-3 col-span-7 bg-white shadow rounded-lg">
              <div className="px-6 py-5 font-semibold border-b border-gray-100">
                Your current financial health
              </div>
              <div className="p-4 flex-grow">
                <DataTable rows={finHealthData}/>
              </div>
            </div>
          </section>
        </main> }
        <Chat open={isChatBotOpen} setIsChatBotOpen={setIsChatBotOpen} /> 
      </div>
    </body>
    </>
  );
}

export default userDashboard