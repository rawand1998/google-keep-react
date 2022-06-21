import React, { useState } from "react";
function CreateNotes({ onAdd }) {
  const [note, setNote] = useState({ title: "", content: "" });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNote((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(note);
    console.log("note",note)
  

  };
  return (
    <div>
      <form>
        <input
          type="text"
          name="title"
          value={note.title}
          onChange={handleChange}
        />
        <textarea name="content" value={note.content} onChange={handleChange} />
        <button  onClick={handleSubmit}>
          add
        </button>
      </form>
    </div>
  );
}
export default CreateNotes;
