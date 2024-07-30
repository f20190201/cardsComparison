import { useSearchParams } from "next/navigation";
import React, { useState } from "react";
 
const GoalsAndRiskTolerance = ({goals,setgoals}) => {
 
 
  const handledropdown=(e)=>{
setgoals({...goals,[e.target.name]:e.target.value});
 
  }
  const handleChange=(e,name)=>{
    setgoals({...goals,[e.target.name]:e.target.value});
    console.log(goals);
  }
 
  return (
    <div className=" border-b border-gray-900/10 pb-12">
      <div className="mt-7 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="sm:col-span-6">
          <label
            htmlFor="first-name"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            What's your investment experience?
          </label>
          <select class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" name="exp" value={goals.exp}
        onChange={handledropdown}>
            <option value="none">None</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
        </div>
 
        <div className="sm:col-span-6">
          <label
            htmlFor="last-name"
            className="block text-sm font-medium leading-6 text-gray-900 mb-2"
          >
            What's your Risk Tolerance
          </label>
 
          <div style={{"display":"flex"}}>
          <div class="flex items-center mb-2 mr-2">
            <input
              type="checkbox"
              id="low"
              name="risk_tolerance"
              value="low"
              class="mr-2"
              checked={goals.risk_tolerance === 'low'}
              onChange={handleChange}
 
            />
            <label
              for="low"
              className="text-sm font-medium leading-6 text-gray-900"
            >
              Low
            </label>
          </div>
          <div class="flex items-center mb-2 mr-2">
            <input
              type="checkbox"
              id="moderate"
              name="risk_tolerance"
              value="moderate"
              class="mr-2"
              checked={goals.risk_tolerance === 'moderate'}
          onChange={handleChange}
            />
            <label
              for="moderate"
              className="text-sm font-medium leading-6 text-gray-900"
            >
              Moderate
            </label>
          </div>
          <div class="flex items-center mb-2 mr-2">
            <input
              type="checkbox"
              id="high"
              name="risk_tolerance"
              value="high"
              checked={goals.risk_tolerance === 'high'}
              onChange={handleChange}
              class="mr-2"
            />
            <label
              for="high"
              className="text-sm font-medium leading-6 text-gray-900"
            >
              High
            </label>
          </div>
          </div>
        </div>
 
 
 
        <div className="sm:col-span-6" >
          <label
            htmlFor="last-name"
            className="block text-sm font-medium leading-6 text-gray-900 mb-2"
          >
            What's your primary investment goal?
            </label>
            <div style={{"display":"flex"}}>
          <div class="flex items-center mb-2 mr-2" >
            <input
              type="checkbox"
              id="capitalPreservation"
              name="invest"
              value="capitalPreservation"
              class="mr-2"
              checked={goals.invest === 'capitalPreservation'}
              onChange={handleChange}
 
            />
            <label
              for="capitalPreservation"
              className="text-sm font-medium leading-6 text-gray-900"
            >
              Capital preservation
            </label>
          </div>
          <div class="flex items-center mb-2 mr-2">
            <input
              type="checkbox"
              id="incomeGeneration"
              name="invest"
              value="incomeGeneration"
              class="mr-2"
              checked={goals.invest === 'incomeGeneration'}
              onChange={handleChange}
            />
            <label
              for="incomeGeneration"
              className="text-sm font-medium leading-6 text-gray-900"
            >
              Income generation
            </label>
          </div>
          <div class="flex items-center mb-2 mr-2">
            <input
              type="checkbox"
              id="growth"
              name="invest"
              value="growth"
              class="mr-2"
              checked={goals.invest === 'growth'}
              onChange={handleChange}
            />
            <label
              for="growth"
              className="text-sm font-medium leading-6 text-gray-900"
            >
              Growth
            </label>
          </div>
          <div class="flex items-center mb-2">
            <input
              type="checkbox"
              id="aggressiveGrowth"
              name="invest"
              value="aggressiveGrowth"
              class="mr-2"
              checked={goals.invest === 'aggressiveGrowth'}
              onChange={handleChange}
            />
            <label
              for="aggressiveGrowth"
              className="text-sm font-medium leading-6 text-gray-900"
            >
              Aggressive growth
            </label>
          </div>
          </div>
        </div>
 
        <div className="sm:col-span-6">
          <label
            htmlFor="last-name"
            className="block text-sm font-medium leading-6 text-gray-900 mb-2"
          >
            How long do you plan to invest before you need to withdraw a significant portion of your investments?
            </label>
            <select onChange={handledropdown} name="time" value={goals.time} class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6">
            <option value="none">None</option>
            <option value="lessThan1">Less than 1 year</option>
            <option value="1to3">1 - 3 years</option>
            <option value="3to5">3 - 5 years</option>
            <option value="5to10">5 - 10 years</option>
            <option value="moreThan10">More than 10 years</option>
          </select>
        </div>
      </div>
    </div>
  );
};
 
export default GoalsAndRiskTolerance;