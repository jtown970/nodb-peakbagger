import React from 'react'
import MountainDisplay from './MountainDisplay'
 

export default function HandleMountain(props) {
  const mountainMap = props.mountain.map((elem) => (
    <MountainDisplay
      key={elem.id}
      addMountain={props.addMountain}
      editMountain={props.editMountain}
      delete={props.delete}
      data={elem}
      />
  ))
  return (
    <div className="spacing-hikers-list">
      <h2 className="title">Colorado 14ers</h2>
      <div className="hikers-list"
        style={{ display: 'flex',alignItems:'center', justifyContent: 'center', flexWrap: 'wrap' }}
      >
        {mountainMap}
        
      </div>
    </div>
  )
}

