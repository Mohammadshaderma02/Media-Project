import React from 'react'
import { Modal,Spinner } from 'react-bootstrap'
import Styles from './Loading.module.css'
function Loading() {
  return (
<>

<Modal show={true} centered className={Styles.Modal}>

        <Modal.Body>      <Spinner animation="border"  variant="primary" className={Styles.SpinnerA}  />
                         <span className='h2 m-2'>  Loading ..!</span>                               </Modal.Body>
      
      </Modal> 
</>

  )
}

export default Loading