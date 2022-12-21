import React, { useEffect, useState } from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import { AxiosPublic } from '../../api/Axios';
import Styles from './ShowMedia.module.css'
import { Rating } from '@mui/material'
import { useParams } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';

function ShowMediaByID() {
    let id=useParams();
   

    
  
    const [movieData, setMovieData] = useState([]);

    
    useEffect(()=>{
        
       
        AxiosPublic.get(`Media/${id.id[1]}`).then(res=>{
            
            setMovieData(res.data.data) 
        }).catch(err=>{
            alert("Network Error")
        })

       
   
            },[movieData])
           

  return (
    <>
    <Container>
  
{
<>
<Badge bg="primary">Trailer</Badge>
<Row>
    <h2  className="badge badge-primary">Trailer</h2>
    <br />
<Col  className='d-flex justify-content-center mb-5'> <iframe  width="1125" height="497" src={movieData.mediaUrl}>
</iframe> </Col>
</Row>

     <Row key={movieData.id}>

        <Col >
            <img className={Styles.Img} src={movieData.posterUrl} alt="" />
        </Col>
<Col>
<h5>Type:</h5>
<p>{movieData.moviesType===1? "Movie" : "TV"}</p>
<h5>Title:</h5>
<p>{movieData.title}</p>
<h5>Rate:</h5>

<Rating name="half-rating-read" defaultValue={parseFloat(movieData.rate)} precision={0.5} readOnly />
<h5>Genre:</h5>
<p>{movieData.genreName}</p>
<h5>Year:</h5>
<p>{movieData.year}</p>
</Col>
<Col>
<h5>Description:</h5>
<p>{movieData.description}</p>
</Col>
</Row>

</>
}
<br /><br /><br /><br /><br /><br />
    </Container>
    </>
  )
}

export default ShowMediaByID