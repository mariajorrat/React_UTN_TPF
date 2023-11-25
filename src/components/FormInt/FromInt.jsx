import React from "react";



const FormInt = ({handleSubmit, handleChange, inputData}) => {
    


	return (
        <form onSubmit={handleSubmit}>
            <div className="form-container">
                <div className="file-input">
                    <input  type="text" className="text" value={inputData} onChange={handleChange}/>
                    <button type='submit' className="button" disabled={inputData ? "" : "disabled"}>Crear</button>
                </div>
            </div>
        </form>
    );
};

export default FormInt;