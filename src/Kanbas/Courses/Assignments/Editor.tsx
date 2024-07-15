export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor">

            <label htmlFor="wd-name"><h3>Assignment Name</h3></label>
            <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
            <textarea id="wd-description" cols={40} rows={10}>
                The assignment is available online Submit a link to the landing page of
            </textarea>
            <br /><br />
            <table>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-points">Points</label>
                    </td>
                    <td>
                        <input id="wd-points" value={100} />
                    </td>
                </tr>
                <br />
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-group">Assignment Group</label>
                    </td>
                    <td>
                        <select id="wd-group">
                            <option selected value="ASSIGNMENTS">
                                ASSIGNMENTS</option>
                        </select>
                    </td>
                </tr>
                <br />
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-display-grade-as">Display Grade as</label>
                    </td>
                    <td>
                        <select id="wd-display-grade-as">
                            <option selected value="PERCENTAGE">
                                Percentage</option>
                        </select>
                    </td>
                </tr>
                <br />
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-submission-type">Submission Type</label>
                    </td>
                    <td>
                        <select id="wd-submission-type">
                            <option selected value="ONLINE">
                                Online</option>
                        </select><br /><br />
                        <label>Online Entry Options</label><br />
                        <input type="checkbox" name="online-entry" id="wd-text-entry" />
                        <label htmlFor="wd-text-entry">Text Entry</label><br />

                        <input type="checkbox" name="online-entry" id="wd-website-url" />
                        <label htmlFor="wd-website-url">Website URL</label><br />

                        <input type="checkbox" name="online-entry" id="wd-media-recordings" />
                        <label htmlFor="wd-media-recordings">Media Recordings</label><br />

                        <input type="checkbox" name="online-entry" id="wd-student-annotation" />
                        <label htmlFor="wd-student-annotation">Student Annotation</label><br />

                        <input type="checkbox" name="online-entry" id="wd-file-upload" />
                        <label htmlFor="wd-file-upload">File Upload</label>
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">Assign</td>
                    <td>
                        <label htmlFor="wd-assign-to">Assign to</label><br />
                        <input type="text" id="wd-assign-to" value="Everyone" /><br /><br />
                        <label htmlFor="wd-due-date"> Due </label><br />
                        <input type="date"
                            id="wd-due-date"
                            value="2024-05-13" /><br /><br />
                        <table>
                            <tr>
                                <td>
                                    <label htmlFor="wd-available-from"> Available from </label>
                                </td>
                                <td>
                                    <label htmlFor="wd-available-until"> Until </label></td>
                            </tr>
                            <tr>
                                <td>
                                    <input type="date"
                                        id="wd-available-from"
                                        value="2024-05-06" />
                                </td>
                                <td>
                                    <input type="date"
                                        id="wd-available-until"
                                        value="2024-05-20" />
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
            <hr />
            <button id="wd-cancel">Cancel</button>
            <button id="wd-save">Save</button>

        </div>
    );
}

