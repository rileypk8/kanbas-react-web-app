import { IoFunnelOutline } from "react-icons/io5";
import { FaGear } from "react-icons/fa6";
import { LuFileInput, LuFileOutput } from "react-icons/lu";
import { useLocation, useParams } from "react-router";
import * as db from "../../Database";
import "../../styles.css";

export default function Grades() {

    const { cid } = useParams();
    const roster = db.enrollments.filter((e: any) => e.course === cid);
    const tasks = db.assignments.filter((t: any) => t.course === cid);

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
 <br />
            <div className="row">
                <table className="table table-responsive table-striped table-bordered"> 
                    <thead className="table-info" id="thead-bipride">
                        <tr className="border-gray">
                            <th>Student Name:</th>
                            {tasks.map((task: any) =>
                                <th>
                                    {task._id}
                                </th>
                            )}
                        </tr>
                    </thead>
                    <tbody>
                            {roster.map((r: any) => (
                                db.users.filter((u: any) => u._id === r.user)
                                    .map((u: any) => (
                                        <tr className="border-gray">
                                            <td>
                                                {u.firstName} {u.lastName}
                                            </td>
                                            {db.grades.filter((g: any) => g.student === u._id)
                                                .map((g: any) => (
                                                    <td align="center">{g.grade}</td>))
                                            }
                                        </tr>
                                    ))
                            ))
                            }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

