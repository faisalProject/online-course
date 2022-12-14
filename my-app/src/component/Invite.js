import { Link } from "react-router-dom";

const Invite = () => {
    return(
        <div className="invitation-contents">
            <div className="container">
                <h5>Tunggun apa lagi?</h5>
                <p>Belajar lebih terarah dengan Online Course</p>
                <Link to='/register' className='btn btn-primary'>Daftar</Link>
            </div>
        </div>
    )
}

export default Invite;