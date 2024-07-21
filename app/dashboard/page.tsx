'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { BsArrowRightShort } from 'react-icons/bs'
import { IoHomeSharp } from "react-icons/io5";
import { GrAchievement } from "react-icons/gr";
import { SiChatbot } from "react-icons/si";
import DataTable from '../components/table.jsx';
import { newsRows, finHealthData } from './newsData.js';



const userDashboard = () => {

    let [isSideBarExpanded, setIsSideBarExpanded] = useState(true);

    const handleExpandSidebar = () => {
        setIsSideBarExpanded((prevState) => !prevState);
    }

  return (
    <body className="flex min-h-screen bg-gray-100" style={{ display: "flex" }}>
      <aside
        className="hidden sm:flex sm:flex-col bg-gray-100 h-screen duration-300 sticky top-0"
        style={{ width: `${isSideBarExpanded ? "20.5vw" : "5.5vw"}` }}
      >
        <a
          href="#"
          className="inline-flex items-center justify-center h-20 w-20 bg-purple-600 hover:bg-purple-500 focus:bg-purple-500"
        >
          {/* Insert a good icon/idea */}
        </a>
        <div className="flex-grow flex flex-col justify-between text-gray-500 bg-gray-800">
          <nav className="flex flex-col mx-4 my-6 space-y-4 relative">
            {/* 1st nav item */}
            <a
              href="#"
              className={`inline-flex items-center gap-x-4 py-3 hover:text-gray-400 hover:bg-gray-700 focus:text-gray-400 focus:bg-gray-700 rounded-lg justify-${
                isSideBarExpanded ? "left" : "center"
              }`}
            >
              <SiChatbot
                className={`h-6 w-6 block float-left ${
                  isSideBarExpanded && "ml-2"
                }`}
              />

              <h2 className={`${!isSideBarExpanded && "hidden"} text-white`}>
                {" "}
                Chatbot
              </h2>
            </a>

            {/* 2nd nav item */}
            <a
              href="#"
              className={`inline-flex items-center gap-x-4 py-3 hover:text-gray-400 hover:bg-gray-700 focus:text-gray-400 focus:bg-gray-700 rounded-lg justify-${
                isSideBarExpanded ? "left" : "center"
              }`}
            >
              {/* <span className="sr-only">Dashboard</span> */}
              <svg
                aria-hidden="true"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className={`h-6 w-6 block float-left ${
                  isSideBarExpanded && "ml-2"
                }`}
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
              <h2 className={`${!isSideBarExpanded && "hidden"} text-white`}>
                {" "}
                Dashboard
              </h2>
            </a>

            {/* 3rd nav item */}
            <a
              href="#"
              className={`inline-flex items-center gap-x-4 py-3 hover:text-gray-400 hover:bg-gray-700 focus:text-gray-400 focus:bg-gray-700 rounded-lg justify-${
                isSideBarExpanded ? "left" : "center"
              }`}
            >
              {/* <span className="sr-only">Messages</span> */}
              <svg
                aria-hidden="true"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className={`h-6 w-6 block float-left ${
                  isSideBarExpanded && "ml-2"
                }`}
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <h2 className={`${!isSideBarExpanded && "hidden"} text-white`}>
                {" "}
                Messages
              </h2>
            </a>

            {/* 4th nav item */}
            <a
              href="#"
              className={`inline-flex items-center gap-x-4 py-3 hover:text-gray-400 hover:bg-gray-700 focus:text-gray-400 focus:bg-gray-700 rounded-lg justify-${
                isSideBarExpanded ? "left" : "center"
              }`}
            >
              {/* <span className="sr-only">Documents</span> */}
              <svg
                aria-hidden="true"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className={`h-6 w-6 block float-left ${
                  isSideBarExpanded && "ml-2"
                }`}
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
              <h2 className={`${!isSideBarExpanded && "hidden"} text-white`}>
                {" "}
                Documents
              </h2>
            </a>
            {/* Right arrow icon */}
            <BsArrowRightShort
              onClick={handleExpandSidebar}
              className={`bg-white text-4xl text-purple-600 rounded-full absolute -right-8 -top-14 border border-purple-600 cursor-pointer ${
                isSideBarExpanded ? "rotate-180" : ""
              }`}
            />
            {/* <a onClick={handleExpandSidebar} href="#" className="inline-flex items-center justify-center py-3 hover:text-gray-400 hover:bg-gray-700 focus:text-gray-400 focus:bg-gray-700 rounded-lg">
          <span className="sr-only">Documents</span>
          <svg className="h-10 w-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path fill="#fff" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
        </a> */}
          </nav>
          <div className="inline-flex items-center justify-center h-20 w-20 border-t border-gray-700">
            <button className="p-3 hover:text-gray-400 hover:bg-gray-700 focus:text-gray-400 focus:bg-gray-700 rounded-lg">
              <span className="sr-only">Settings</span>
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
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </aside>

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
            <svg
              aria-hidden="true"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="absolute h-6 w-6 mt-2.5 ml-2 text-gray-400"
            >
              <path
                fill-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clip-rule="evenodd"
              />
            </svg>
            <input
              type="text"
              role="search"
              placeholder="Search..."
              className="py-2 pl-10 pr-4 w-full border-4 border bg-purple-30 placeholder-gray-400  focus:bg-gray-50 rounded-lg"
            />
          </div>
          <div className="flex flex-shrink-0 items-center ml-auto">
            <button className="inline-flex items-center p-2 hover:bg-gray-100 focus:bg-gray-100 rounded-lg">
              <span className="sr-only">User Menu</span>
              <div className="hidden md:flex md:flex-col md:items-end md:leading-tight">
                <span className="font-semibold">Grace Simmons</span>
                <span className="text-sm text-gray-600">Lecturer</span>
              </div>
              <span className="h-12 w-12 ml-2 sm:ml-3 mr-2 bg-gray-100 rounded-full overflow-hidden">
                <p>Img</p>{" "}
              </span>
              <svg
                aria-hidden="true"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="hidden sm:block h-6 w-6 text-gray-300"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
            <div className="border-l pl-3 ml-3 space-x-1">
              <button className="relative p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 focus:bg-gray-100 focus:text-gray-600 rounded-full">
                <span className="sr-only">Notifications</span>
                <span className="absolute top-0 right-0 h-2 w-2 mt-1 mr-2 bg-red-500 rounded-full"></span>
                <span className="absolute top-0 right-0 h-2 w-2 mt-1 mr-2 bg-red-500 rounded-full animate-ping"></span>
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
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
              </button>
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
        <main className="p-6 sm:p-10 space-y-6">
          <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row justify-between">
            <div className="mr-6">
              <h1 className="text-4xl font-semibold mb-2">Hey, [User]</h1>
              <h2 className="text-gray-600 ml-0.5">
                Get started with your financial journey{" "}
              </h2>
            </div>
            <div className="flex flex-wrap items-start justify-end -mb-3">
              <button className="inline-flex px-5 py-3 text-purple-600 hover:text-purple-700 focus:text-purple-700 hover:bg-purple-100 focus:bg-purple-100 border border-purple-600 rounded-md mb-3">
                <svg
                  aria-hidden="true"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="flex-shrink-0 h-5 w-5 -ml-1 mt-0.5 mr-2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                  />
                </svg>
                Manage current goals
              </button>
              <button className="inline-flex px-5 py-3 text-white bg-purple-600 hover:bg-purple-700 focus:bg-purple-700 rounded-md ml-6 mb-3">
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
                Create new goal
              </button>
            </div>
          </div>
          <section className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            <div className="flex items-center p-8 bg-white shadow-lg rounded-lg">
              <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-purple-600 bg-purple-100 rounded-full mr-6">
                <IoHomeSharp className="text-3xl" />
              </div>
              <div>
                <span className="block text-2xl font-bold">₹29.5L</span>
                <span className="block text-gray-500">Total Assets</span>
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
                <span className="block text-2xl font-bold">+6.8%</span>
                <span className="block text-gray-500">Last 1 year returns</span>
              </div>
            </div>
            <div className="flex items-center p-8 bg-white shadow-lg rounded-lg">
              <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-red-600 bg-red-100 rounded-full mr-6">
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
                    d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"
                  />
                </svg>
              </div>
              <div>
                <span className="inline-block text-2xl font-bold">₹2.75L</span>
                {/* <span className="inline-block text-xl text-gray-500 font-semibold">₹2.75L</span> */}
                <span className="block text-gray-500">Total Liabilities</span>
              </div>
            </div>
            <div className="flex items-center p-8 bg-white shadow-lg rounded-lg">
              <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-blue-600 bg-blue-100 rounded-full mr-6">
                <GrAchievement className="text-3xl" />
              </div>
              <div>
                <span className="block text-2xl font-bold">83%</span>
                <span className="block text-gray-500">Goals achieved</span>
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
        </main>
      </div>
    </body>
  );
}

export default userDashboard