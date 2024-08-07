import { IoFunnelOutline } from "react-icons/io5";
import { FaGear } from "react-icons/fa6";
import { LuFileInput, LuFileOutput } from "react-icons/lu";

export default function Grades() {
    return (
        <div className="container">
            <div className="d-flex justify-content-end">
                <button type="button" className="btn btn-secondary m-1">
                    <LuFileInput /> Import
                </button>
                <button type="button" className="btn btn-secondary m-1">
                    <LuFileOutput /> Export
                </button>
                <button type="button" className="btn btn-secondary m-1">
                    <FaGear />
                </button>
            </div>
            <div className="row">
                <div className="col-sm-6">
                    <label htmlFor="wd-student-names" className="col-sm-3 col-form-label">Student Names</label>
                    <div className="form-group col">
                        <input className="form-control" id="wd-student-names" placeholder="&#x1F50D; Search Students...">
                        </input>
                    </div>
                </div>
                <div className="col-sm-6">
                <label htmlFor="wd-assignment-names" className="col-sm-3 col-form-label">Assignment Names</label>
                    <div className="form-group col">
                        <input className="form-control" id="wd-assignment-names" placeholder="&#x1F50D; Search Assignments...">
                        </input>
                    </div>
                </div>
            </div>
            <div className="m-3">
                <button type="button" className="btn btn-secondary">
                    <IoFunnelOutline /> Filter
                </button>
            </div>
            <div className="table-responsive">
                <table className="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th scope="col">
                                Student Name
                            </th>
                            <th scope="col">
                                A1 SETUP
                            </th>
                            <th scope="col">
                                A2 HTML
                            </th>
                            <th scope="col">
                                A3 CSS
                            </th>
                            <th scope="col">
                                A4 BOOTSTRAP
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">
                                Jerry Garcia
                            </th>
                            <td>100</td>
                            <td>100</td>
                            <td>100</td>
                            <td>100</td>
                        </tr>
                        <tr>
                            <th scope="row">
                                Bob Weir
                            </th>
                            <td>100</td>
                            <td>100</td>
                            <td>100</td>
                            <td>100</td>
                        </tr>
                        <tr>
                            <th scope="row">
                                Mickey Hart
                            </th>
                            <td>100</td>
                            <td>100</td>
                            <td>100</td>
                            <td>100</td>
                        </tr>
                        <tr>
                            <th scope="row">
                                Bill Kreutzmann
                            </th>
                            <td>100</td>
                            <td>100</td>
                            <td>100</td>
                            <td>100</td>
                        </tr>
                        <tr>
                            <th scope="row">
                                Phil Lesh
                            </th>
                            <td>100</td>
                            <td>100</td>
                            <td>100</td>
                            <td>100</td>
                        </tr>
                        <tr>
                            <th scope="row">
                                Oteil Burbridge
                            </th>
                            <td>100</td>
                            <td>100</td>
                            <td>100</td>
                            <td>100</td>
                        </tr>
                        <tr>
                            <th scope="row">
                                Jeff Chimenti
                            </th>
                            <td>100</td>
                            <td>100</td>
                            <td>100</td>
                            <td>100</td>
                        </tr>
                        <tr>
                            <th scope="row">
                                Pigpen McKernan
                            </th>
                            <td>100</td>
                            <td>100</td>
                            <td>100</td>
                            <td>100</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div> 
    )
}
