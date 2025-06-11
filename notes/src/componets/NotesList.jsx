import React, { useState } from "react";
import { Button } from "./index";
import NotEditMode from "./NotEditMode";
import { PaperClipIcon } from "@heroicons/react/24/outline";

import { removeNote, copyNote } from "../store/notesSlice";
import { useSelector, useDispatch } from "react-redux";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";

function NotesList() {
  const dispatch = useDispatch();
  const notesList = useSelector((state) => state.notes.notes);

  const [openMenu, setopenMenu] = React.useState(null);
  const [isTodoEditable, setisTodoEditable] = useState(null);

  //<------ Functions  ------->

  const menuStatus = (id) => {
    if (openMenu === id) {
      setopenMenu(null);
    } else {
      setopenMenu(id);
    }
  };

  const editTodo = (id) => {
    if (isTodoEditable == id) {
      setisTodoEditable(null);
    } else {
      setisTodoEditable(id);
      setopenMenu(null);
    }
  };
  
  const handlePin = (id)=>{
    
  }
  React.useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notesList));
  }, [notesList]);

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {notesList.map((note) => (
        <div
          key={note.id}
          className="relative bg-yellow-100 border border-yellow-300 shadow-md p-4 rounded-xl hover:shadow-lg transition-all"
        >
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            {note.notesTitle || "Untitled"}
          </h3>
          <p className="text-gray-700 whitespace-pre-wrap">{note.notesMsg}</p>

          <div className="absolute top-2 right-2 flex flex-col items-end space-y-1">
            <PaperClipIcon
              className="h-5 w-5 text-gray-500 hover:text-yellow-600 cursor-pointer"
              onClick={() => handlePin(note.id)}
            />
            <EllipsisVerticalIcon
              className="h-5 w-5 text-gray-600 hover:text-gray-800 cursor-pointer"
              onClick={() => menuStatus(note.id)}
            />
          </div>

          {openMenu === note.id && (
            <div
              className="absolute right-0 mt-2 w-52 bg-[#2d2f31]
               text-sm text-white rounded-lg shadow-lg p-2 z-10 space-y-1"
            >
              <Button
                type="button"
                onClick={() => dispatch(removeNote(note.id))}
                className="w-full text-left px-3 py-1 hover:bg-[#3c3e40] rounded"
              >
                Delete
              </Button>
              <Button
                type="button"
                onClick={() => editTodo(note.id)}
                className="w-full text-left px-3 py-1 hover:bg-[#3c3e40] rounded"
              >
                Edit
              </Button>
              <Button
                type="button"
                onClick={() =>
                  dispatch(
                    copyNote({ title: note.notesTitle, msg: note.notesMsg })
                  )
                }
                className="w-full text-left px-3 py-1 hover:bg-[#3c3e40] rounded"
              >
                Make a copy
              </Button>
            </div>
          )}

          {isTodoEditable == note.id && (
            <NotEditMode
              key={`edit-${note.id}`}
              noteId={note.id}
              noteTitle={note.notesTitle}
              noteMsg={note.notesMsg}
              onClose={() => setisTodoEditable(null)}
            />
          )}
        </div>
      ))}
    </div>
  );
}

export default NotesList;
