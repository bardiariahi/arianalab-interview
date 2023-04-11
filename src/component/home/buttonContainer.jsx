import React from "react";
import ChartsButton from "./chartsButton";
import ModalButton from "./modalButton";

function ButtonContainer() {
    return (
        <div className="flex justify-between">
            <ChartsButton />
            <ModalButton />
        </div>
    );
}

export default ButtonContainer;
