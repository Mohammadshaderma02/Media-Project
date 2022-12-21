import React,{useState} from 'react'
import {  Container, Navbar,Nav } from 'react-bootstrap'
import Logo from '../../Assets/images/Logo1.PNG'
import Styles from './HeaderNav.module.css'
import Modales from '../AddMedia/Modales'
import Offcanvass from './Offcanvass'
import {useNavigate} from 'react-router-dom'
function HeaderNav() {
  const navigate=useNavigate();
    const [modalShow, setModalShow] = useState(false);
    const [offcanvasShow,setOffcanvasShow]=useState(false);
    
  const hide=()=>{
    setModalShow(false)
  }
  return (
   <>
   <Container className={Styles.Box}>
   <Navbar>
    <Navbar.Brand><img src={Logo} alt='Logo' className={Styles.Logo} onClick={()=>navigate(-1)}/></Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse className='justify-content-end' id="responsive-navbar-nav">
   
          <Nav >
            <Nav.Link onClick={()=>setModalShow(true)}>Add Movie</Nav.Link>
            <Nav.Link onClick={()=>setOffcanvasShow(true)}>
           Show Request
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
   </Navbar>

   <Modales show={modalShow} onHide={hide}/>
   <Offcanvass show={offcanvasShow} onHide={()=>setOffcanvasShow(false) }/>
   </Container>
   </>
  )
}

export default HeaderNav