import AssignmentControl from "./AssignmentControl";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { FaPlus } from "react-icons/fa6";

export default function Assignments() {
    return (
        <div id="wd-assignments">
            <div id="wd-assignButt" className="d-flex mb-3">
                <div className="me-auto p-2">
                    <input id="wd-search-assignment"
                        placeholder="Search for Assignments" />
                </div>
                <div className="p-2">
                    <button id="wd-add-assignment-group"
                        className="btn btn-lg btn-secondary me-1 float-end">
                        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                        Group
                    </button>
                    <button id="wd-add-assignment"
                        className="btn btn-lg btn-danger me-1 float-end">
                        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                        Assignment
                    </button>
                </div>
                <br /><br />
            </div>
            <div id="wd-assignments-title">
                ASSIGNMENTS 40% of Total <button>+</button>
            </div>
            <div id="wd-assignment-list">
                <div className="wd-assignment-list-item">
                    <AssignmentControl />
                    <a className="wd-assignment-link"
                        href="#/Kanbas/Courses/101/Assignments/a1">
                        A1
                    </a><br />
                    Multiple Modules | <b>Not available until</b> May 6 at 12
                    :00am | <b>Due:</b> May 13 at 11:59pm | 100 pts
                    <LessonControlButtons />
                </div>
                <div className="wd-assignment-list-item">
                    <AssignmentControl />

                    <a className="wd-assignment-link"
                        href="#/Kanbas/Courses/101/Assignments/a2">
                        A2
                    </a><br />
                    Multiple Modules | <b>Not available until</b> May 13 at 12
                    :00am | <b>Due:</b> May 20 at 11:59pm | 100 pts
                    <LessonControlButtons />

                </div>
                <div className="wd-assignment-list-item">
                    <AssignmentControl />

                    <a className="wd-assignment-link"
                        href="#/Kanbas/Courses/101/Assignments/a3">
                        A3
                    </a><br />
                    Multiple Modules | <b>Not available until</b> May 20 at 12
                    :00am | <b>Due:</b> May 27 at 11:59pm | 100 pts
                    <LessonControlButtons />

                </div>
            </div>
        </div>
    );
}
