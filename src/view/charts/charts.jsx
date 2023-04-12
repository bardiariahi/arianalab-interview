import React from "react";
import ChartBySkills from "../../component/charts/chartBySkills";
import ChartByAge from "../../component/charts/chartsByAge";

function Charts() {
    return (
        <>
            <ChartByAge />
            <ChartBySkills />
        </>
    );
}

export default Charts;
