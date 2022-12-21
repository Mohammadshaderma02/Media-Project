import React,{useState} from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ShowMedia from '../Media/ShowMedia';
import UpdateMedia from '../Media/UpdateMedia';

function Footer() {
    const [offcanvasShow,setOffcanvasShow]=useState(false);
    const [modalShow, setModalShow] = useState(false);    
  const hide=()=>{
    setModalShow(false)
  }
  return (
   <>
   <Container>
<Row>

<Col> <h3 onClick={()=>setOffcanvasShow(true)}>Show Media</h3>   </Col>

</Row>
 <ShowMedia show={offcanvasShow} onHide={()=>setOffcanvasShow(false) }/>
 <UpdateMedia show={false} onHide={hide}/>

   </Container>
   </>
  )
}

export default Footer