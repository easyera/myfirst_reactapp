import React from "react";
import Header from "./header";
import Footer from "./footer";
import Note from "./note";
import CreateArea from "./CreateArea";

function App() {
  const [notes,setnotes] = React.useState([]);

  const addnote = (note) => {
    setnotes(prevalue => [...prevalue ,{title: note.title,content: note.content}]);
  };
  const delenote = (id) => {
    setnotes(prevalue => prevalue.filter((note,index) => index !== id));
  };
  return (
    <div>
      <Header />
      <CreateArea set={addnote} />
      {notes.map((note,index) =>(<Note key={index +1} title={note.title} content={note.content} id = {index} get={delenote} />))}
      <Footer />
    </div>
  );
}

export default App;