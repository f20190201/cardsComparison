import React, { useState } from "react";

const EmploymentAndIncome = ({ employmentAndIncomeData, setEmploymentAndIncomeData }) => {
  return (
    <div className="border-gray-900/10 pb-12">
      <div className="mt-7 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="sm:col-span-3">
          <label
            htmlFor="first-name"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Occupation
          </label>
          <div className="mt-2">
            <input
              id="occupation"
              name="occupation"
              value={employmentAndIncomeData.occupation}
              onChange={(e) => setEmploymentAndIncomeData((prevState) => ({...prevState, occupation: e.target.value}))}
              type="text"
              autoComplete="given-name"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="sm:col-span-3">
          <label
            htmlFor="last-name"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Employer
          </label>
          <div className="mt-2">
            <input
              id="employer"
              name="employer"
              value={employmentAndIncomeData.employer}
              onChange={(e) => setEmploymentAndIncomeData((prevState) => ({...prevState, employer: e.target.value}))}
              type="text"
              autoComplete="family-name"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="sm:col-span-3">
          <label
            htmlFor="first-name"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Employment Status
          </label>
          <div className="mt-2">
            <input
              id="employmentStatus"
              name="employmentStatus"
              value={employmentAndIncomeData.employmentStatus}
              onChange={(e) => setEmploymentAndIncomeData((prevState) => ({...prevState, employmentStatus: e.target.value}))}
              type="text"
              autoComplete="given-name"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="sm:col-span-3">
          <label
            htmlFor="last-name"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Annual Salary
          </label>
          <div className="mt-2">
            <input
              id="annualSalary"
              name="annualSalary"
              value={employmentAndIncomeData.annualSalary}
              onChange={(e) => setEmploymentAndIncomeData((prevState) => ({...prevState, annualSalary: e.target.value}))}
              type="text"
              autoComplete="family-name"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="sm:col-span-3">
          <label
            htmlFor="last-name"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Other Income Sources
          </label>
          <div className="mt-2">
            <input
              id="otherIncomeSources"
              name="otherIncomeSources"
              value={employmentAndIncomeData.otherIncomeSources}
              onChange={(e) => setEmploymentAndIncomeData((prevState) => ({...prevState, otherIncomeSources: e.target.value}))}
              type="text"
              autoComplete="family-name"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="sm:col-span-3">
          <label
            htmlFor="last-name"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Monthly Income Sources
          </label>
          <div className="mt-2">
            <input
              id="monthlyIncomeSources"
              name="monthlyIncomeSources"
              value={employmentAndIncomeData.monthlyIncomeSources}
              onChange={(e) => setEmploymentAndIncomeData((prevState) => ({...prevState, monthlyIncomeSources: e.target.value}))}
              type="text"
              autoComplete="family-name"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="sm:col-span-3">
        <label
            htmlFor="last-name"
            className="text-sm font-medium leading-6 text-gray-900"
          >
            Life Insurance
          </label>
        <input
              type="checkbox"
              id="high"
              name="lifeInsurance"
              value={employmentAndIncomeData.lifeInsurance}
              checked={employmentAndIncomeData.lifeInsurance}
              onChange={(e) => setEmploymentAndIncomeData((prevState) => ({...prevState, lifeInsurance: !prevState.lifeInsurance}))}
              class="mx-2"
            />
            
        </div>


        <div className="sm:col-span-3">
        <label
            htmlFor="last-name"
            className="text-sm font-medium leading-6 text-gray-900"
          >
            Health Insurance
          </label>
        <input
              type="checkbox"
              id="high"
              name="healthInsurance"
              value={employmentAndIncomeData.healthInsurance}
              checked={employmentAndIncomeData.healthInsurance}
              onChange={(e) => setEmploymentAndIncomeData((prevState) => ({...prevState, healthInsurance: !prevState.healthInsurance}))}
              class="mx-2"
            />
            
        </div>
      </div>
    </div>
  );
};

export default EmploymentAndIncome;
