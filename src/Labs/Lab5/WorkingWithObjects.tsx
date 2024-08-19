import React, { useState } from "react";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;

export default function WorkingWithObjects() {

    const [assignment, setAssignment] = useState({
        id: 1, title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-10-10", completed: false, score: 0,
    });
    const [module, setModule] = useState({
        id: 1, name: "Module 1",
        description: "The 1st Module of NodeJS",
        course: "RS101",
    });
    const ASSIGNMENT_API_URL = `${REMOTE_SERVER}/lab5/assignment`
    const MODULE_API_URL = `${REMOTE_SERVER}/lab5/module`

    return (
        <div id="wd-working-with-objects">
            <h3>Working With Objects</h3>
            <h4>Retrieving Objects</h4>
            <a id="wd-retrieve-assignments" className="btn btn-primary me-3"
                href={`${REMOTE_SERVER}/lab5/assignment`}>
                Get Assignment
            </a>
            <hr />
            <h4>Retrieving Properties</h4>
            <a id="wd-retrieve-assignment-title" className="btn btn-primary me-3"
                href={`${REMOTE_SERVER}/lab5/assignment/title`}>
                Get Title
            </a>
            <hr />
            <h4>Modifying Properties</h4>
            <a id="wd-update-assignment-title"
                className="btn btn-primary float-end"
                href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}>
                Update Title
            </a>
            <input className="form-control w-75" id="wd-assignment-title"
                value={assignment.title} onChange={(e) =>
                    setAssignment({ ...assignment, title: e.target.value })} />
            <br />
            <hr />
            <h4>3.3.4 Assignment Stuff</h4>
            <a id="wd-update-assignment-score"
                className="btn btn-warning float-end"
                href={`${ASSIGNMENT_API_URL}/score/${assignment.score}`}>
                Update Score
            </a>
            <input className="form-control w-75" id="wd-assignment-title"
                value={assignment.score} onChange={(e) =>
                    setAssignment({ ...assignment, score: Number(e.target.value) })} />
            <br />
            <a id="wd-update-completed"
                className="btn btn-warning float-end"
                href={`${ASSIGNMENT_API_URL}/completed/${assignment.completed}`}>
                Update Box
            </a>
            <input className="form-check-input" type="checkbox" id="wd-assignment-boxd"
                checked={assignment.completed} onChange={(e) =>
                    setAssignment({ ...assignment, completed: (e.target.checked) })} />
            <label htmlFor="wd-assignment-boxd">Completed</label><br />
<br />
            <hr />
            <h4>3.3.4 Module Stuff</h4>
            <a id="wd-retrieve-module" className="btn btn-info me-3"
                href={`${REMOTE_SERVER}/lab5/module`}>
                Get Module
            </a>
            <a id="wd-retrieve-module-name" className="btn btn-info"
                href={`${REMOTE_SERVER}/lab5/module/name`}>
                Get Module Name
            </a>
            <br/>
            <br/>
            <a id="wd-update-module-name"
                className="btn btn-info float-end"
                href={`${MODULE_API_URL}/module/${module.name}`}>
                Update Name
            </a>
            <input className="form-control w-75" id="wd-module-name"
                value={module.name} onChange={(e) =>
                    setModule({ ...module, name: e.target.value })} />
                    <hr />


        </div>
    );
}