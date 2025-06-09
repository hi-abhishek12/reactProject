import React from "react";
import AddNote from "./AddNote";
import NotesList from "./NotesList";
import {
  PencilSquareIcon,
  BellIcon,
  TagIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";

function Sidebar() {
  return (
    <div className="flex">
  {/* Sidebar */}
  <div className="h-screen w-[250px] bg-white shadow-lg p-4 space-y-4 text-gray-700">
    <ul className="flex flex-col gap-4">
      <li className="flex items-center gap-3 hover:bg-gray-100 p-2 rounded-md cursor-pointer">
        <PencilSquareIcon className="h-5 w-5 text-gray-500" />
        Notes
      </li>
      <li className="flex items-center gap-3 hover:bg-gray-100 p-2 rounded-md cursor-pointer">
        <BellIcon className="h-5 w-5 text-gray-500" />
        Reminders
      </li>
      <li className="flex items-center gap-3 hover:bg-gray-100 p-2 rounded-md cursor-pointer">
        <TagIcon className="h-5 w-5 text-gray-500" />
        Edit labels
      </li>
      <li className="flex items-center gap-3 hover:bg-gray-100 p-2 rounded-md cursor-pointer">
        <TrashIcon className="h-5 w-5 text-gray-500" />
        Trash
      </li>
    </ul>
  </div>

  {/* Main content */}
  <div className="flex-1 p-6">
    <AddNote />
    <NotesList/>
  </div>
</div>

  );
}

export default Sidebar;
