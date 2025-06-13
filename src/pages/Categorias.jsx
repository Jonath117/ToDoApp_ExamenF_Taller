import { useState } from "react";
import CategoryForm from "../components/CategoryForm";
import CategoryList from "../components/CategoryList";

function Categorias() {

    return (
        <>
            <div className="mt-10 max-w-2xl mx-auto p-6 bg-green-400 rounded-md shadow-xl">
                <h2 className="text-xl font-bold text-center"> Categorias</h2>
            </div>
            <div className="mt-5 max-w-2xl mx-auto p-6 text-center bg-gray-100 rounded-md shadow-xl bg-gray-300 p-4">
                <div className="mt-5"><CategoryForm/></div> 
                <div className="mt-20 mb-5"><CategoryList/></div>
            </div>
        </>
    );
}

export default Categorias; 