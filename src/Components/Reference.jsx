import React from 'react'

import pdf from '../Assests/images/reference.pdf'

const Reference = () => {
  return (
    <div>
        <div className="video">
            <embed src={pdf} type='application/pdf' width="100%" height="550px"/>
        </div>      
    </div>
  )
}

export default Reference