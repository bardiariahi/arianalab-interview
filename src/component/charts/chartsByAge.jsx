import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { useSelector } from "react-redux";

function Charts() {
    const dataList = useSelector((state) => state.mainData.mainData);

    const finalAgeData = dataList.reduce((prev, cur) => {
        let ageNumber = cur.age;
        if (!prev[ageNumber]) {
            prev[ageNumber] = { ageNumber, children: [cur] };
        } else {
            prev[ageNumber].children.push(cur);
        }
        return prev;
    }, {});

    const agenumberValues = Object.keys(finalAgeData);
    const agenumber = Object.values(finalAgeData).map(
        (item) => item.children.length
    );

    const [options, setOptions] = useState({
        chart: {
            id: "age is",
        },
        xaxis: {
            categories: agenumberValues,
        },
    });
    const [series, setSeries] = useState([
        {
            name: "numbers of age",
            data: agenumber,
        },
    ]);

    return (
        <div className="pt-5">
            <p>chart by ages</p>
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

export default Charts;
