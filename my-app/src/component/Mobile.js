import { Link } from "react-router-dom";

const dropdownMobile = () => {
    document.getElementsByClassName('a-2')[0].classList.toggle('active');
    document.getElementsByClassName('menu-container')[0].classList.toggle('active')
}

const Mobile = () => {
    return(
        <div className="mobile">
            <div className="container">
                <div className="button-container">
                    <button type="submit" className="btn btn-primary">Masuk</button>
                    <button type="submit" className="btn btn-primary">Daftar</button>
                </div>
                <Link to="/" className="anchor">Kursus</Link>
                <div className="a-2" onClick={dropdownMobile}>
                    <div className="a-3">
                        <span className="anchor">Langganan</span>
                        <div className="dropdown">
                            <i className="bi bi-caret-down-fill"></i>
                        </div>
                    </div>
                    <ul className="menu-container">
                        <li>
                            <Link to="/" className="anchor">
                                <i className="bi bi-credit-card-2-back"></i>
                                Biaya Langganan 
                            </Link>
                        </li>
                        <li>
                             <Link to="/" className="anchor">
                                <i className="bi bi-credit-card-2-front"></i>
                                Aktivasi Token
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Mobile;