import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "../Modules/GreenCheckmark";
export default function RCheek() {
  return (
    <div className="float-end mt-2">
      <span className="p-3"><GreenCheckmark /></span>

      <span className="p-1"><IoEllipsisVertical className="fs-4" /></span>
    </div>

);}