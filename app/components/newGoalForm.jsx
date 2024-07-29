import React, { useState, useRef, useEffect } from 'react';
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import EmploymentAndIncome from './EmploymentAndIncome';
import ExpensesSavingsAndInvestments from './ExpensesSavingAndInvestments';
import GoalsAndRiskTolerance from './GoalsAndRiskTolerance';
import axios from "axios";
import { jsPDF } from "jspdf";
import { Audio } from 'react-loader-spinner';
export default function NewGoalForm(props) {
    const onClose = props.onClose;
    const [pageNum, setPageNum] = useState(1);
   
    const sections = [
      'Employment and Income',
      'Expenses, Savings and Investments',
      'Goals & Risk Tolerance'
    ];
 
    const initalEmployementAndIncomeData =  {
      occupation: '',
      employer: '',
      employmentStatus: '',
      annualSalary: '',
      otherIncomeSources: '',
      monthlyIncomeSources: ''
    };
 
    const initalExpenseSavingsAndInvestments = {
      housingExpenses: '',
      utilitiesExpenses: '',
      emergencyFundCurrentBal: '',
      retirementSavings: '',
      investmentAccountCurrentVal: '',
      investmentAccountMonthlyContri: '',
    }
 
    const initalGoals = {
      exp: '',
      time: '',
      risk_tolerance: '',
      invest:''
    }
 
    let [employmentAndIncomeData, setEmploymentAndIncomeData] = useState(initalEmployementAndIncomeData);
    let [expensesSavingsAndInvestments, setExpensesSavingsAndInvestments] = useState(initalExpenseSavingsAndInvestments);
    let [goals,setgoals]=useState(initalGoals);
    const[isLoading , setIsLoading] = useState(false);
 
    async function generateContent(query) {
      try {
        const response = await axios.post('http://127.0.0.1:5000/api/generate-content', {
          query
        });
        console.log(response.data.response);
        return response.data.response;
        
      } catch (error) {
        throw new Error(error.response?.data?.message || 'Network response was not ok');
      }
  
    }
    async function saveData(data) {
      try {
        const response = await axios.post('http://127.0.0.1:5000/api/savedata', 
data        );
        console.log(response);
       
        
      } catch (error) {
        throw new Error(error.response?.data?.message || 'Network response was not ok');
      }
  
    }
  const generatePDF = (data) => {
  try {
    console.log("Starting PDF generation...");
    const doc = new jsPDF();
 
    // Set font and size
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
 
    // If the text is long, split it to fit into a certain width
    const maxWidth = 180; // Max width in mm
    const lineHeight = 7; // Line height in mm
    const splitText = doc.splitTextToSize(data, maxWidth);
 
    // Calculate x position for center alignment
    const pageWidth = doc.internal.pageSize.getWidth();
    const txtWidth = doc.getStringUnitWidth(splitText[0]) * doc.internal.getFontSize() / doc.internal.scaleFactor;
    const x = (pageWidth - txtWidth) / 2; // Adjust x as needed for alignment
 
    // Add split text line by line for better control
    let y = 20; // Adjust starting y position as needed
    const pageHeight = doc.internal.pageSize.getHeight();
 
    // Loop through each line of split text
    splitText.forEach((line) => {
      // Calculate x position for center alignment for each line
      const txtWidth = doc.getStringUnitWidth(line) * doc.internal.getFontSize() / doc.internal.scaleFactor;
      const pageWidth = doc.internal.pageSize.getWidth();
      const x = (pageWidth - txtWidth) / 2; // Center align
 
      // Check if adding another line would exceed the page height
      if (y > pageHeight - 10) { // Adjust margin
        doc.addPage();
        y = 20; // Reset y position to top of new page
      }
 
      // Print line
      doc.text(line, x, y);
      y += lineHeight; // Move to next line
    });
    doc.save("suggestions.pdf")
  } catch (error) {
    console.error("Error generating PDF:", error);
  }
  }
 
    const handleSubmit= async ()=>{

    setIsLoading(true);
    const query=`I want to invest Rs ${expensesSavingsAndInvestments?.investmentAccountMonthlyContri} money in a ${goals?.risk_tolerance} risky way for ${goals?.invest} for ${goals?.time} years also give proper names of the suggestions`;
    console.log(query);
    try{
    const suggestions = await generateContent(query);
    console.log("suggestions >>>>>>" , suggestions);
    generatePDF(suggestions);
    saveData(goals);
    
    } catch (error) {
      console.error("Error generating suggestions:", error);
    }
    finally{
      setIsLoading(false);
    }
    setEmploymentAndIncomeData(initalEmployementAndIncomeData);
    setExpensesSavingsAndInvestments(initalExpenseSavingsAndInvestments);
    setgoals(initalGoals);
    setPageNum(1);
    onClose();
    }
    const handleClickNext = (e) => {
      
      e.preventDefault();
      console.log(employmentAndIncomeData);
      console.log(expensesSavingsAndInvestments);
      console.log(goals);
      (pageNum < 3) && setPageNum((prevPageNum) => prevPageNum = prevPageNum + 1);
      if(pageNum==3){
        handleSubmit();
      }
    }
  return (
    <>
    {isLoading ?<>
    
    <Audio
  height="80"
  width="80"
  radius="9"
  color="green"
  ariaLabel="loading"
  wrapperStyle
  wrapperClass
/> 
<p>Analysing Your Data</p>
</>:
    <>
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
          disabled={isLoading}
          className="rounded-md bg-purple-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
        >
         {pageNum==3?"Submit":"Next"}
        </button>
      </div>
    </form>
    </>}
    </>
  );
}