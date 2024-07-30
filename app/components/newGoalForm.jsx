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
      monthlyIncomeSources: '',
      healthInsurance: false,
      lifeInsurance: false
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
        const response = await axios.post('http://127.0.0.1:8082/api/advisory/investmentDetails', 
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
    
        // Function to add bold text
        function addBoldText(doc, text, x, y) {
          doc.setFont("times", "bold");
          doc.setTextColor(0, 0, 0);
          doc.setFontSize(12);
          doc.text(text, x, y);
          doc.setFont("courier", "normal"); // Reset to normal font
          doc.setTextColor(107)
          
        }
    
        // Function to add regular text
        function addRegularText(doc, text, x, y) {
          doc.setFontSize(10); // Set font size to 10 for regular text
          doc.setFont("helvetica", "normal"); // Ensure normal font style for regular text
          const maxWidth = 180; // Max width in mm
          const lineHeight = 7; // Line height in mm
          const splitText = doc.splitTextToSize(text, maxWidth);
    
          let currentY = y;
    
          splitText.forEach((line) => {
            // Check if adding another line would exceed the page height
            if (currentY > doc.internal.pageSize.getHeight() - 10) { // Adjust margin
              doc.addPage();
              addPageBorder(doc);
              currentY = 20; // Reset y position to top of new page
            }
    
            // Print line
            doc.text(line, x, currentY);
            currentY += lineHeight; // Move to next line
          });
    
          return currentY; // Return the new y position after adding text
        }
    

        function addPageBorder(doc) {
          const pageWidth = doc.internal.pageSize.width;
          const pageHeight = doc.internal.pageSize.height;
          const borderWidth = 1; // Border width in mm
    
          doc.setDrawColor(0, 0, 0); // Set border color (black)
          doc.setLineWidth(borderWidth); // Set border width
    
          // Draw rectangle for the border
          doc.rect(5, 5, pageWidth - 10, pageHeight - 10); // Adjust margins for border
        }

        // Split data into lines and process
        const lines = data.split('\n');
        const x = 10; // Margin from the left edge of the page
        let y = 20; // Adjust starting y position as needed
    
        addPageBorder(doc);

        lines.forEach(line => {
          // Remove asterisks from the line
          const cleanedLine = line.replace(/\*/g, '');
    
          if (line.startsWith("**") && line.endsWith("**")) {
            // Heading detected
            addBoldText(doc, cleanedLine.replace(/\*\*/g, ''), x, y);
            y += 10; // Space between heading and body text
          } else {
            // Regular text
            y = addRegularText(doc, cleanedLine, x, y);
          }
        });
    
        doc.save("suggestions.pdf");
    
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
    const storedEmail = localStorage.getItem('email');
    saveData({"email": storedEmail,
    "investedAmount": expensesSavingsAndInvestments.investmentAccountMonthlyContri,
    "emergencyFund": expensesSavingsAndInvestments.emergencyFundCurrentBal,
    "retirementSaving": expensesSavingsAndInvestments.retirementSavings,
    "investmentExperience": goals.exp,
    "monthlyIncome": employmentAndIncomeData.monthlyIncomeSources,
    "riskTolerance": goals.risk_tolerance});
    
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