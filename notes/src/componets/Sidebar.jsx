import React from "react";
import { Link } from "react-router";
import {
  PencilSquareIcon,
  BellIcon,
  TagIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";

function Sidebar() {
  return(
     <aside className="h-full w-[250px] bg-white shadow-md p-4 text-gray-700">
      <ul className="flex flex-col gap-4">
        <li>
          <Link
            to="/"
            className="flex items-center gap-3 hover:bg-gray-100 p-2 rounded-md"
          >
            <PencilSquareIcon className="h-5 w-5 text-gray-500" />
            Notes
          </Link>
        </li>
        <li>
          <Link
            to="/remainders"
            className="flex items-center gap-3 hover:bg-gray-100 p-2 rounded-md"
          >
            <BellIcon className="h-5 w-5 text-gray-500" />
            Reminders
          </Link>
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
    </aside>
  )
}

export default Sidebar;
