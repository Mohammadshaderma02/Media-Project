
import React,{ useEffect, useReducer, useState} from 'react'
import {Card,Row,Col, Container,  Button} from 'react-bootstrap'
import { Rating } from '@mui/material'
import { AxiosPublic } from '../../api/Axios'
import Styles from './Cards.module.css'
import { useNavigate } from 'react-router-dom'




function Cards() {

  const navigate=useNavigate();
    const [isHovering, setIsHovering] = useState(false);
    const [movieData, setMovieData] = useState([]);
    const [ignored, forceUpdate] = useReducer(x => x + 1, 0);
     
  
    const handleLink=(id)=>{
     
    
      
    navigate(`/media/:${id}`)
    }
    const handleMouseOver = () => {
      setIsHovering(true);
    
    };
  
    const handleMouseOut = () => {
      setIsHovering(false);
    
    };
   
   

    useEffect(()=>{
        AxiosPublic.get('Media').then(res=>{
          
            setMovieData(res.data.data) 
        })
    },[])
    
   

  return (
<>


<Container>

    
<h1 className='mt-4'>Movies</h1>
<Row>
{movieData.map(item=>(

    <Col className={Styles.Column}>

  <>
    <Card key={item.id} className={`${Styles.CardOfMovies} mt-4 bg-transparent border-0`} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} >
    <Card.Img  src={item.posterUrl} height={244} />
    <Rating className={Styles.Rate} name="half-rating-read" defaultValue={parseFloat(item.rate)} precision={0.5} readOnly />
   <h6 className='mt-3  text-center'>{item.title}</h6>
   
   <Button onClick={()=>handleLink(item.id)}>More</Button>
      {/* {isHovering && (
         
         <Button onClick={handleLink}>More</Button>
          
        )}  */}
                 
                  
            
      
</Card>

         
</>
    </Col>
))}

</Row>


</Container>
</>
  )
}


export default Cards