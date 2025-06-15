import React from "react";
import { addNote } from "../store/notesSlice";
import { useDispatch } from "react-redux";
import { AddNote, NotesList } from "../componets/index";

function Home() {
  const dispatch = useDispatch();
  return (
    <>
      <AddNote
        onSubmit={(data) => dispatch(addNote(data))}
        showRemainderTime={false}
      />
      <NotesList />
    </>
  );
}

export default Home;
