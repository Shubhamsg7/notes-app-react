import React, { useState } from "react";
import CreateNote from "./CreateNote";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";


const App = () => {

  const[addItem, setAddItem] = useState([]);

  const addNote = (note) => {
    //alert("I am Clickef");
    setAddItem((prevData) => {
      return [...prevData, note];
    });

    console.log(note);
  };

  const onDelete = (id) => {
    setAddItem((olddata)=>
      olddata.filter((currdata,indx) => {
        return indx !== id;
    })
  );
  };

  return (
    <>
      <Header />
      <CreateNote passNote={addNote} />
      <div className="notes">
      {addItem.map((val, index)=>{
        return(
          <Note 
            key={index}
            id={index}
            title={val.title}
            content={val.content}
            deleteItem={onDelete}
          />
        );
      })

      } 
      </div>    
      <Footer />
    </>
  );
}

export default App;
