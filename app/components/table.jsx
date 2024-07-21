'use client'
import React from "react";

const DataTable = (props) => {

  // let columns = props.columns;
  let rows = props.rows || [];

  return (
    <section className="py-1 bg-blueGray-50">
      <div className="w-full h-full">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
          <div className="block w-full overflow-x-auto">
            <table className="items-center bg-transparent w-full border-collapse ">
              <tbody>
                {
                  rows.map((row) => {
                    const buttonType = row.type;
                    let buttonColor = null;

                    switch(buttonType) {
                      case 'success':
                        buttonColor = 'bg-green-500';
                        break;
                      case 'error':
                        buttonColor = 'bg-red-500';
                        break;
                      default:
                        buttonColor = 'bg-purple-600';
                        break;
                    }

                    return (<tr className="shadow">
                  <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                    {row.left}
                  </th>
                  
                  <td className="border-t-0 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap">
                    {row.isButton ? <button class={`${buttonColor} text-white active:${buttonColor} text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150`} type="button">{row.right}</button> : row.right}
                  </td>
                </tr>)
                  })
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default DataTable;
