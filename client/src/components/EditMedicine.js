import react, { useState} from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, styled, Typography } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';

import axios from 'axios';

const initialValue = {
    Category:'',
    Dosage:'',
    Strength:'',
    batch:'',
    ExpDate:'',
    Storage:'',
    Manuf:'',
    ndc:'',
    barcode:'',
}

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% 0 0 25%;
    & > div {
        margin-top: 20px;
`;

const EditMedicine = () => {
    const [user, setUser] = useState(initialValue);
    const { Category, Dosage, Strength, batch, ExpDate, Storage, Manuf, ndc, barcode } = user;
    const id= useParams();
    
    const navigate= useNavigate();
    // const navigate = useNavigate();

    const onValueChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    const addUserDetails = async() => {
        await axios.put(`api/admin/${id}`, user)
        navigate('/all');
    }

//     const [selectedOption, setSelectedOption] = useState('');

//         const handleOptionChange = (e) => {
//         setSelectedOption(e.target.value);
//   };

    return (
        <Container>
            <Typography variant="h4">Add Medicines</Typography>
            <div>
      <label htmlFor="dropdown">Category:</label>
      <select id="dropdown" name='Category' value={Category} onChange={onValueChange}>
        <option value="">Select</option>
        <option value="Antibiotics">Antibiotics</option>
        <option value="Analgesics">Analgesics</option>
        <option value="Antipyretics">Antipyretics</option>
        <option value="Anticoagulants">Anticoagulants</option>
        <option value="Antihypertensives">Antihypertensives</option>
        <option value="Antidepressants">Antidepressants</option>
        <option value="Antidiabetic-medications">Antidiabetic medications</option>
        <option value="Anticonvulsants">Anticonvulsants</option>
        <option value="Antiemetics">Antiemetics</option>
        <option value="Anti-inflammatory drugs">Anti-inflammatory drugs</option>
      </select>
      {/* <p>Selected option: {selectedOption}</p> */}
    </div>
            <FormControl>
                <InputLabel htmlFor="my-input">Strength</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='Strength' value={Strength} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Dosage Form</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='Dosage' value={Dosage} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Batch or Lot Number</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='batch' value={batch} id="my-input"/>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Expire Date</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='ExpDate' value={ExpDate} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Storage Condition</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='Storage' value={Storage} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Manufacturing Date</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='Manuf' value={Manuf} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">National Drug Code</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='ndc' value={ndc} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Barcode</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='barcode' value={barcode} id="my-input" />
            </FormControl>
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => addUserDetails()}>Add User</Button>
            </FormControl>
        </Container>
    )
}

export default EditMedicine
;