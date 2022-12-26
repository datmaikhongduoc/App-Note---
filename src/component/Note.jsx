import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import BtnCompoment from "./BtnCompoment";
import { useState } from "react";
import DisplayTime from "./DisplayTime";

function Note(props) {
  const [time, setTime] =useState({ms:0,s:0,m:0,h:0});
  const [interv, setInterv] = useState();
  const [status, setStatus] = useState(0);
  function handleClick() {
    props.onDelete(props.id);
  }
  const start = () => {
    run();
    setStatus(1);
    setInterv(setInterval(run, 10));
  };

  var updatedMs = time.ms, updatedS = time.s, updatedM = time.m, updatedH = time.h;

  const run = () => {
    if(updatedM === 60){
      updatedH++;
      updatedM = 0;
    }
    if(updatedS === 60){
      updatedM++;
      updatedS = 0;
    }
    if(updatedMs === 100){
      updatedS++;
      updatedMs = 0;
    }
    updatedMs++;
    return setTime({ms:updatedMs, s:updatedS, m:updatedM, h:updatedH});
  };

  const stop = () => {
    clearInterval(interv);
    setStatus(2);
  };
  

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <DisplayTime time={time}/>
      <BtnCompoment start={start} status={status} stop={stop} />
      <button onClick={handleClick}>
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Note;
