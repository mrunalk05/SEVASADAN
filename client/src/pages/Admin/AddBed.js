import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Patient.css";
import axios from "axios";

function AddBed() {
    const navigate = useNavigate();

    const [bed, setbed] = useState({
        roomno: "",
        bedno: "",
        patient: ""
    });

    const [errorMessage, setErrorMessage] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);

    const onValueChange = (e) => {
        setbed({ ...bed, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!bed.bedno || !bed.patient || !bed.roomno) {
            setErrorMessage("Fill all the fields!!");
            return;
        }

        try {
            await axios.post("/api/admin/add-bed", bed);
            // const response = await fetch("http://localhost:5000/api/admin/add-bed", {
            //     method: "POST",
                // headers: {
                //     "Content-Type": "application/json",
                //     Authorization: `Bearer ${localStorage.getItem("token")}`,
                // },
            //     body: JSON.stringify(bed),
            // });
                // return await axios.post(`${URL}/add`, user);
                
    
            // if (!response.ok) {
            //     throw new Error("Network response was not ok");
            // }
            setIsSubmitted(true);
            navigate.push('/');
        }
        catch (error) {
            console.log(error);
            setErrorMessage("Something went wrong. Please try again later.");
            // res.json({message: error.message});
        }
    };

    if (isSubmitted) {
        return (
            <div>
                <p>Form successfully submitted!</p>
            </div>
        );
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                {errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>}
                <label>
                    Room Number:
                    <input type="text" name="roomno" value={bed.roomno} onChange={onValueChange} />
                </label>

                <label>
                    Bed Number:
                    <input type="text" name="bedno" value={bed.bedno} onChange={onValueChange} />
                </label>
                <label>
                    Bed Number:
                    <input type="text" name="patient" value={bed.patient} onChange={onValueChange} />
                </label>

                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default AddBed;