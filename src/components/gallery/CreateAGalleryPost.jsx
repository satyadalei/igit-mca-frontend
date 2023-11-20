// "use client"
import React, { useState } from 'react'
import GeneralButton from '../common/GeneralButton'
import AddIcon from '@mui/icons-material/Add';
import AddGalleryModal from '../modal/AddGalleryModal';

const CreateAGalleryPost = ({className}) => {
    const [modal, setModal] = useState(false);

  return (
    <div className={`mt-3 mb-2 p-3 pl-0 relative ${className}`} >
      {modal && <AddGalleryModal setModal={setModal} />}
      <div>
         <GeneralButton onClick={()=>{setModal(true)}} className="p-2 pl-0" >
           <AddIcon />Add Image to Gallery
         </GeneralButton>
      </div>
    </div>
  )
}

export default CreateAGalleryPost