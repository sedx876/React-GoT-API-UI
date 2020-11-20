import React from 'react'

const CharacterItem = ({item}) => {
  return (
    <div className='card'>
      <div className='card-inner'>
        <div className='card-front'>
          <img src={item.image} alt='' />
        </div>
        <div className='card-back'>
          <h1><strong>Name:</strong> {item.name}  |  <strong>Gender:</strong> {item.gender}</h1>

          <ul>
            <li><strong>Title: </strong>{item.titles}</li>
            <li><strong>Actor: </strong>{item.actor}</li>
            <li><strong>Family House: </strong>{item.house}</li>
            <li><strong>Allegiances: </strong>{item.allegiances} </li>
            <li><strong>Origin: </strong>{item.origin}</li>
            <li><strong>Culture: </strong>{item.culture}</li>
            <li><strong>Religion: </strong>{item.religion}</li>
            <li><strong>Father: </strong>{item.father}</li>
            <li><strong>Mother: </strong>{item.mother}</li>
            <li><strong>Spouse: </strong>{item.spouse}</li>
            <li><strong>Children: </strong>{item.children}</li>
            <li><strong>Siblings: </strong>{item.siblings}</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default CharacterItem
