import React from "react";

const GoalsAndRiskTolerance = () => {
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
          <select class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
            <option value="none">None</option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
        </div>

        <div className="sm:col-span-6">
          <label
            htmlFor="last-name"
            className="block text-sm font-medium leading-6 text-gray-900 mb-2"
          >
            What's your Risk Tolerance
          </label>
          <div class="flex items-center mb-2">
            <input
              type="checkbox"
              id="very_low"
              name="risk_tolerance"
              value="very_low"
              class="mr-2"
            />
            <label
              for="very_low"
              className="text-sm font-medium leading-6 text-gray-900"
            >
              Very low
            </label>
          </div>
          <div class="flex items-center mb-2">
            <input
              type="checkbox"
              id="low"
              name="risk_tolerance"
              value="low"
              class="mr-2"
            />
            <label
              for="low"
              className="text-sm font-medium leading-6 text-gray-900"
            >
              Low
            </label>
          </div>
          <div class="flex items-center mb-2">
            <input
              type="checkbox"
              id="moderate"
              name="risk_tolerance"
              value="moderate"
              class="mr-2"
            />
            <label
              for="moderate"
              className="text-sm font-medium leading-6 text-gray-900"
            >
              Moderate
            </label>
          </div>
          <div class="flex items-center mb-2">
            <input
              type="checkbox"
              id="high"
              name="risk_tolerance"
              value="high"
              class="mr-2"
            />
            <label
              for="high"
              className="text-sm font-medium leading-6 text-gray-900"
            >
              High
            </label>
          </div>
          <div class="flex items-center mb-2">
            <input
              type="checkbox"
              id="very_high"
              name="risk_tolerance"
              value="very_high"
              class="mr-2"
            />
            <label
              for="very_high"
              className="text-sm font-medium leading-6 text-gray-900"
            >
              Very high
            </label>
          </div>
        </div>

        <div className="sm:col-span-6">
          <label
            htmlFor="last-name"
            className="block text-sm font-medium leading-6 text-gray-900 mb-2"
          >
            How would you react if your investments lost 10% of their value in a month?
            </label>
          <div class="flex items-center mb-2">
            <input
              type="checkbox"
              id="sellAll"
              name="risk_tolerance"
              value="sellAll"
              class="mr-2"
            />
            <label
              for="sellAll"
              className="text-sm font-medium leading-6 text-gray-900"
            >
              Sell all investments
            </label>
          </div>
          <div class="flex items-center mb-2">
            <input
              type="checkbox"
              id="sellSome"
              name="risk_tolerance"
              value="sellSome"
              class="mr-2"
            />
            <label
              for="sellSome"
              className="text-sm font-medium leading-6 text-gray-900"
            >
              Sell some investments
            </label>
          </div>
          <div class="flex items-center mb-2">
            <input
              type="checkbox"
              id="doNothing"
              name="risk_tolerance"
              value="doNothing"
              class="mr-2"
            />
            <label
              for="doNothing"
              className="text-sm font-medium leading-6 text-gray-900"
            >
              Do nothing
            </label>
          </div>
          <div class="flex items-center mb-2">
            <input
              type="checkbox"
              id="buyMore"
              name="risk_tolerance"
              value="buyMore"
              class="mr-2"
            />
            <label
              for="buyMore"
              className="text-sm font-medium leading-6 text-gray-900"
            >
              Buy more investments
            </label>
          </div>
        </div>

        <div className="sm:col-span-6">
          <label
            htmlFor="last-name"
            className="block text-sm font-medium leading-6 text-gray-900 mb-2"
          >
            What's your primary investment goal?
            </label>
          <div class="flex items-center mb-2">
            <input
              type="checkbox"
              id="capitalPreservation"
              name="risk_tolerance"
              value="capitalPreservation"
              class="mr-2"
            />
            <label
              for="capitalPreservation"
              className="text-sm font-medium leading-6 text-gray-900"
            >
              Capital preservation
            </label>
          </div>
          <div class="flex items-center mb-2">
            <input
              type="checkbox"
              id="incomeGeneration"
              name="risk_tolerance"
              value="incomeGeneration"
              class="mr-2"
            />
            <label
              for="incomeGeneration"
              className="text-sm font-medium leading-6 text-gray-900"
            >
              Income generation
            </label>
          </div>
          <div class="flex items-center mb-2">
            <input
              type="checkbox"
              id="growth"
              name="risk_tolerance"
              value="growth"
              class="mr-2"
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
              name="risk_tolerance"
              value="aggressiveGrowth"
              class="mr-2"
            />
            <label
              for="aggressiveGrowth"
              className="text-sm font-medium leading-6 text-gray-900"
            >
              Aggressive growth
            </label>
          </div>
        </div>

        <div className="sm:col-span-6">
          <label
            htmlFor="last-name"
            className="block text-sm font-medium leading-6 text-gray-900 mb-2"
          >
            How long do you plan to invest before you need to withdraw a significant portion of your investments?
            </label>
            <select class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6">
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
