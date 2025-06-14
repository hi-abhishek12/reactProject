import React, { useState } from "react";
import { Input, Button , AddNote} from "../componets/index";
function Remainder() {
  const [showRemainder, setShowRemainder] = useState(true)
  return (
    <div>
        <AddNote/>
    </div>
  );
}

export default Remainder;
