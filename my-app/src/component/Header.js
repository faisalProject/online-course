import { Link } from "react-router-dom";

const theme = () => {
    document.getElementsByClassName('circle')[0].classList.toggle('active');
}

const mobileNav = () => {
    document.getElementsByClassName('mobile')[0].classList.toggle('active');
}

const siginPopup = () => {
    document.getElementsByClassName('signin-popup-contents')[0].classList.add('active');
    document.querySelector('body').classList.add('active');
}

const pageScroll = (e) => {
    const scroll = document.getElementsByClassName('page-scroll')[0];
    const href = scroll.getAttribute('href');
    const hrefElement = document.querySelector(href);
    const offset = hrefElement.offsetTop - 70;
    document.querySelector('html', 'body').scrollTop = offset;
    e.preventDefault()
}

const Header = () => {
    return (
        <nav>
            <div className="container">
                <div className="nav-left">
                    <Link to="/" className="anchor">Beranda</Link>
                    <a href="#course" className="anchor page-scroll" onClick={pageScroll}>Kursus</a>
                    <div className="a-1">
                        <span className="anchor">Langganan</span>
                        <ul className="dropdown">
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
                <div className="nav-right">
                    <div className="button-container">
                        <button type="submit" className="btn btn-primary signin-button" onClick={siginPopup}>Masuk</button>
                        <Link to='/register' className='btn btn-primary'>Daftar</Link>
                    </div>
                    <div className="theme-container">
                        <div className="circle" onClick={theme}>
                            <i className="bi bi-brightness-high"></i>   
                            <i className="bi bi-moon-stars"></i>
                        </div> 
                    </div>
                    <div className="hamburger" onClick={mobileNav}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </nav>

    )
}

export default Header;