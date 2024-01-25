import React,{useState} from 'react'

function Button(props) {
    
    const [name,setName] = useState(props.name)
    function clickHandler(){
        setName('I was Clicked')
    }
  return (
    <div>
        <button type = "button" class= "btn btn-info" onClick = {clickHandler}>Click Me</button>
        <h1>{name}</h1>
    </div>
  )
}

export default Button