"use client";
import React, { useRef, useState, useEffect } from "react";
import ComparisonTable from "./ComparisonTable.jsx";
import { cardsList } from "./CardsList.js";
import { comparisonRows } from "./ComparisonTerms.js";
import { FaArrowCircleLeft } from "react-icons/fa";
import Head from 'next/head';

// const foregroundColor = '#00EAA1';

const creditCards = () => {
  const tableRef = useRef<HTMLDivElement>(null);
  const [isTableVisible, setIsTableVisible] = useState<Boolean>(false);
  const [isCardSelectionVisible, setIsCardSelectionVisible] = useState<Boolean>(false);
  const [typeOfCards , setTypeOfCards] = useState<String | null>(null);
  const [showInvalidSelectionModal, setShowInvalidSelectionModal] = useState<Boolean>(false);
  const [selectedCards, setSelectedCards] = useState<{
    card1: any;
    card2: any;
    card3: any;
  }>({
    card1: {
      name: null,
      id: null,
    },
    card2: {
      name: null,
      id: null,
    },
    card3: {
      name: null,
      id: null,
    },
  });

  const handleCardTypeSelect = (cardType: string) => {
    setTypeOfCards(cardType);
    setIsCardSelectionVisible(true);
  }

  const isSelectionValid = () => (selectedCards.card1.id && selectedCards.card2.id && selectedCards.card3.id)

  const handleStartComparingClick = () => {
    
    if(isSelectionValid()) {
        setIsTableVisible(true);
        if (tableRef?.current && isTableVisible) {
          tableRef.current.scrollIntoView({ behavior: "smooth" });
        }
    } else {
        setShowInvalidSelectionModal(true);
        const modal = document?.getElementById('selectAllCardsModal') as HTMLDialogElement;
        modal.showModal();
    }
  };

  const handleSelectCards = (event: any, cardNumber: any) => {
    const { selectedIndex, value: id } = event.target;
    const name = event.target.options[selectedIndex].text;

    setSelectedCards((prevState) => ({
      ...prevState,
      [cardNumber]: { name, id },
    }));
  };

  useEffect(() => {
    if (tableRef?.current && isTableVisible) {
      tableRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [isTableVisible]);

  useEffect(() => {
    if(!isCardSelectionVisible) {
        setIsTableVisible(false);
    }
  }, [isCardSelectionVisible])

  return (
    <>
      <head>
        <title>Cards Comparison Tool</title>
      </head>

      <body
        className="h-screen"
        style={{ backgroundColor: "#f7feef", minHeight: "100vh" }}
      >
        <div
          className={`h-[0.8vh] w-full fixed top-0 z-50 bg-green-400 animate-scrollWatcher top-scroll-watcher`}
          style={{
            scale: "0 1",
            transformOrigin: "left",
          }}
        ></div>

        <div
          className={`flex flex-col justify-center h-[5vh] w-full bg-black text-center align-middle text-white text-xl `}
          style={{ alignContent: "center" }}
        >
          Sorry, the page is not yet mobile responsive
        </div>

        {/* Navbar starts */}
        {/* <div
        className={`relative z-10 flex justify-center navbar bg-gray-200 shadow-xl`}
      ></div> */}
        {/* Navbar ends */}

        {/* Heading starts */}
        <div className={`mx-20`}>
          <h1
            className={`text-black text-center font-bold font-sans text-4xl pt-12`}
          >
            Card Comparison
          </h1>
          <div className={`block bg-green-400 w-[10%] h-1 mt-4 ml-[45%]`}></div>
        </div>
        {/* Heading ends */}

        {/* SVG with description starts */}
        <div className={`grid grid-cols-12 gap-6 mx-24 mt-12`}>
          {/* Left column starts */}
          <div className={`col-span-4`}>
            <img src="/assets/card-compare.svg" className={`scale-95`} />
          </div>
          {/* Left column ends */}

          {/* Right column starts */}
          <div className={`col-span-8`}>
            <div className="block mt-6 font-sans text-black">
              Compare up to 3 Credit Cards of your choice at once with the right
              data for a wise decision
            </div>

            <h1 className="block mt-4 text-black font-sans font-bold text-3xl">
              Full Details Side by Side
            </h1>

            <div className="block mt-4 text-black font-sans">
              Our Card Comparison tool combines advanced tech with credible data
              to fuel your choice of a card that best fits your needs. Use it to
              find a card that’ll save you more, earn you more and ease your
              financial journey the most.
            </div>

            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <dialog id="selectAllCardsModal" className="modal">
              <div className="modal-box bg-slate-100">
                <h3 className="font-bold text-lg text-black">
                  Please select all 3 cards to continue
                </h3>
                <div className="modal-action">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn bg-slate-200 text-black border-none hover:text-white">
                      Close
                    </button>
                  </form>
                </div>
              </div>
            </dialog>

            <div className={`flex overflow-x-hidden`}>
              <div
                className={`min-w-full ${
                  isCardSelectionVisible && "-translate-x-[100%]"
                } duration-300 transition-all`}
              >
                <div className="block mt-6">
                  {/* <div className={`grid gap-9 grid-cols-3`}>
                  <div className={` col-span-1`}>
                    <select
                      onChange={(e) => handleSelectCards(e, "card1")}
                      className="bg-lime-100 select select-bordered border-indigo-950 w-full max-w-xs text-black font-bold"
                    >
                      <option disabled selected>
                        Card 1
                      </option>
                      {cardsList.map((cardObj) => {
                        return (
                          <option value={cardObj.id}>{cardObj.name}</option>
                        );
                      })}
                    </select>
                  </div>
                  <div className={` col-span-1`}>
                    <select
                      onChange={(e) => handleSelectCards(e, "card2")}
                      className="bg-lime-100 select select-bordered border-indigo-950 w-full max-w-xs text-black font-bold"
                    >
                      <option disabled selected>
                        Card 2
                      </option>
                      {cardsList.map((cardObj) => {
                        return (
                          <option value={cardObj.id}>{cardObj.name}</option>
                        );
                      })}
                    </select>
                  </div>
                  <div className={` col-span-1`}>
                    <select
                      onChange={(e) => handleSelectCards(e, "card3")}
                      className="bg-lime-100 select select-bordered w-full max-w-xs border-indigo-950 text-black font-bold"
                    >
                      <option disabled selected>
                        Card 3
                      </option>
                      {cardsList.map((cardObj) => {
                        return (
                          <option value={cardObj.id}>{cardObj.name}</option>
                        );
                      })}
                    </select>
                  </div>
                </div> */}

                  <div className={`block`}>
                    <h1 className={`text-black text-3xl`}>
                      What type of cards would you like to compare?
                    </h1>
                  </div>

                  <div className={`grid grid-cols-3 gap-9 mt-[3%]`}>
                    <button
                      className="btn col-start-1 bg-indigo-950 text-white text-lg hover:scale-105"
                      onClick={() => handleCardTypeSelect("cashback")}
                    >
                      Cashback Cards
                    </button>
                    <button
                      className="btn col-start-3 bg-gray-600 text-white text-lg cursor-not-allowed"
                      // onClick={() => handleCardTypeSelect('points')}
                    >
                      Points Cards
                    </button>
                  </div>
                </div>

                {/* <div className="block mt-10">
                <div className={`grid gap-9 grid-cols-3`}>
                  <FaArrowCircleLeft
                    onClick={() => setIsLeftClicked(true)}
                    className={`col-span-1 scale-[250%] ml-[5%] mt-[7%] text-indigo-950 cursor-pointer hover:scale-[270%] transition-all duration-300`}
                  />
                  <button
                    className="col-start-3 btn bg-indigo-950 text-white text-lg hover:scale-110"
                    onClick={handleStartComparingClick}
                  >
                    Start Comparing!
                  </button>
                </div>
              </div> */}
              </div>
              <div
                className={`min-w-full ${
                  isCardSelectionVisible && "-translate-x-[100%]"
                } duration-300 transition-all`}
              >
                <div className="block mt-6">
                  <div className={`grid gap-9 grid-cols-3`}>
                    <div className={` col-span-1`}>
                      <select
                        onChange={(e) => handleSelectCards(e, "card1")}
                        className="bg-lime-100 select select-bordered border-indigo-950 w-full max-w-xs text-black font-bold"
                      >
                        <option disabled selected>
                          Card 1
                        </option>
                        {cardsList.map((cardObj) => {
                          return (
                            <option value={cardObj.id}>{cardObj.name}</option>
                          );
                        })}
                      </select>
                    </div>
                    <div className={` col-span-1`}>
                      <select
                        onChange={(e) => handleSelectCards(e, "card2")}
                        className="bg-lime-100 select select-bordered border-indigo-950 w-full max-w-xs text-black font-bold"
                      >
                        <option disabled selected>
                          Card 2
                        </option>
                        {cardsList.map((cardObj) => {
                          return (
                            <option value={cardObj.id}>{cardObj.name}</option>
                          );
                        })}
                      </select>
                    </div>
                    <div className={` col-span-1`}>
                      <select
                        onChange={(e) => handleSelectCards(e, "card3")}
                        className="bg-lime-100 select select-bordered w-full max-w-xs border-indigo-950 text-black font-bold"
                      >
                        <option disabled selected>
                          Card 3
                        </option>
                        {cardsList.map((cardObj) => {
                          return (
                            <option value={cardObj.id}>{cardObj.name}</option>
                          );
                        })}
                      </select>
                    </div>
                  </div>
                </div>

                <div className="block mt-10">
                  <div className={`grid gap-9 grid-cols-3`}>
                    <FaArrowCircleLeft
                      onClick={() => setIsCardSelectionVisible(false)}
                      className={`col-span-1 scale-[250%] ml-[5%] mt-[7%] text-indigo-950 cursor-pointer hover:scale-[270%] transition-all duration-300`}
                    />
                    <button
                      className="col-start-3 btn bg-indigo-950 text-white text-lg hover:scale-105"
                      onClick={handleStartComparingClick}
                    >
                      Start Comparing!
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Right column ends */}
        </div>
        {/* SVG with description ends */}

        {/* News bar animation starts */}
        <div
          style={{
            marginLeft: "9%",
            width: "84.5vw",
            height: "5vh",
            borderWidth: "0px 15px",
            borderColor: "black",
          }}
          className={`block bg-black overflow-x-hidden rounded-xl`}
        >
          <div className="py-2 px-4 text-white font-bold flex animate-translateXAnimation overflow-x-hidden">
            SBI Cashback: 5% | HSBC Cashback: 10% | HDFC TATA Neu Plus: 1% |
            HDFC TATA Neu Infinity: 1.5% | HDFC Swiggy: 5%
          </div>
        </div>
        {/* News bar animation ends */}

        <ComparisonTable
          tableRef={tableRef}
          rows={comparisonRows}
          cardsName={selectedCards}
          isTableVisible={isTableVisible}
        />
      </body>
    </>
  );
};

export default creditCards;
