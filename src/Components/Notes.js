import React from "react";
import { MdDelete } from "react-icons/md";
function Notes ({title,content,onDelete,id}){
    console.log(title)
    return(
        <div className="note-container">
            <h1>{title}</h1>
            <p>{content}</p>
            <button onClick={()=>onDelete(id)}> <MdDelete size={25} /></button>
        </div>
    )
}
export default Notes