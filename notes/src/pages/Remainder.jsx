import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {AddNote} from "../componets/index";
function Remainder() {
  const dispatch = useDispatch()
  return (
    <div>
        <AddNote onSubmit={(data)=> (dispatch())}showRemainderTime={true}/>
    </div>
  );
}

export default Remainder;
