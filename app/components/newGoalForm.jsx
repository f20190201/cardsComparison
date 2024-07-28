import React, { useState, useRef, useEffect } from 'react';
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import EmploymentAndIncome from './EmploymentAndIncome';
import ExpensesSavingsAndInvestments from './ExpensesSavingAndInvestments';
import GoalsAndRiskTolerance from './GoalsAndRiskTolerance';

export default function NewGoalForm(props) {
    const onClose = props.onClose;
    const [pageNum, setPageNum] = useState(1);
    const sections = [
      'Employment and Income',
      'Expenses, Savings and Investments',
      'Goals & Risk Tolerance'
    ];

    let [employmentAndIncomeData, setEmploymentAndIncomeData] = useState({
      occupation: '',
      employer: '',
      employmentStatus: '',
      annualSalary: '',
      otherIncomeSources: '',
      monthlyIncomeSources: ''
    });

    let [expensesSavingsAndInvestments, setExpensesSavingsAndInvestments] = useState({
      housingExpenses: '',
      utilitiesExpenses: '',
     
     
      
      emergencyFundCurrentBal: '',
     
      retirementSavings: '',
      
      investmentAccountCurrentVal: '',
      investmentAccountMonthlyContri: '',
      
    })
    let [goals,setgoals]=useState({
      exp:"",
      time:"",
      risk_tolerance:"",
      invest:""
    })
    const handleClickNext = (e) => {
      
      e.preventDefault();
      console.log(employmentAndIncomeData);
      console.log(expensesSavingsAndInvestments);
      console.log(goals);
      (pageNum < 3) && setPageNum((prevPageNum) => prevPageNum = prevPageNum + 1);
    }
  return (
    <form>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <div
            className={`border-b border-gray-900/10 pb-6 align-middle space-y-4`}
          >
            <h2 className="block text-gray-500"> Step {pageNum} of 3</h2>
            <h1 className="font-semibold text-2xl leading-7 text-gray-900">
              {sections[pageNum - 1]}
            </h1>
          </div>
          {pageNum == 1 && <EmploymentAndIncome employmentAndIncomeData={employmentAndIncomeData} setEmploymentAndIncomeData={setEmploymentAndIncomeData} />}
          {pageNum == 2 && <ExpensesSavingsAndInvestments expensesSavingsAndInvestments={expensesSavingsAndInvestments} setExpensesSavingsAndInvestments={setExpensesSavingsAndInvestments} />}
          {pageNum == 3 && <GoalsAndRiskTolerance goals={goals} setgoals={setgoals}/>}
        </div>
      </div>

      <div className="relative mt-6 flex items-center justify-end gap-x-6">
      <button
          type="submit"
          onClick={(e) => { e.preventDefault(); ((pageNum > 1) && setPageNum((prevPageNum) => prevPageNum = prevPageNum - 1))}}
          style={{left: '0%'}}
          className="absolute rounded-md bg-purple-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
        >
          Back
        </button>
        <button
          onClick={() => onClose(false)}
          type="button"
          className="text-sm font-semibold leading-6 text-gray-900"
        >
          Cancel
        </button>
        <button
          type="submit"
          onClick = {handleClickNext}
          className="rounded-md bg-purple-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
        >
          Next
        </button>
      </div>
    </form>
  );
}
