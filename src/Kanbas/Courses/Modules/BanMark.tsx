import { FaBan } from "react-icons/fa";
import { FaCircle } from "react-icons/fa";

export default function BanMark() {
  return (
    <span className="me-1 position-relative">
      <FaBan style={{ top: "2px" }}
        className="me-1 position-absolute fs-5" />
      <FaCircle className="text-white me-1 fs-6" />
    </span>
  );
}
