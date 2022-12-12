import { Link } from "react-router-dom";

const Footer = () => {
    return(
        <footer>
            <div className="container">
                <div className="item">
                    <h5>INFO</h5>
                    <Link to='/' className="anchor">website Online Course</Link>
                    <Link to='/' className="anchor">portal Online Course</Link>
                    <Link to='/' className="anchor">repisitory Online Course</Link>
                    <Link to='/' className="anchor">digilib Online Course</Link>
                </div>
                <div className="item">
                    <h5>CONTACT US</h5>
                    <Link to='/' className="anchor">
                        <i className="bi bi-telephone-fill"></i>
                        <p>Phone : (0267) 8403166</p>
                    </Link>
                    <Link to='/' className="anchor">
                        <i className="bi bi-envelope-fill"></i>
                        <p>Email : online@couese.ac.id</p>
                    </Link>
                </div>
                <div className="item">
                    <h5>GET SOCIAL</h5>
                    <div className="box">
                        <Link to='/' className="anchor"><i className="bi bi-facebook"></i></Link>
                        <Link to='/' className="anchor"><i className="bi bi-twitter"></i></Link>
                        <Link to='/' className="anchor"><i className="bi bi-pinterest"></i></Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;