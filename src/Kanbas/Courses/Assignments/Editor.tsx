export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor" className="container">
            <label htmlFor="wd-name" className="justify-content-start">
                Assignment Name
            </label>
            <form>
                <div className="row">
                <input id="wd-name" value="A1" />
                <textarea id="wd-description" cols={40} rows={10}>
                    The assignment is *available online*
                    Submit a link to the landing page of your web application to Netflix.
                </textarea>
                </div>
                <div className="row">
                    <label htmlFor="wd-points" className="col-sm-2 col-form-label">Points</label>
                </div>
                <div className="col-sm-10">
                    <input className="form-control mb-3" id="wd-points" value={100} />
                </div>
                <div className="form-group-inline">
                    <label htmlFor="wd-group">Assignment Group</label>
                    <div className="form-group-inline">

                        <select id="wd-group">
                            <option selected value="ASSIGNMENTS">
                                ASSIGNMENTS</option>
                        </select>
                    </div>
                </div>
                <div className="form-group-inline">
                    <label htmlFor="wd-display-grade-as">Display Grade as</label>
                    <select id="wd-display-grade-as">
                        <option selected value="PERCENTAGE">
                            Percentage</option>
                    </select>
                </div>
                <div className="form-group-inline">

                    <label htmlFor="wd-submission-type">Submission Type</label>
                    <select id="wd-submission-type">
                        <option selected value="ONLINE">
                            Online</option>
                    </select>
                    <label>Online Entry Options</label>
                    <input type="checkbox" name="online-entry" id="wd-text-entry" />
                    <label htmlFor="wd-text-entry">Text Entry</label>

                    <input type="checkbox" name="online-entry" id="wd-website-url" />
                    <label htmlFor="wd-website-url">Website URL</label>

                    <input type="checkbox" name="online-entry" id="wd-media-recordings" />
                    <label htmlFor="wd-media-recordings">Media Recordings</label>

                    <input type="checkbox" name="online-entry" id="wd-student-annotation" />
                    <label htmlFor="wd-student-annotation">Student Annotation</label>

                    <input type="checkbox" name="online-entry" id="wd-file-upload" />
                    <label htmlFor="wd-file-upload">File Upload</label>
                </div>
                <div>
                    <div className="form-group-inline">
                        <label className="wd-assign">Assign</label>
                        <label htmlFor="wd-assign-to">Assign to</label>
                        <input type="text" id="wd-assign-to" value="Everyone" />
                        <label htmlFor="wd-due-date"> Due </label><br />
                        <input type="date"
                            id="wd-due-date"
                            value="2024-05-13" />

                        <label htmlFor="wd-available-from"> Available from </label>
                        <label htmlFor="wd-available-until"> Until </label>
                        <input type="date"
                            id="wd-available-from"
                            value="2024-05-06" />
                        <input type="date"
                            id="wd-available-until"
                            value="2024-05-20" />
                    </div>
                </div>
                <button type="submit" id="wd-cancel" className="btn btn-primary">Cancel</button>
                <button type="submit" id="wd-save" className="btn btn-primary">Save</button>
            </form>
        </div >
    );
}

