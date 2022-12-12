import Jumbotron from "../component/Jumbotron";
import CourseList from "../component/CourseList";
import CourseLevel from "../component/CourseLevel";
import Sponsor from "../component/Sponsor";
import Invite from "../component/Invite";

const Home = () => {
    return(
        <>
            <Jumbotron />
            <div className="landing-page-contents">
                <div className="container">
                    <div className="item">
                        <h5>Telah dipercayai Oleh</h5>
                    </div>
                    <Sponsor />
                    <CourseList />
                    <CourseLevel />
                </div>
            </div>
            <Invite />
        </>
    )
}


export default Home;