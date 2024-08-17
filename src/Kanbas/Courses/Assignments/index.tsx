import LCheek from "./LCheek";
import RCheek from "./RCheek";
import AssJeeves from "./AssJeeves";
import { BsGripVertical, BsPlusLg } from "react-icons/bs";
import { IoEllipsisVertical } from "react-icons/io5";

import { useLocation, useParams } from "react-router";
import { assignments } from "../../Database";

export default function Assignments() {
    const { cid } = useParams();
    const { pathname } = useLocation();

    return (
        <div id="wd-assignments">
            <div>
                <AssJeeves />
            </div>

            <br /><br />
            <ul id="wd-assignment-list" className="list-group rounded-0">
                <li className="wd-assignment-list list-group-item p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary">
                        <BsGripVertical className="me-2 fs-3" />
                        ASSIGNMENTS
                        <div className="float-end">
                            <span id="wd-booty" className="p-2 me-3">40% of Total</span>
                            <BsPlusLg className="position-relative me-2" style={{ bottom: "1px" }} />
                            <IoEllipsisVertical className="fs-4" />
                        </div>
                    </div>
                    <ul id="wd-assignments-list" className="list-group rounded-0">
                        {assignments
                            .filter((assignment: any) => assignment.course === cid)
                            .map((assignment: any) => (
                                <li className="wd-cheek-li list-group-item">
                                    <LCheek />
                                    <div className="float-start">
                                        <a className="wd-assignment-link"
                                            href={`#${pathname}/${assignment._id}`}>
                                            {assignment.title}
                                        </a>
                                        <br />
                                        <span className="text-danger">Multiple Modules</span> | <b>Not available until</b> May 6 at 12
                                        :00am | <b>Due:</b> May 13 at 11:59pm | 100 pts
                                    </div>
                                    <RCheek />
                                </li>
                            ))}
                    </ul>
                </li>
            </ul >
        </div >
    );
}
