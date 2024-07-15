export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <img src="/images/a1-bigbird.png" alt="Big Bird the Muppet" width={200} />
          <div>
            <a className="wd-dashboard-course-link"
              href="#/Kanbas/Courses/101/Home">
              CS101 - Intro to CS
            </a>
            <p className="wd-dashboard-course-title">
              What is a Computer?
            </p>
            <a href="#/Kanbas/Courses/101/Home"> Go </a>
          </div>
        </div>
        <div className="wd-dashboard-course">
          <img src="/images/a1-cookie.png" alt="Cookie Monster the Muppet" width={200} />
          <div>
            <a className="wd-dashboard-course-link"
              href="#/Kanbas/Courses/102/Home">
              CS102 - Cookie Management
            </a>
            <p className="wd-dashboard-course-title">
              C is for Cookie. Nom Nom Nom.
            </p>
            <a href="#/Kanbas/Courses/102/Home"> Go </a>
          </div>
        </div>
        <div className="wd-dashboard-course">
          <img src="/images/a1-gonzo.png" alt="Gonzo the Muppet" width={200} />
          <div>
            <a className="wd-dashboard-course-link"
              href="#/Kanbas/Courses/103/Home">
              CS102 - Identity and Access Design 
            </a>
            <p className="wd-dashboard-course-title">
              Who is a computer?
            </p>
            <a href="#/Kanbas/Courses/103/Home"> Go </a>
          </div>
        </div>
        <div className="wd-dashboard-course">
          <img src="/images/a1-kermit.png" alt="Kermit the Muppet" width={200} />
          <div>
            <a className="wd-dashboard-course-link"
              href="#/Kanbas/Courses/104/Home">
              CS102 - Data Modeling
            </a>
            <p className="wd-dashboard-course-title">
              How is a Computer?
            </p>
            <a href="#/Kanbas/Courses/104/Home"> Go </a>
          </div>
        </div>
        <div className="wd-dashboard-course">
          <img src="/images/a1-count.png" alt="Count Von Count the Muppet"width={200} />
          <div>
            <a className="wd-dashboard-course-link"
              href="#/Kanbas/Courses/105/Home">
              CS108 - Indexing
            </a>
            <p className="wd-dashboard-course-title">
              Pointers AH AH AH
            </p>
            <a href="#/Kanbas/Courses/105/Home"> Go </a>
          </div>
        </div>
        <div className="wd-dashboard-course">
          <img src="/images/a1-waldorf.png" alt="Waldorf and Statler try to computer"width={200} />
          <div>
            <a className="wd-dashboard-course-link"
              href="#/Kanbas/Courses/106/Home">
              CS105 - Computer Theory
            </a>
            <p className="wd-dashboard-course-title">
              Why is a Computer?</p>
            <a href="#/Kanbas/Courses/106/Home"> Go </a>
          </div>
        </div>
        <div className="wd-dashboard-course">
          <img src="/images/a1-fozzie.png" alt="Fozzie Bear the Muppet"width={200} />
          <div>
            <a className="wd-dashboard-course-link"
              href="#/Kanbas/Courses/107/Home">
              CS106 - Instructional Design
            </a>
            <p className="wd-dashboard-course-title">
              Wocka Wocka Wocka!
            </p>
            <a href="#/Kanbas/Courses/107/Home"> Go </a>
          </div>
        </div>
        <div className="wd-dashboard-course">
          <img src="/images/a1-animal.png" alt="Animal the Muppet" width={200} />
          <div>
            <a className="wd-dashboard-course-link"
              href="#/Kanbas/Courses/108/Home">
              CS107 - Server Housing
            </a>
            <p className="wd-dashboard-course-title">
              Where is Compu WOMAN!!
            </p>
            <a href="#/Kanbas/Courses/108/Home"> Go </a>
          </div>
          <div className="wd-dashboard-course">
            <img src="/images/a1-oscar.png" alt="Oscar the Muppet stares into mid-distance"width={200} />
            <div>
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/109/Home">
                CS107 - Object Lifecycle Management
              </a>
              <p className="wd-dashboard-course-title">
                Garbage Collection and Retention Policy
              </p>
              <a href="#/Kanbas/Courses/109/Home"> Go </a>
            </div>
          </div>
          <div className="wd-dashboard-course">
            <img src="/images/a1-drteeth.png" alt="Dr Teeth of Electric Mayhem the Muppet"width={200} />
            <div>
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/110/Home">
                CS106 - Fleet Orchestration
              </a>
              <p className="wd-dashboard-course-title">
                When is a Computer?
              </p>
              <a href="#/Kanbas/Courses/110/Home"> Go </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}