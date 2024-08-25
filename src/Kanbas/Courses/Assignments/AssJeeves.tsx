import { FaMagnifyingGlass, FaPlus } from "react-icons/fa6";
import { addPiece } from "./reducer";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router";
import { useNavigate } from "react-router-dom";

let nextPieceId = 0;

export default function AssJeeves() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <div id="wd-bootyActions" className="d-flex">
      <div className="d-flex align-content-center justify-content-start w-75 input-group ">
        <div className="input-group-prepend">
          <button className="btn btn-outline-secondary" type="button"><FaMagnifyingGlass className="fs-3"/>
          </button>
        </div>
        <input type="text" className="form-control" placeholder="Search..." />
      </div>
      <div id="wd-plump" className="justify-content-end text-nowrap ms-4">
        <button id="wd-add-assignment-group"
          className="btn btn-lg btn-secondary me-1">
          <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
          Group
        </button>
        <button className="btn btn-lg btn-danger me-1"
          id="wd-add-piece-click"
          onClick={(e) => {
            const pid = nextPieceId++;
            const thisCourse = pathname.split('/')[3];
            dispatch(addPiece({ pid: pid, course: thisCourse }));
            navigate(String(pid));
          }} >
          <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
          Assignment
        </button>
      </div>
    </div>
  );
} 