import LCheek from "./LCheek";
import RCheek from "./RCheek";
import AssMan from "./AssMan";
import { FaMagnifyingGlass, FaPlus } from "react-icons/fa6";
import { BsGripVertical, BsPlusLg } from "react-icons/bs";
import { IoEllipsisVertical } from "react-icons/io5";
export default function Assignments() {
    return (
        <div id="wd-assignments">
            <div>
                <AssMan />
            </div>

            {/* <div id="wd-asscon" className="d-flex">

                <div className="input-group flex-grow: 4 p-2">
                    <input type="text" className="form-control" placeholder="&#xF002; Search..." />
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
                        + Assignment
                    </button>
                </div>
            </div> */}
            <br /><br />

            this is between butts and ass
            <br /><br />
            <ul id="wd-bikini" className="list-group rounded-0">
                <li className="wd-assignment-list list-group-item p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary">
                        <BsGripVertical className="me-2 fs-3" />
                        ASSIGNMENTS
                        <span id="wd-booty">40% of Total</span>
                        <BsPlusLg className="position-relative me-2" style={{ bottom: "1px" }} />
                        <IoEllipsisVertical className="fs-4" />
                    </div>
                    <ul className="wd-assignments list-group rounded-0">
                        <li className="wd-cheek-li list-group-item p-3 ps-1">
                                <LCheek />
                                <a className="wd-assignment-link"
                                    href="#/Kanbas/Courses/101/Assignments/a1">
                                    A1
                                </a><br />
                                Multiple Modules | <b>Not available until</b> May 6 at 12
                                :00am | <b>Due:</b> May 13 at 11:59pm | 100 pts
                                <RCheek />
                        </li>
                        <li className="wd-cheek-li list-group-item">
                                <LCheek />
                                <a className="wd-assignment-link"
                                    href="#/Kanbas/Courses/101/Assignments/a2">
                                    A2
                                </a><br />
                                Multiple Modules | <b>Not available until</b> May 13 at 12
                                :00am | <b>Due:</b> May 20 at 11:59pm | 100 pts
                                <RCheek />
                        </li>
                        <li className="wd-cheek-li list-group-item">
                                <LCheek />
                                <a className="wd-assignment-link"
                                    href="#/Kanbas/Courses/101/Assignments/a3">
                                    A3
                                </a><br />
                                Multiple Modules | <b>Not available until</b> May 20 at 12
                                :00am | <b>Due:</b> May 27 at 11:59pm | 100 pts
                                <RCheek />
                        </li>
                    </ul>
                </li>
            </ul >
        </div >
    );
}
