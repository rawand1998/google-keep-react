import React,{useState} from 'react';
import './App.css';
import Notes from './Components/Notes'
import CreateNotes from './Components/CreateNotes'
import Header from './Components/Header'
function App(props) {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes((prevValue) => {
      return [...prevValue, newNote];
    });
  }

  function deleteNotes(id) {
    setNotes((preValue) => {
      return [...preValue.filter((note, index) => index !== id)];
    });
  }
  return (
    <div className="App">
      <Header />
    
      <CreateNotes onAdd={addNote} />
      {notes.map((note, index) => (
        <Notes
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          onDelete={deleteNotes}
        />
      ))}
    
    </div>
  );
}

export default App;