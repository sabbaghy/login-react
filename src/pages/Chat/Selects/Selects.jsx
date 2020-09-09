import React from 'react'
import './Selects.scss'


const Selects = ({options, handleSelectionOptions}) => {

   return (
      <div className='selections'>
         <div className='selections__options'>
         {
            options.map((op) => 
                  <label
                     key={op.id}
                     onClick={() => handleSelectionOptions(op.id)}
                  >
                     {op.text}
                  </label>
            )

         }
         </div>
      </div>
   )
}

export default Selects
