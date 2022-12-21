import React,{useEffect, useReducer, useState} from 'react'
import {Modal,Button,Form} from 'react-bootstrap'
import { useFormik } from 'formik'
import { AxiosPublic } from '../../api/Axios'
import { ToastContainer, toast } from 'react-toastify';

function Modales(props) {
  const [ignored, forceUpdate] = useReducer(x => x + 1, 0);
  const [genre,setGenre]=useState([]);
  useEffect(()=>{
    AxiosPublic.get('Genre').then(res=>{
      console.log();
      setGenre(res.data.data);
    })
  },[ignored])



const formik=useFormik({
  initialValues:{
    title:'',
    Description:'',
    Poster:'',
    Price:'',
    Rate:'',
    Year:'',
    MediaType:'',
    Genre:'',
    wallpaper:'',
    Video:''

  },onSubmit:values=>{
    console.log(values.MediaType);

    AxiosPublic.post('Media',{
      title:values.title ,
      description:values.Description ,
      posterUrl:values.Poster  ,
      wallpaper:values.wallpaper,
      price:parseFloat(values.Price)  ,
      rate:parseFloat(values.Rate)  ,
      year:values.Year  ,
      moviesType:parseInt(values.MediaType)  ,
      genreId:parseInt(values.Genre),
      mediaUrl:values.Video
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
    <Form.Label>Video URL</Form.Label>
    <Form.Control type='text' name='Video' onChange={formik.handleChange} value={formik.values.Video}/>
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

  {genre.map(item=>(
    <option key={item.id} value={item.id}>{item.genreName}</option>
  ))}
    
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

export default Modales