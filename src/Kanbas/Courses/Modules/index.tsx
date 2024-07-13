export default function Modules() {
    return (
        <div>
            <button id="wd-collapse-all" type="button">Collapse All </button> 
            <button id="wd-view-progress" type="button">View Progress </button>
             <select id="wd-publish">
                <option selected value="Publish All">
                    Publish All</option>
                <option value="THIS">Publish This</option>
                <option value="THAT">Publish That</option>
                <option value="OTHER">Something Else</option>
            </select>
             <button id="wd-add-module" type="button">+ Add Module</button>

            <ul id="wd-modules">
                <li className="wd-module">
                    <div className="wd-title">Week 1</div>
                    <ul className="wd-lessons">
                        <li className="wd-lesson">
                            <span className="wd-title">LEARNING OBJECTIVES</span>
                            <ul className="wd-content">
                                <li className="wd-content-item">Introduction to the course</li>
                                <li className="wd-content-item">Learn what is Web Development</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li className="wd-module">
                    <div className="wd-title">Week 2</div>
                    <ul className="wd-lessons">
                        <li className="wd-lesson">
                            <span className="wd-title">LEARNING OBJECTIVES</span>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}
