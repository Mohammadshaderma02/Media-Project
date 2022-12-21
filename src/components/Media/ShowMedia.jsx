import React, { useEffect, useState,useReducer } from 'react'
import { confirmAlert } from 'react-confirm-alert';
import { AxiosPublic } from '../../api/Axios';
import { Button, Offcanvas, Table } from "react-bootstrap";
import UpdateMedia from './UpdateMedia';
function ShowMedia(props) {
    const [mediaData, setMediaData] = useState([]);
    const [id, setID] = useState([]);
  const [ignored, forceUpdate] = useReducer(x => x + 1, 0);
  useEffect(() => {
    AxiosPublic.get("Media").then((res) => {
      setMediaData(res.data.data);
      
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
          await  AxiosPublic.delete(`Media//${id}`)
            forceUpdate()
            },
        },
        {
          label: "No"
        },
      ],
    });
  }

  const UpdateItem=(id)=>{
    setID(id)

          
  }
 
  
    return (
<>
<Offcanvas {...props} placement={'bottom'}  scroll= {true} backdrop={false}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Media</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Rate</th>
                <th>Year</th>
                <th>Movies Type</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {mediaData.map((item) => (
                <tr key={item.id}>
                  <td>{item.title}</td>
                  <td>{item.description}</td>
                  <td>{item.rate}</td>
                  <td>{item.rate}</td>
                  <td>{item.rate}</td>

                  <td className='d-flex'>
                    <Button  variant='warning' onClick={()=>UpdateItem(item.id)}>Update</Button>
                    <Button className='ms-2' variant='danger' onClick={()=>DeleteItem(item.id)}>Delete</Button>

                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Offcanvas.Body>
      </Offcanvas>
     
      <UpdateMedia id={id}/>
</>
  )
}

export default ShowMedia