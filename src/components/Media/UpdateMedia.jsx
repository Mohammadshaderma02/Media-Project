import React,{useEffect, useReducer, useState} from 'react'
import {Modal,Button,Form,Container} from 'react-bootstrap'
import { useFormik } from 'formik'
import { AxiosPublic } from '../../api/Axios'
import { ToastContainer, toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
function UpdateMedia(props) {
    const [ignored, forceUpdate] = useReducer(x => x + 1, 0);
    const [media,setMedia]=useState([]);
    const [genre,setGenre]=useState([]);
    let id=useParams();


    // useEffect(()=>{

    //   AxiosPublic.get(`Media/`).then(res=>{
    //     console.log();
    //     setMedia(res.data.data);
    //   })
    // },[ignored])

    useEffect( ()=>{
        AxiosPublic.get(`Media/1`).then(res=>{
       
          setMedia(res.data.data);
          
        })

      },[])
  

  const formik=useFormik({
    initialValues:{

      title:`${media.title}`,
      Description:`media.Description`,
      Poster:media.Poster,
      Price:media.Price,
      Rate:media.Rate,
      Year:media.Year,
      MediaType:media.MediaType,
      Genre:media.Genre,
      wallpaper:media.wallpaper
  
    },onSubmit:values=>{
      console.log(values);
  
      AxiosPublic.post('Media',{
        title:values.title ,
        description:values.Description ,
        posterUrl:values.Poster  ,
        wallpaper:values.wallpaper,
        price:parseFloat(values.Price)  ,
        rate:parseFloat(values.Rate)  ,
        year:values.Year  ,
        moviesType:parseInt(values.MediaType)  ,
        genreId:parseInt(values.Genre)
      
      }
      ).then(res=>{
        toast.success('Added', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
         
      }).catch(err=>{
        console.log(err);
      })
        }
    
   ,
    validate:values=>{
      let error={};
      if(!values.title){
        toast.error('Requierd..!', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
      }
      return error;
    }
      
  })
  
  
    return (
    <>
    <ToastContainer
  position="top-center"
  autoClose={5000}
  limit={1}
  hideProgressBar={false}
  newestOnTop={false}
  closeOnClick
  rtl={false}
  pauseOnFocusLoss
  draggable
  pauseOnHover={false}
  theme="light"
  />
      <Modal
         {...props}
        // show={props.Show} onHide={props.hide}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
           Add Movie
          </Modal.Title>
        </Modal.Header>
          <Form onSubmit={formik.handleSubmit}>
        <Modal.Body>
  
  <Form.Group>
      <Form.Label>Title</Form.Label>
      <Form.Control type='text' name='title' onChange={formik.handleChange} value={formik.values.title}/>
  </Form.Group>
  
  <Form.Group>
      <Form.Label>Description</Form.Label>
      <Form.Control type='text' name='Description' onChange={formik.handleChange} value={formik.values.Description}/>
  </Form.Group>
  <Form.Group>
      <Form.Label>Poster URL</Form.Label>
      <Form.Control type='text' name='Poster' onChange={formik.handleChange} value={formik.values.Poster}/>
  </Form.Group>
  <Form.Group>
      <Form.Label>Wallpaper</Form.Label>
      <Form.Control type='text' name='wallpaper' onChange={formik.handleChange} value={formik.values.wallpaper}/>
  </Form.Group>
  <Form.Group>
      <Form.Label>Price</Form.Label>
      <Form.Control type='text' name='Price' onChange={formik.handleChange} value={formik.values.Price}/>
  </Form.Group>
  <Form.Group>
      <Form.Label>Rate</Form.Label>
      <Form.Control type='text' name='Rate' onChange={formik.handleChange} value={formik.values.Rate}/>
  </Form.Group>
  <Form.Group>
      <Form.Label>Year</Form.Label>
      <Form.Control type='text' name='Year' onChange={formik.handleChange} value={formik.values.Year}/>
  </Form.Group>
  <Form.Group>
      <Form.Label>Media Type</Form.Label>
      <Form.Select aria-label="Default select example" onChange={formik.handleChange} name='MediaType'>
      <option value={1}>Movie</option>
      <option value={2}>TV</option>
  
   
      
      </Form.Select>
      {/* <Form.Control type='text' name='MediaType' onChange={formik.handleChange} value={formik.values.MediaType}/> */}
  </Form.Group>
  <Form.Group>
      {/* 
      <Form.Control type='text' name='Genre' onChange={formik.handleChange} value={formik.values.Genre}/> */}
  <Form.Label>Genre</Form.Label>
  <Form.Select aria-label="Default select example" onChange={formik.handleChange} name='Genre'>
  
    {/* {genre.map(item=>(
      <option key={item.id} value={item.id}>{item.name}</option>
    ))} */}
      
      </Form.Select>
  </Form.Group>
  
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
          <Button variant="danger" type='submit' onClick={()=>forceUpdate()}>Submit</Button>
        </Modal.Footer>
          </Form>
      </Modal>
    </>
    )
  }

export default UpdateMedia