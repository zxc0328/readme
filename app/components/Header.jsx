import React from 'react';

export default (props) => {
	switch (props.tName){
		case "hui":
			return (
				<div className="head">R E S U M E</div>
			)
		default:
			return (
				<div className="head">Header Here</div>
			)
	}
}