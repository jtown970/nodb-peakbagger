import React from 'react'
import HikerDisplay from './HikerDisplay'
 

export default function HandleHikers(props) {
  const hikerMap = props.hiker.map((elem) => (
    <HikerDisplay
      key={elem.id}
      addHiker={props.addHiker}
      editHiker={props.editHiker}
      delete={props.delete}
      data={elem}
      />
  ))
  return (
    <div className="spacing-hikers-list">
      {/* <h2>HandleHikers</h2> */}
      <div className="hikers-list"
        style={{ display: 'flex',alignItems:'center', justifyContent: 'center', flexWrap: 'wrap' }}
      >
        {hikerMap}
        
      </div>
    </div>
  )
}

