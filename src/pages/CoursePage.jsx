import { NavBar } from "../components/NavBar"


export const CoursePage = () => {
    return (
        <>
        <NavBar />
            <h1>Courses</h1>
            <div className="scrollCourses">
                <li>
                    Starting up
                </li>
                <li>
                    Beginner python
                </li>
                <li>
                    Advanced python
                </li>
                <li>
                    Fullstack p0-7
                </li>
                <li>
                    Git and GitHub
                </li>
            </div>
        </>
    )
}