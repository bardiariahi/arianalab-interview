import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { useSelector } from "react-redux";

function ChartBySkills() {
    const dataList = useSelector((state) => state.mainData.mainData);
    let skillsList = []

    dataList.map( data => {
        data.skills.map( (item) => {
            skillsList.push(item)
        })
    }) 
    

    const finalSkillsData = skillsList.reduce((prev, cur) => {
        const skill = cur
        if (!prev[skill]) {
            prev[skill] = { skill, children: [cur] };
        } else {
            prev[skill].children.push(cur);
        }
        return prev;
    }, {});

    

    const skillsNumberValues = Object.keys(finalSkillsData);
    const skillsNumber = Object.values(finalSkillsData).map(
        (item) => item.children.length
    );

    const [options, setOptions] = useState({
        chart: {
            id: "skills is",
        },
        xaxis: {
            categories: skillsNumberValues,
        },
    });
    const [series, setSeries] = useState([
        {
            name: "skills",
            data: skillsNumber,
        },
    ]);

    return (
        <div className="pt-5 ">
            <p>chart by Skills</p>
            <div id="chart">
                <ReactApexChart
                    options={options}
                    series={series}
                    type="bar"
                    width={600}
                />
            </div>
        </div>
    );
}

export default ChartBySkills;
