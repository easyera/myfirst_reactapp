import React from "react";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
  const [note, setnote] = React.useState({ title: "", content: "" });

  const [isexpand,setexpand] = React.useState(false);

  const handchange = (event) => {
    const { name, value } = event.target;
    setnote((prevalue) => ({ ...prevalue, [name]: value }));
  };

  function expand(){
    setexpand(true)
  }

  return (
    <div>
      <form>
        {isexpand && <input onChange={handchange} name="title" placeholder="Title" value={note.title} />}
        <textarea
          onChange={handchange}
          onClick={expand}
          name="content"
          placeholder="Take a note..."
          rows={isexpand ? 3:1}
          value = {note.content}
        />
        <Zoom  in={isexpand}>
        <Fab className="Fab"
          onClick={(event) => {
            props.set(note);
            setnote({title:"",content:""});
            event.preventDefault();
          }}
        >
        <AddCircleIcon/>
        </Fab>
        </Zoom>
      </form>
    </div>
  );
}


export default CreateArea;
