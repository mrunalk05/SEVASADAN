import axios from 'axios';
import react, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Layout from "antd/lib/layout/layout";


const Inven = () => {
    const navigate = useNavigate();

    const [medicine, setMedicine] = useState({
        medname: '',
        medcompany: '',
        quantity: '',
        disease: ''
    });

    const [errorMessage, setErrorMessage] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);

    const onValueChange = (e) => {
        setMedicine({ ...medicine, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!medicine.medname || !medicine.medcompany || !medicine.quantity || !medicine.disease) {
            setErrorMessage("Fill all the fields!!");
            alert('Fill All the fields');
            return;
        }

        try {
            const response = axios.post('/api/admin/inven', medicine, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });

            if (!response.ok) {
                throw new Error("Network response was not ok");
            }

            setIsSubmitted(true);
            navigate.push('/');

        } catch (error) {
            console.log(error);

        }
    }

    if (isSubmitted) {
        return (
            <div>
               <p>Form successfully submitted!</p>
            </div>
            
        );
    }

    return (
        <>
            <Layout>
                <div className="container">
                    <form onSubmit={handleSubmit}>
                        {errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>}
                        <label>
                            Medicine Name
                            <input type="text" name="medname" value={medicine.medname} onChange={onValueChange} />
                        </label>

                        <label>
                            Medicine Company
                            <input type="text" name="medcompany" value={medicine.medcompany} onChange={onValueChange} />
                        </label>
                        <label>
                            Medicine Quantity
                            <input type="text" name="quantity" value={medicine.quantity} onChange={onValueChange} />
                        </label>
                        <label>
                            Disease Name
                            <input type="text" name="disease" value={medicine.disease} onChange={onValueChange} />
                        </label>

                        <button type="submit">Submit</button>
                    </form>
                </div>
            </Layout>
        </>
    )
}

export default Inven;