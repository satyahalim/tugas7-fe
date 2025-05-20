import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotesList from './components/NotesList';
import AddNotes from './components/AddNotes';
import EditNotes from './components/EditNotes';
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/noteslist"
            element={
              <>
                <Navbar />
                <NotesList />
              </>
            }
          />
          <Route
            path="/noteslist/add"
            element={
              <>
                <Navbar />
                <AddNotes />
              </>
            }
          />
          <Route
            path="/noteslist/edit/:id"
            element={
              <>
                <Navbar />
                <EditNotes />
              </>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
