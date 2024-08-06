import { FaMagnifyingGlass, FaPlus } from "react-icons/fa6";

export default function AssMan() {
  return (
    <div id="wd-asscon" className="d-flex">
      <div className="input-group p-2 me-5">
        <div className="input-group-prepend">
          <button className="btn btn-outline-secondary" type="button"><FaMagnifyingGlass /></button>
        </div>
        <input type="text" className="form-control" placeholder="Search..." />
      </div>
      <div id="wd-assbutt" className="text-nowrap float-end">
        <button id="wd-add-assignment-group"
          className="btn btn-lg btn-secondary me-1">
          <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
          Group
        </button>
        <button id="wd-add-assignment"
          className="btn btn-lg btn-danger me-1 ">
          <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
          Assignment
        </button>
      </div>
    </div>
);}