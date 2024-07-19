import { MdOutlineAssignment } from "react-icons/md";
import { BsGripVertical } from "react-icons/bs";
export default function AssignmentControl() {
  return (
    <div className="float-left">
      <BsGripVertical className="fs-4" />
       {/* I want this font -- https://instructure.design/#icons-font but figure pirate activity is frowned upon*/}
      <MdOutlineAssignment className="fs-4" />
    </div>
);}
