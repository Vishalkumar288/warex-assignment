import React from 'react'
import './selectionitem.css';
export const SelectionItem = ({itemName,icon}) => {
  return (
    <div className='selectionItems'>
      <div className='selectionicons'>
      {icon}
      </div>
      <div className='selectiontext'>{itemName}</div>
     </div>
  )
}
