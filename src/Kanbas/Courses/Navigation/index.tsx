import "./index.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";

export default function CoursesNavigation() {
  const { pathname } = useLocation();
  const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades"];

  return (
    <div id="wd-courses-navigation" className="list-group fs-5 rounded-0 wd-float-left">
      {links.map((link) => (
        <Link key={pathname + link} to={link} className={`list-group-item border border-0
              ${pathname.includes(link) ? "text-black active" : "text-danger"}`}>
  
          {link}
        </Link>
      ))}
    

    </div>
  );
}
