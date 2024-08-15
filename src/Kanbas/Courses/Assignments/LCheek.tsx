import { MdOutlineAssignment } from "react-icons/md";
import { BsGripVertical } from "react-icons/bs";
export default function LCheek() {
  return (
    <div className="float-start mt-3 me-4">
      <BsGripVertical className="fs-4" />
       {/* I want this font -- https://instructure.design/#icons-font but figure pirate activity is frowned upon*/}
       <span className="p-2"><MdOutlineAssignment className="fs-4" /></span>
    </div>
);}
