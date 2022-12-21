import React, { useEffect, useState,useReducer } from "react";
import { Button, Offcanvas, Table } from "react-bootstrap";
import { AxiosPublic } from "../../api/Axios";
import { confirmAlert } from "react-custom-confirm-alert"; 
import Styles from "./Offcanvass.module.css";
function Offcanvass(props) {
  const [requestData, setRequestData] = useState([]);

  const [ignored, forceUpdate] = useReducer(x => x + 1, 0);
  useEffect(() => {
    AxiosPublic.get("Request").then((res) => {
      setRequestData(res.data.data);
      console.log(res.data.data);
    });
  }, [ignored]);

  const DeleteItem=(id)=>{
   
    confirmAlert({
      title: "Confirm to submit",
      message: "Are you sure to do this.",
      buttons: [
        {
          label: "Yes",
          onClick:async () => {
          await  AxiosPublic.delete(`Request/${id}`)
            forceUpdate()
            },
        },
        {
          label: "No"
        },
      ],
    });
  }
 

  return (
    <>
      <Offcanvas {...props}   scroll= {true} backdrop={false} className={Styles.Aside}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Request</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Phone Number</th>
                <th>Title Movie</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {requestData.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.phoneNumber}</td>
                  <td>{item.titleMovie}</td>
                  <td>
                    <Button onClick={()=>DeleteItem(item.id)}>Delete</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Offcanvass;
