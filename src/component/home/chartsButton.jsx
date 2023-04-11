import React from "react";
import { useNavigate } from "react-router-dom";

function ChartsButton() {
    let navigate = useNavigate();

    function handleCharts() {
        navigate("/charts");
    }

    return (
        <button className="btn btn-accent text-white" onClick={handleCharts}>
            show charts
        </button>
    );
}

export default ChartsButton;
