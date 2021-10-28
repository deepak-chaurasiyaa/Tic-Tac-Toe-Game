
import React from 'react'

const style = {
	width: "300px",
	margin: "0 auto",
	display: "grid",
	fontSize: "40px",
	fontWeight: "800",
	backgroundColor:"red",
	color:"white",
	cursor:"pointer"
};

const Refresh = (props) => <button name={"btn"} style={style} onClick={props.onClick}>{props.value}</button>

export default Refresh