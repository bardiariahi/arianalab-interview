import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { onSubmitData } from "../../store/slices/mainDataSlice";


function Index() {


  return (
    <div className="px-64 pt-32">     
      
      <div>
        {tableData ? (
          <>
            <p className="text-gray-500 font-bold text-center">
              there is no Data in table
            </p>
            <p className="text-gray-500 font-bold text-center">
              please add some data
            </p>
          </>
        ) : (
          <table className="table-auto w-full">
            <thead>
              <tr className="text-left">
                <th>Song</th>
                <th>Artist</th>
                <th>Year</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                <td>Malcolm Lockyer</td>
                <td>1961</td>
              </tr>
              <tr>
                <td>Witchy Woman</td>
                <td>The Eagles</td>
                <td>1972</td>
              </tr>
              <tr>
                <td>Shining Star</td>
                <td>Earth, Wind, and Fire</td>
                <td>1975</td>
              </tr>
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default Index;
