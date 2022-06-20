import logo from './logo.svg';
import './App.css';
import Notes from './Components/Notes'
import CreateNotes from './Components/CreateNotes'
import Header from './Components/Header'
function App() {
  return (
    <div className="App">
     <Header />
     <CreateNotes />
     <Notes />
    </div>
  );
}

export default App;
