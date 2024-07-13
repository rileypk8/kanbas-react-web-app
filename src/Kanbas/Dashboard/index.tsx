export default function Dashboard() {
    return (
      <div id="wd-dashboard">
        <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
        <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
        <div id="wd-dashboard-courses">
          <div className="wd-dashboard-course">
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/101/Home">
                CS101
              </a>
              <p className="wd-dashboard-course-title">
                What is a computer
              </p>
              <a href="#/Kanbas/Courses/101/Home"> Go </a>
            </div>
          </div>
          <div className="wd-dashboard-course">
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/102/Home">
                CS102 
              </a>
              <p className="wd-dashboard-course-title">
                Why is a computer
              </p>
              <a href="#/Kanbas/Courses/102/Home"> Go </a>
            </div>
          </div>
          <div className="wd-dashboard-course">
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/103/Home">
                CS103
              </a>
              <p className="wd-dashboard-course-title">
                Who is a computer
              </p>
              <a href="#/Kanbas/Courses/103/Home"> Go </a>
            </div>
          </div>
          <div className="wd-dashboard-course">
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/104/Home">
                CS104
              </a>
              <p className="wd-dashboard-course-title">
                Where is a computer
              </p>
              <a href="#/Kanbas/Courses/104/Home"> Go </a>
            </div>
          </div>
          <div className="wd-dashboard-course">
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/105/Home">
                CS105
              </a>
              <p className="wd-dashboard-course-title">
                When is a computer
              </p>
              <a href="#/Kanbas/Courses/105/Home"> Go </a>
            </div>
          </div>
          <div className="wd-dashboard-course">
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/106/Home">
                CS106
              </a>
              <p className="wd-dashboard-course-title">
                How is a computer
              </p>
              <a href="#/Kanbas/Courses/106/Home"> Go </a>
            </div>
          </div>
          <div className="wd-dashboard-course">
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/107/Home">
                CS107
              </a>
              <p className="wd-dashboard-course-title">
                Jobs vs Torvald
              </p>
              <a href="#/Kanbas/Courses/107/Home"> Go </a>
            </div>
          </div>
        </div>
      </div>
  );
}