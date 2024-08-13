"use client";
import React, { useState, useRef } from "react";
import { cardsDetails, calculationRows } from "./CardsList";

const ComparisonTable = ({ tableRef, rows, cardsName, isTableVisible }) => {
  const card1Data = cardsDetails[cardsName.card1.id] || [];
  const card2Data = cardsDetails[cardsName.card2.id] || [];
  const card3Data = cardsDetails[cardsName.card3.id] || [];
  const expensesData = useRef({});
  const [isSavingsValueVisible, setIsSavingsValueVisible] = useState(false);
  const [cardSavings, setCardSavings] = useState({
    card1Savings: 0,
    card2Savings: 0,
    card3Savings: 0
  });

  const calculateTotalSavings = (cardData, expenses) => {
    let sum = 0;
    cardData.forEach((category) => {
        const { multiplier } = category;
        if(multiplier) {
            const categoryId = Object.keys(category)[0];
            sum += expenses[categoryId] ? expenses[categoryId] * multiplier : 0
        }
    })
    return sum;
  }

  const handleCalculateButtonClick = () => {
    setCardSavings((prevState) => ({...prevState, card1Savings: calculateTotalSavings(card1Data, expensesData.current)}));
    setIsSavingsValueVisible(true);
    if (tableRef?.current && isTableVisible) {
      tableRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const calculateButton = (
    <button
      class="btn text-white bg-indigo-950 border-0 w-full focus:outline-none hover:bg-indigo-600 transition-all duration-500 rounded-lg"
      onClick={handleCalculateButtonClick}
    >
      Calculate
    </button>
  );

  return (
    <section
      ref={tableRef}
      class={`text-gray-700 body-font overflow-clip border-t border-gray-200`}
    >
      <div
        class={`container px-5 py-24 mx-auto flex opacity-0 ${
          isTableVisible ? "opacity-100" : "hidden"
        } transition-all duration-500 flex-wrap`}
      >
        <div class="lg:w-1/4 lg:mt-px w-full mb-10 lg:mb-0 border-2 border-gray-300 lg:border-none rounded-lg lg:rounded-none">
          <div class="px-2 bg-gray-50 text-center h-48 flex flex-col items-center justify-center invisible"></div>

          <div class="mt-px border-t border-gray-300 border-b border-l rounded-tl-lg rounded-bl-lg">
            {rows.map((row) => {
              if (row.id === "BREAK")
                return (
                  <p class="bg-lime-200 border border-stone-200 text-gray-900 h-12 text-center px-4 flex items-center justify-start"
                  style={{position: 'sticky', top: '0'}}>
                    {row.name}
                  </p>
                  
                );

              return (
                <p class="bg-gray-100 border border-stone-200 text-gray-900 h-12 text-center px-4 flex items-center justify-start">
                  {row.name}
                </p>
              );
            })}
          </div>
        </div>

        {/* Cards data starts */}
        <div class="flex lg:w-3/4 w-full flex-wrap lg:border border-gray-300 rounded-lg">
          {/* 1st card starts */}
          {card1Data.length ? (
            <div class="lg:w-1/4 lg:mt-px w-full mb-10 lg:mb-0 border-2 border-gray-300 lg:border-none rounded-lg lg:rounded-none">
              <div class="relative px-2 bg-gray-50 text-center h-48 flex flex-col items-center justify-center">
                <h3 class="tracking-widest font-bold">
                  {cardsName.card1.name}
                </h3>
                {/* <h2 class="text-xl text-gray-900 font-medium leading-none mb-4 mt-2">Your total savings</h2> */}
                {isSavingsValueVisible ? (
                  <span class="absolute bottom-4 text-sm text-gray-600">
                    Your total savings: ₹{cardSavings.card1Savings}
                  </span>
                ) : (
                  <></>
                )}
              </div>

              {card1Data.map((row) => {
                const text = Object.values(row)[0];
                const id = Object.keys(row)[0];

                if (id === "BREAK")
                  return (
                    <p class="h-12 bg-gray-50 border border-stone-200 text-gray-600 px-6 text-center leading-relaxed flex items-center justify-center"
                    style={{position: 'sticky', top: '0'}}>
                      {" "}
                    </p>
                  );

                return (
                  <p class="h-12 border border-stone-200 text-gray-600 px-6 text-center leading-relaxed flex items-center justify-center">
                    {text}
                  </p>
                );
              })}

              <div class="border-t border-gray-300 p-6 text-center rounded-bl-lg">
                <button
                  class="btn text-white bg-indigo-950 border-0 w-full focus:outline-none hover:bg-indigo-600 transition-all duration-500 rounded-lg"
                //   onClick={handleCalculateButtonClick}
                >
                  Apply Now!
                </button>
              </div>
            </div>
          ) : (
            <></>
          )}
          {/* 1st card ends */}

          {/* 2nd card starts */}
          {card2Data.length ? (
            <div class="lg:w-1/4 lg:-mt-px w-full mb-10 lg:mb-0 border-2 rounded-lg relative">
              <div class="relative px-2 bg-gray-50 text-center h-48 flex flex-col items-center justify-center">
                <h3 class="tracking-widest font-bold">
                  {cardsName.card2.name}
                </h3>
                {isSavingsValueVisible ? (
                  <span class="absolute bottom-4 text-sm text-gray-600">
                    Your total savings: ₹{cardSavings.card2Savings}
                  </span>
                ) : (
                  <></>
                )}
              </div>

              {card2Data.map((row) => {
                const text = Object.values(row)[0];
                const id = Object.keys(row)[0];

                if (id === "BREAK")
                  return (
                    <p class="h-12 border border-stone-200 bg-gray-50 text-gray-600 px-6 text-center leading-relaxed flex items-center justify-center"
                    style={{position: 'sticky', top: '0'}}>
                      {" "}
                    </p>
                  );

                return (
                  <p class="h-12 border border-stone-200 text-gray-600 px-6 text-center leading-relaxed flex items-center justify-center">
                    {text}
                  </p>
                );
              })}

              <div class="border-t border-gray-300 p-6 text-center rounded-bl-lg">
              <button
                  class="btn text-white bg-indigo-950 border-0 w-full focus:outline-none hover:bg-indigo-600 transition-all duration-500 rounded-lg"
                //   onClick={handleCalculateButtonClick}
                >
                  Apply Now!
                </button>
              </div>
            </div>
          ) : (
            <></>
          )}
          {/* 2nd card ends */}

          {/* 3rd card starts */}
          {card3Data.length ? (
            <div class="lg:w-1/4 lg:mt-px w-full mb-10 lg:mb-0 border-2 border-gray-300 lg:border-none rounded-lg lg:rounded-none">
              <div class="relative px-2 bg-gray-50 text-center h-48 flex flex-col items-center justify-center">
                <h3 class="tracking-widest font-bold">
                  {cardsName.card3.name}
                </h3>
                {isSavingsValueVisible ? (
                  <span class="absolute bottom-4 text-sm text-gray-600">
                    Your total savings: ₹{cardSavings.card3Savings}
                  </span>
                ) : (
                  <></>
                )}
              </div>

              {card3Data.map((row) => {
                const text = Object.values(row)[0];
                const id = Object.keys(row)[0];

                if (id === "BREAK")
                  return (
                    <p class="h-12 border border-stone-200 bg-gray-50 text-gray-600 px-6 text-center leading-relaxed flex items-center justify-center"
                    style={{position: 'sticky', top: '0'}}
                    >
                      {" "}
                    </p>
                  );

                return (
                  <p class="h-12 border border-stone-200 text-gray-600 px-6 text-center leading-relaxed flex items-center justify-center">
                    {text}
                  </p>
                );
              })}

              <div class="border-t border-gray-300 p-6 text-center rounded-bl-lg">
              <button
                  class="btn text-white bg-indigo-950 border-0 w-full focus:outline-none hover:bg-indigo-600 transition-all duration-500 rounded-lg"
                //   onClick={handleCalculateButtonClick}
                >
                  Apply Now!
                </button>
              </div>
            </div>
          ) : (
            <></>
          )}
          {/* 3rd card ends */}

          <div class="lg:w-1/4 lg:mt-px w-full mb-10 lg:mb-0 border-2 border-gray-300 lg:border-none rounded-lg lg:rounded-none">
            <div class="px-2 bg-gray-50 text-center h-48 flex flex-col items-center justify-center border-l">
              <h3 class="tracking-widest font-bold">Calculate Your Savings</h3>
            </div>
            {calculationRows.map((row) => {
              if (row.isNum) {
                return (
                  <input
                    type="text"
                    placeholder={`${row.name}`}
                    onChange={(e) => {
                      expensesData.current = {
                        ...expensesData.current,
                        [row.id]: e.target.value,
                      };
                    }}
                    className={`h-12 border-stone-200 hover:scale-105 transition-all duration-300 block w-full text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
                  />
                );
              } else {
                return (
                  <p class={`${row.id === 'BREAK' && 'sticky top-0'} h-12 border border-stone-200 bg-gray-50 text-gray-600 px-6 text-center leading-relaxed flex items-center justify-center`}>
                    -
                  </p>
                );
              }
            })}

            <div class="border-t border-gray-300 p-6 text-center rounded-bl-lg">
              <button
                class="btn text-white bg-indigo-950 border-0 w-full focus:outline-none hover:bg-indigo-600 transition-all duration-500 rounded-lg"
                onClick={handleCalculateButtonClick}
              >
                Calculate
              </button>
            </div>
          </div>
        </div>
        {/* Cards data ends */}
      </div>
    </section>
  );
};

export default ComparisonTable;
