import React from 'react'
const style = {
	border: "5px solid green",
	fontSize: "40px",
	backgroundColor:"yellow",
	cursor:"pointer",
} 
export const Box = (props) => <button  name={props.name}  style={style}  onClick={props.onClick}> {props.value}  </button>

export default Box