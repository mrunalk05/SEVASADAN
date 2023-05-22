import { useCallback, useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import { hideLoading } from "../redux/alertsSlice";
import axios from "axios";

const InvenList=()=>{
    const [Invenn, setinven]= useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const dispatch= useDispatch();
        const fetchInvenlist= useCallback(async()=>{
            try{
            dispatch(showLoading());
            const response= await axios.get('/api/admin/inven', {
             headers: {
                     Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            });
            dispatch(hideLoading());
            if(response.data.sucess){
             setinven(response.data.data);
            }
        }
        catch (error) {
            dispatch(hideLoading());
        }
         },  [dispatch]);


useEffect(()=>{
    fetchInvenlist();
}, [fetchInvenlist]);

return(
    <>
    {/* <FrontPage /> */}
     <div>
     <h1></h1>
      <div class="input-container">
        <input
          type="text"
          placeholder="Search Inven..."
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
          
        />
        <button>SEARCH</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        <div className="patientBox">
              <table>
                <thead>
                  <tr>
                    <th>Patient Name</th>
                    <th>Department</th>
                    <th>Doctor Name</th>
                    <th>Patient Mobile</th>
                    <th>Patient Age</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {Invenn?.map((ele) => {
                    return (
                      <tr>
                        console.log(ele.medname);
                        <td>{ele.medname}</td>
                        <td>{ele.medcompany}</td>
                        {/* <td>{ele.docName}</td>
                        <td>{ele.patientMobile}</td>
                        <td>{ele.patientAge}</td>
                        <td>{ele.date}</td> */}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          {/* { Invenn
            .filter((inven) =>
              inven.name.toLowerCase().startsWith(searchQuery.toLowerCase())
            )
            .map((inven) => (
              <tr key={inven._id}>
                <td>{inven.medname}</td>
              </tr>
            ))} */}
        </tbody>
      </table>
      {/* <ToastContainer /> */}
    </div>
    
    </>
);
            }
export default InvenList;