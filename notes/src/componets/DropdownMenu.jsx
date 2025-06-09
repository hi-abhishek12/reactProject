import React from "react";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";

function DropdownMenu() {
    const [openMenu, setopenMenu] = useState(false)
    const menuStatus = () =>{
        1
    }
  return (
    <div>
      {" "}
      <EllipsisVerticalIcon
      onClick={menuStatus}
      className="h-6 w-6 text-gray-600 cursor-pointer hover:text-gray-800" />
    </div>
  );
}

export default DropdownMenu;
