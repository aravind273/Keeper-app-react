import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [Notes, addNotes] = useState([["work", "database"]]);
  function addNoteFun(title, content) {
    addNotes((prevNotes) => {
      return [...prevNotes, [title, content]];
    });
  }
  function deleteNote(id) {
    addNotes((prevNotes) => prevNotes.filter((value, index) => index !== id));
  }
  return (
    <div>
      <Header />
      <CreateArea addNoteFun={addNoteFun} />
      {Notes.map((item, index) => (
        <Note
          key={index}
          id={index}
          title={item[0]}
          content={item[1]}
          delete={deleteNote}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
