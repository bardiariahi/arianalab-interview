import React from "react";
import { useSelector } from "react-redux";

function DataTable() {
    const dataList = useSelector((state) => state.mainData.mainData);
    console.log("====================================");
    console.log(dataList);
    console.log("====================================");

    return (
        <div className="pt-4">
            {dataList.length == 0 ? (
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
                        <tr className="text-left border">
                            <th className="pl-3 py-3">name</th>
                            <th className="border-l pl-3 py-3">last name</th>
                            <th className="border-l pl-3 py-3">age</th>
                            <th className="border-l pl-3 py-3">skills</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dataList &&
                            dataList.map((data, index) => {
                                return (
                                    <tr
                                        className="border hover:bg-gray-100"
                                        key={`table-data-${index}`}
                                    >
                                        <td className="pl-3 py-3">
                                            {data.name}
                                        </td>
                                        <td className="border-l pl-3 py-3">
                                            {data.lastName}
                                        </td>
                                        <td className="border-l pl-3 py-3">
                                            {data.age}
                                        </td>
                                        <td className="border-l pl-3 py-3">
                                            {typeof data.skills === "string"
                                                ? data.skills
                                                : data.skills.map(
                                                      (item) => ` ${item}  `
                                                  )}
                                        </td>
                                    </tr>
                                );
                            })}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default DataTable;
