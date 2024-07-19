import AssignmentControl from "./AssignmentControl";
import LessonControlButtons from "../Modules/LessonControlButtons";

export default function Assignments() {
    return (
        <div id="wd-assignments">
            <input id="wd-search-assignment"
                placeholder="Search for Assignments" />
            <button id="wd-add-assignment-group">+ Group</button>
            <button id="wd-add-assignment">+ Assignment</button>
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
    );}
