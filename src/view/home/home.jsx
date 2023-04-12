import React from "react";
import DataTable from "../../component/home/dataTable";
import ChartsButton from "../../component/home/chartsButton";
import ModalButton from "../../component/home/modalButton";

function Home() {
    return (
        <div className="md:px-64 md:pt-32 p-10">
            <div className="flex justify-between">
                <ChartsButton />
                <ModalButton />
            </div>
            <DataTable />
        </div>
    );
}

export default Home;
