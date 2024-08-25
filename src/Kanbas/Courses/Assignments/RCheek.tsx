import { IoEllipsisVertical } from "react-icons/io5";
import { FaTrash } from "react-icons/fa6";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { deletePiece } from "./reducer";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export default function RCheek({ piece }: { piece: any }) {
  const dispatch = useDispatch();
  return (
    <div className="float-end d-flex align-items-center">
      <button className="btn btn-light"
      data-bs-toggle="modal" data-bs-target={`#wd-delete-piece-dialog-${piece._id}`}>
        <FaTrash className="text-danger mb-1" />
      </button>

      <span className="ms-3 p-2"><GreenCheckmark /></span>
      <IoEllipsisVertical className="fs-4" />

      <div id={`wd-delete-piece-dialog-${piece._id}`} className="modal fade" data-bs-backdrop="static" data-bs-keyboard="false">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                Are you sure? </h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body">
              I hope you know that this will go down on your permanent record.
              Delete "{piece.title}"?
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                Cancel </button>
              <button type="button" data-bs-dismiss="modal" className="btn btn-danger"
                onClick={(e) => dispatch(deletePiece(piece._id))}>
                Ok
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}