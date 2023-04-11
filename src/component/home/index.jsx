import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { onSubmitData } from "../../store/slices/mainDataSlice";


function Index() {
  let navigate = useNavigate();
  const dispatch = useDispatch()

  function handleCharts() {
    navigate("/charts");
  }
  
  const [tableData, setTableData] = useState([]);
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [skills, setSkills] = useState();
  const [bd, setBd] = useState("");
  const [age,setAge] = useState()

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleLastName = (e) => {
    setLastName(e.target.value);
  };

  const handleBDChange = (e) => {
    const currentDate = new Date().getFullYear()
    const userYear = (e.target.value).split("-")
    setBd(e.target.value)
    setAge(Number(currentDate) - Number(userYear[0]));
  };

  const handleSkillsChange = (e) => {
    setSkills(e.target.value);
  };

  const handleSubmitData = () => {
    let data = {
      name,
      lastName ,
      age,
      skills
    }
    console.log(data);
    dispatch(onSubmitData());
  };

  return (
    <div className="px-64 pt-32">
      <div className="flex justify-between">
        <button className="btn btn-accent text-white" onClick={handleCharts}>
          show charts
        </button>

        <label htmlFor="my-modal" className="btn">
          add to list
        </label>
      </div>
      <div>
        <input type="checkbox" id="my-modal" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box">
            <div className="flex gap-3 justify-between">
              <span className="self-center">name :</span>
              <input
                type="text"
                placeholder="your name"
                className="input input-bordered w-full max-w-xs"
                value={name}
                onChange={handleName}
              />
            </div>
            <div className="flex gap-3 justify-between py-3">
              <span className="self-center"> last name :</span>
              <input
                type="text"
                placeholder="your last name"
                className="input input-bordered w-full max-w-xs"
                value={lastName}
                onChange={handleLastName}
              />
            </div>
            <div className="flex justify-between gap-4 pb-3">
              <span className="self-center">birth day:</span>
              <input
                value={bd}
                onChange={handleBDChange}
                className="input input-bordered w-full max-w-xs"
                type="date"
              />
            </div>
            <div className="flex justify-between gap-4">
              <span>skills :</span>
              <select
                className="input input-bordered w-full max-w-xs"
                name="skills"
                value={skills}
                onChange={handleSkillsChange}
                multiple
              >
                <option value="html">html</option>
                <option value="js">js</option>
                <option value="react">react</option>
                <option value="ts">ts</option>
              </select>
            </div>
            <div className="modal-action flex justify-between">
              <label htmlFor="my-modal" className="btn">
                Close
              </label>
              <button
                onClick={handleSubmitData}
                className="btn btn-active btn-primary"
              >
                submit data
              </button>
            </div>
          </div>
        </div>
      </div>
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
