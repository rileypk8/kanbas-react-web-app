export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor" className="d-flex p-3">
            <form>
                <div className="row mb-3 col-sm-12">
                    <label htmlFor="wd-name" className="justify-content-start">
                        Assignment Name
                    </label>
                    <input id="wd-name" className="form-control" value="A1" />
                    <textarea id="wd-description"  className="form-control" cols={40} rows={10}>
                        The assignment is *available online*
                        Submit a link to the landing page of your web application to Netflix.
                    </textarea>
                </div>
                <div className="row mb-2">
                    <label htmlFor="wd-points" className="col-sm-3 col-form-label">Points</label>
                    <div className="col">
                        <input className="form-control" id="wd-points" value={100} />
                    </div>
                </div>
                <div className="row mb-2">
                    <label htmlFor="wd-group" className="col-sm-3 col-form-label">Assignment Group</label>
                    <div className="form-group col">
                        <select className="form-control" id="wd-group">
                            <option selected>ASSIGNMENTS</option>
                            <option>Other</option>
                        </select>
                    </div>
                </div>
                <div className="row mb-2">
                    <label htmlFor="wd-display-grade-as" className="col-sm-3 col-form-label">
                        Display Grade as</label>
                    <div className="col">
                        <select id="wd-display-grade-as" className="form-control">
                            <option selected value="PERCENTAGE">
                                Percentage</option>
                        </select>
                    </div>
                </div>
                <div className="row mb-2 border-gray rounded py-2">
                    <label htmlFor="wd-submission-type" className="col-sm-3 col-form-label">
                        Submission Type</label>
                    <div className="col">
                        <select id="wd-submission-type" className="form-control mb-3">
                            <option selected value="ONLINE">
                                Online</option>
                        </select>
                    
                        <label className="row row-form-label m-1">Online Entry Options</label>
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
                <div className="row mb-2 border-gray rounded py-2">
                    <label className="col-form-label col-sm-3">Assign</label>
                    <div className="col-sm-6 form-group-inline">
                        <div>
                            <label className="col-form-label" htmlFor="wd-assign-to">Assign to</label>
                            <input className="form-control" type="text" id="wd-assign-to" value="Everyone" />
                        </div>
                        <div className="row">
                            <div className="col-sm-6">
                                <label className="col-form-label" htmlFor="wd-due-date"> Due </label><br />
                                <input className="form-control" type="date"
                                    id="wd-due-date"
                                    value="2024-05-13" />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-sm-6">
                                <label className="col-form-label" htmlFor="wd-available-from"> Available from </label>
                                <input className="form-control" type="date"
                                    id="wd-available-from"
                                    value="2024-05-06" />
                            </div>

                            <div className="col-sm-6">
                                <label className="col-form-label" htmlFor="wd-available-until"> Until </label>
                                <input className="form-control" type="date"
                                    id="wd-available-until"
                                    value="2024-05-20" />
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

