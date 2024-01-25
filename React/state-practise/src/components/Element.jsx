import React,{useState} from 'react'

function Element(props) {

  const [name,setName] = useState(props.name)
  function changeElement(){
      setName('Yor are in my blog')
  }
  return (
    <div>
        <h2>{name}</h2>
        <button onClick = {changeElement}>Change Header</button>
    </div>
  )
}

export default Element