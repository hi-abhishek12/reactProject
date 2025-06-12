import React from "react";

function NoteTextarea({
  value,
  onClick,
  onChange,
  rows = 1,
  placeholder = "Take a note...",
}) {
  return (
    <textarea
      placeholder={placeholder}
      value={value}
      onClick={onClick}
      onChange={onChange}
      className="w-full px-4 py-2 rounded-md border border-gray-300 
        focus:outline-none focus:ring-2 focus:ring-yellow-400
        resize-none transition-all text-gray-800"
      rows={rows}
    />
  );
}

export default NoteTextarea;
