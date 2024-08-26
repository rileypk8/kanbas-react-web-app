import { useLocation, useParams } from "react-router";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import * as db from "../../Database"
import React, { useState } from "react";
import { addPiece, updatePiece, deletePiece } from "./reducer";

export default function AssignmentEditor() {

    const { aid } = useParams();
    const { pathname } = useLocation();
    const donePath = pathname.substring(0, pathname.lastIndexOf('/'));
    const { booty } = useSelector((state: any) => state.bbl);
    const dispatch = useDispatch();
    let piece = booty.find((p: any) => p._id === aid);

    /*
    console.log("sup?");
    console.log(aid);
    console.log(piece)
    */

    function update(state: any) {
        // just update our own copy, we'll save if you click the Save button
        // could not deal with it updating.after.e.v.e.r.y keystroke
        piece = state;
    }

    return (
        <div id="wd-assignments-editor" className="col-8">
            <form className="me-4">
                <div className="row">
                    <label htmlFor="wd-name" className="form-label">
                        Assignment Name
                    </label>
                </div>
                <div className="row">
                    <input id="wd-name" className="form-control"
                        defaultValue={piece.title}
                        onChange={(e) => update({ ...piece, title: e.target.value })} />
                </div>
                <br />

                <div className="row mb-4">
                    <textarea id="wd-description" className="form-control" cols={40} rows={10}
                        defaultValue={piece.desc}
                        onChange={(e) => update({ ...piece, desc: e.target.value })} />
                </div>

                <div className="row mb-2">
                    <div className="col-md-5">
                        <label htmlFor="wd-points" className="col-form-label float-end">Points</label>
                    </div>
                    <div className="col-md-7">
                        <input className="form-control" id="wd-points" defaultValue={piece.pts}
                            onChange={(e) => update({ ...piece, pts: e.target.value })} />
                    </div>
                </div>
                <div className="row mb-2">
                    <div className="col-5">
                        <label htmlFor="wd-group" className="col-form-label float-end">Assignment Group</label>
                    </div>
                    <div className="form-group col-7">
                        <select className="form-control" id="wd-group">
                            <option selected>ASSIGNMENTS</option>
                            <option>Other</option>
                        </select>
                    </div>
                </div>
                <div className="row mb-2">
                    <div className="col-5">
                        <label htmlFor="wd-display-grade-as" className="col-form-label float-end">
                            Display Grade as</label></div>
                    <div className="col-7">
                        <select id="wd-display-grade-as" className="form-control">
                            <option selected value="PERCENTAGE">
                                Percentage</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="col-5">
                        <label htmlFor="wd-submission-type" className="col-form-label float-end">
                            Submission Type</label>
                    </div>
                    <div className="col-6 border-gray float mb-2 m-2">
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
                    <div className="col-5">
                        <label htmlFor="wd-Assignment-type" className="col-form-label float-end">
                            Assign</label>
                    </div>
                    <div className="col-6 border-gray float m-2">
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
                                value={piece.due}
                                onChange={(e) => update({ ...piece, due: e.target.value })} />
                        </div>
                        <div className="row">
                            <div className="col-sm-6">
                                <label className="form-label m-2" htmlFor="wd-available-from"><strong>Available from:</strong></label>
                                <input className="form-control" type="date"
                                    id="wd-available-from"
                                    value={piece.afrom}
                                    onChange={(e) => update({ ...piece, afrom: e.target.value })} />
                            </div>
                            <div className="col-sm-6">
                                <label className="form-label m-2" htmlFor="wd-available-until"><strong>Until:</strong></label>
                                <input className="form-control" type="date"
                                    id="wd-available-until"
                                    value={piece.ato}
                                    onChange={(e) => update({ ...piece, ato: e.target.value })} />
                                <br />
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="d-flex flex-row-reverse">
                    <Link to={donePath}>
                        <button type="submit" id="wd-save" className="btn border-secondary btn-danger m-1"
                            onClick={(e) => {
                                delete piece['new'];
                                dispatch(updatePiece({ ...piece }))
                            }}>
                            Save
                        </button>
                    </Link>

                    <Link to={donePath}>
                        <button type="submit" id="wd-cancel" className="btn border-secondary btn-secondary m-1"
                          onClick={(e) => piece.hasOwnProperty('new') && dispatch(deletePiece(piece._id))}>
                            Cancel
                        </button>
                    </Link>
                </div>
            </form>
        </div >
    );
}

