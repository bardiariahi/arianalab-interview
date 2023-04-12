import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { onSubmitData } from "../../store/slices/mainDataSlice";

function ModalButton() {
    const dispatch = useDispatch();

    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [skills, setSkills] = useState([]);
    const [bd, setBd] = useState("");
    const [age, setAge] = useState();
    const [btnIsAllow,setBtnIsAllow] = useState(false)

    useEffect( ()=>{
        if (name !== "" && lastName !== "" && bd !== "" && skills.length !== 0) {
            setBtnIsAllow(true)
        }
    },[name,lastName,skills,bd])
    
    const clearHooks = () => {
        setName("")
        setLastName("")
        setSkills([])
        setBd("")
        setAge(null)
        setBtnIsAllow(false)
    }

    const handleName = (e) => {
        setName(e.target.value);
    };

    const handleLastName = (e) => {
        setLastName(e.target.value);
    };

    const handleBDChange = (e) => {
        const currentDate = new Date().getFullYear();
        const userYear = e.target.value.split("-");
        setBd(e.target.value);
        setAge(Number(currentDate) - Number(userYear[0]));
    };

    const handleSkillsChange = (e) => {
        setSkills(Array.from(e.target.selectedOptions, option => option.value)) 
    };

    const handleSubmitData = () => {
        let data = {
            name,
            lastName,
            age,
            skills,
        };
        dispatch(onSubmitData(data));
        clearHooks()
    };

    return (
        <div>
            <label htmlFor="my-modal" className="btn">
                add to list
            </label>
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
                            {
                                !btnIsAllow ? <button
                                className="btn btn-active btn-primary"
                                disabled="disabled"
                            >
                                submit data
                            </button>  : <label
                                htmlFor="my-modal"
                                onClick={handleSubmitData}
                                className="btn btn-active btn-primary"
                            >
                                submit data
                            </label>
                            }
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalButton;
