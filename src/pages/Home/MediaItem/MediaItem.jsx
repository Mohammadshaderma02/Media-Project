import React,{useState} from 'react'
import ShowMedia from '../../../components/ShowMedia/ShowMediaId';

function MediaItem() {
    const [offcanvasShow,setOffcanvasShow]=useState(false);
    
 
  return (
<>
<ShowMedia show={offcanvasShow} onHide={()=>setOffcanvasShow(false) }/>

</>
  )
}

export default MediaItem