import { useLocation, useParams } from "react-router";
import { assignments } from "../../Database";

export default function AssignmentEditor() {

    const { aid } = useParams();
    const { pathname } = useLocation();
    const { _id, title, course } = assignments.filter((assignment: any) => assignment._id === aid)[0];
    const description = "There is no value in the JSON for alot of data-driven stuff. There was no instruction to update it. So I made it up as a constant to show understanding of concept.";
    const points = "100"
    const dueDate = "2020-08-08"
    const availDate = "2020-02-29"



    return (
        <div id="wd-assignments-editor" className="d-flex w-75 offset-sm-1">
            <form className="w-100 me-4">
                <div className="row">
                    <label htmlFor="wd-name" className="form-label">
                        Assignment Name
                    </label>
                </div>
                <div className="row">
                    <input id="wd-name" className="form-control" value={title} />
                </div>
                <div className="row mb-4">
                    <textarea id="wd-description" className="form-control" cols={40} rows={10}>
                        {description}
                    </textarea>
                </div>

                <div className="row mb-2">
                    <div className="col-md-4">
                        <label htmlFor="wd-points" className="col-form-label float-end">Points</label>
                    </div>
                    <div className="col-md-8">
                        <input className="form-control" id="wd-points" value={points} />
                    </div>
                </div>
                <div className="row mb-2">
                    <div className="col-4">
                        <label htmlFor="wd-group" className="col-form-label float-end">Assignment Group</label>
                    </div>
                    <div className="form-group col-8">
                        <select className="form-control" id="wd-group">
                            <option selected>ASSIGNMENTS</option>
                            <option>Other</option>
                        </select>
                    </div>
                </div>
                <div className="row mb-2">
                    <div className="col-4">
                        <label htmlFor="wd-display-grade-as" className="col-form-label float-end">
                            Display Grade as</label></div>
                    <div className="col">
                        <select id="wd-display-grade-as" className="form-control">
                            <option selected value="PERCENTAGE">
                                Percentage</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <label htmlFor="wd-submission-type" className="col-form-label float-end">
                            Submission Type</label>
                    </div>
                    <div className="col border-gray float mb-2 m-2">
                        <select id="wd-submission-type" className="form-control m-2">
                            <option selected value="ONLINE">
                                Online</option>
                        </select>
                        <label className="form-label m-2"><strong>Online Entry Options</strong></label>
                        <div>
                            <div>
                                <input type="checkbox" className="form-check-input m-2" name="online-entry" id="wd-text-entry" />
                                <label className="col-form-label" htmlFor="wd-text-entry">Text Entry</label>
                            </div>

                            <div>
                                <input type="checkbox" className="form-check-input m-2" name="online-entry" id="wd-website-url" />
                                <label className="col-form-label" htmlFor="wd-website-url">Website URL</label>
                            </div>

                            <div>
                                <input type="checkbox" className="form-check-input m-2" name="online-entry" id="wd-media-recordings" />
                                <label className="col-form-label" htmlFor="wd-media-recordings">Media Recordings</label>
                            </div>

                            <div>
                                <input type="checkbox" className="form-check-input m-2" name="online-entry" id="wd-student-annotation" />
                                <label className="col-form-label" htmlFor="wd-student-annotation">Student Annotation</label>
                            </div>

                            <div>
                                <input type="checkbox" className="form-check-input m-2" name="online-entry" id="wd-file-upload" />
                                <label className="col-form-label" htmlFor="wd-file-upload">File Upload</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <label htmlFor="wd-Assignment-type" className="col-form-label float-end">
                            Assign</label>
                    </div>
                    <div className="col border-gray float m-2">
                        <div className="row">
                            <label className="form-label m-2"><strong>Assign to:</strong></label>
                        </div>
                        <div className="row mx-1 mb-2">
                            <select id="wd-assign-to" className="form-control">
                                <option selected value="everyone">
                                    Everyone</option>
                            </select>
                        </div>
                        <div className="row">
                            <label className="form-label m-2" htmlFor="wd-due-date"><strong>Due</strong></label>
                            </div>
                        <div className="row mx-1 mb-2">
                                <input className="form-control" type="date"
                                    id="wd-due-date"
                                    value={dueDate} />
                        </div>
                        <div className="row">
                            <div className="col-sm-6">
                                <label className="form-label m-2" htmlFor="wd-available-from"><strong>Available from:</strong></label>
                                <input className="form-control" type="date"
                                    id="wd-available-from"
                                    value={availDate} />
                            </div>
                            <div className="col-sm-6">
                                <label className="form-label m-2" htmlFor="wd-available-until"><strong>Until:</strong></label>
                                <input className="form-control" type="date"
                                    id="wd-available-until"
                                    value={dueDate} />
                                    <br/>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="d-flex flex-row-reverse">
                    <button type="submit" id="wd-save" className="btn border-secondary btn-danger m-1">Save</button>
                    <button type="submit" id="wd-cancel" className="btn border-secondary btn-secondary m-1">Cancel</button>
                </div>
            </form>
        </div >
    );
}

