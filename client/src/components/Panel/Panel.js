import React from "react";

var Panel = (props) => {
    return (

        <div className = "panel panel-default" >
        <div className = "panel-heading" >Search
        <h3 className = "panel-title" > { props.title } </h3> 
        </div> 
        <div className = "panel-body">
          </div> 
          </div >
    );

}
export default Panel;