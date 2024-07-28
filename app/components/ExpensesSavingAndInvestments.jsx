import React from 'react'

const ExpensesSavingAndInvestments = ({expensesSavingsAndInvestments, setExpensesSavingsAndInvestments}) => {
  return (

<div className=" border-b border-gray-900/10 pb-12"
>
        <div className="mt-7 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

        <h2 className='sm:col-span-6 text-xl' style={{marginBottom: '-3%'}}>Expenses</h2>
          <div className="sm:col-span-3">
            <label
              htmlFor="first-name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Housing Expenses
            </label>
            <div className="mt-2">
              <input
                id="housingExpenses"
                name="housingExpenses"
                value={expensesSavingsAndInvestments.housingExpenses}
                onChange={(e) => setExpensesSavingsAndInvestments((prevState) => ({...prevState, housingExpenses: e.target.value}))}
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
              Utilities Expenses
            </label>
            <div className="mt-2">
              <input
                id="utilitiesExpenses"
                name="utilitiesExpenses"
                value={expensesSavingsAndInvestments.utilitiesExpenses}
                onChange={(e) => setExpensesSavingsAndInvestments((prevState) => ({...prevState, utilitiesExpenses: e.target.value}))}
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
              Transportation
            </label>
            <div className="mt-2">
              <input
                id="transportation"
                name="transportation"
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
              Groceries & Dining Out
            </label>
            <div className="mt-2">
              <input
                id="groceriesAndDiningOut"
                name="groceriesAndDiningOut"
                value={expensesSavingsAndInvestments.groceriesAndDiningOut}
                onChange={(e) => setExpensesSavingsAndInvestments((prevState) => ({...prevState, groceriesAndDiningOut: e.target.value}))}
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
              Health & Medical
            </label>
            <div className="mt-2">
              <input
                id="healthAndMedical"
                name="healthAndMedical"
                value={expensesSavingsAndInvestments.healthAndMedical}
                onChange={(e) => setExpensesSavingsAndInvestments((prevState) => ({...prevState, healthAndMedical: e.target.value}))}
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
              Miscellaneous
            </label>
            <div className="mt-2">
              <input
                id="miscellaneous"
                name="miscellaneous"
                value={expensesSavingsAndInvestments.miscellaneous}
                onChange={(e) => setExpensesSavingsAndInvestments((prevState) => ({...prevState, miscellaneous: e.target.value}))}
                type="text"
                autoComplete="family-name"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <h2 className='sm:col-span-6 text-xl' style={{marginBottom: '-3%'}}>Savings</h2>
          <div className="sm:col-span-3">
            <label
              htmlFor="first-name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Emergency Fund - Current Balance
            </label>
            <div className="mt-2">
              <input
                id="emergencyFundCurrentBal"
                name="emergencyFundCurrentBal"
                value={expensesSavingsAndInvestments.emergencyFundCurrentBal}
                onChange={(e) => setExpensesSavingsAndInvestments((prevState) => ({...prevState, emergencyFundCurrentBal: e.target.value}))}
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
              Emergency Fund - Monthly Contribution
            </label>
            <div className="mt-2">
              <input
                id="emergencyFundMonthlyContri"
                name="emergencyFundMonthlyContri"
                value={expensesSavingsAndInvestments.emergencyFundMonthlyContri}
                onChange={(e) => setExpensesSavingsAndInvestments((prevState) => ({...prevState, emergencyFundMonthlyContri: e.target.value}))}
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
              Retirement Savings
            </label>
            <div className="mt-2">
              <input
                id="retirementSavings"
                name="retirementSavings"
                value={expensesSavingsAndInvestments.retirementSavings}
                onChange={(e) => setExpensesSavingsAndInvestments((prevState) => ({...prevState, retirementSavings: e.target.value}))}
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
              Short Term Savings - Vacations, Hobbies etc
            </label>
            <div className="mt-2">
              <input
                id="shortTermSavings"
                name="shortTermSavings"
                value={expensesSavingsAndInvestments.shortTermSavings}
                onChange={(e) => setExpensesSavingsAndInvestments((prevState) => ({...prevState, shortTermSavings: e.target.value}))}
                type="text"
                autoComplete="family-name"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <h2 className='sm:col-span-6 text-xl' style={{marginBottom: '-3%'}}>Investments</h2>
          <div className="sm:col-span-3">
            <label
              htmlFor="last-name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Investment Account - Current Value
            </label>
            <div className="mt-2">
              <input
                id="investmentAccountCurrentVal"
                name="investmentAccountCurrentVal"
                value={expensesSavingsAndInvestments.investmentAccountCurrentVal}
                onChange={(e) => setExpensesSavingsAndInvestments((prevState) => ({...prevState, investmentAccountCurrentVal: e.target.value}))}
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
              Investment Account - Monthly Contribution
            </label>
            <div className="mt-2">
              <input
                id="investmentAccountMonthlyContri"
                name="investmentAccountMonthlyContri"
                value={expensesSavingsAndInvestments.investmentAccountMonthlyContri}
                onChange={(e) => setExpensesSavingsAndInvestments((prevState) => ({...prevState, investmentAccountMonthlyContri: e.target.value}))}
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
              Mutual Funds & ETFs
            </label>
            <div className="mt-2">
              <input
                id="mutualFundsAndETFs"
                name="mutualFundsAndETFs"
                value={expensesSavingsAndInvestments.mutualFundsAndETFs}
                onChange={(e) => setExpensesSavingsAndInvestments((prevState) => ({...prevState, mutualFundsAndETFs: e.target.value}))}
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
              Stocks and Bonds
            </label>
            <div className="mt-2">
              <input
                id="stocksAndBonds"
                name="stocksAndBonds"
                value={expensesSavingsAndInvestments.stocksAndBonds}
                onChange={(e) => setExpensesSavingsAndInvestments((prevState) => ({...prevState, stocksAndBonds: e.target.value}))}
                type="text"
                autoComplete="family-name"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>
      </div>
  )
}

export default ExpensesSavingAndInvestments