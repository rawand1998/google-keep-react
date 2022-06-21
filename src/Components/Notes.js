import React from "react";
function Notes ({title,content,onDelete,id}){
    console.log(title)
    return(
        <div>
            <h1>{title}</h1>
            <h1>{content}</h1>
            <button onClick={()=>onDelete(id)}>Delete</button>
        </div>
    )
}
export default Notes