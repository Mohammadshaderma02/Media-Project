import React, { useEffect,useState } from 'react'
import {Carousel, Container} from 'react-bootstrap';
import Styles from './Carousel.module.css'
import { AxiosPublic } from '../../api/Axios';
function CarouselImg() {
    const [movieData, setMovieData] = useState([]);
    const [Error, setError] = useState("");
    useEffect(()=>{
         AxiosPublic.get('Media').then(res=>{
          
            setMovieData(res.data.data) 
        }).catch(err=>{
          setError("Network Error");
        })
            },[])
 
    return (
        <>
        
    <Container>
    <span className='badge bg-danger text-wrap'>{Error}</span>
    <h1>Explore </h1> 
        <p className={Styles.Para}>What are you gonna watch today ?</p>
    <Carousel pause={false} controls={false}>
 {movieData.map(item=>(
    
    <Carousel.Item key={item.id}>
    <img
      className={`${Styles.Item} d-block`}
      src={item.wallpaper}
      width={1170}
      height={400}
      alt={'Poster'}
    />
    <Carousel.Caption className={Styles.Caption}>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
    </Carousel.Caption>
  </Carousel.Item>

)   
)} 
 </Carousel>
  </Container>
  </>
  )
}

export default CarouselImg;