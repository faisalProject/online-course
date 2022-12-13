import { Link } from "react-router-dom";
import goggle from '../images/google.png';

const closePopup = () => {
    document.getElementsByClassName('signin-popup-contents')[0].classList.remove('active');
    document.querySelector('body').classList.remove('active');
}

const show = () => {
    document.getElementsByClassName('show')[0].classList.toggle('active');
    const x = document.getElementById('pass');
    if(x.type === 'password') {
        x.type = 'text'
    } else {
        x.type = 'password'
    }
}

const SigninPopup = () => {
    return(
        <div className="signin-popup-contents">
            <div className="signin-container">
                <div className="top">
                    <h5>Masuk</h5>
                    <div className="close" onClick={closePopup}>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <form>
                    <input type="text" className="form-control" placeholder="email" />
                    <div className="password-container">
                        <input type="password" className="form-control" placeholder="password" id="pass"/>
                        <div className="show" onClick={show}>
                            <i className="bi bi-eye-slash"></i>
                            <i className="bi bi-eye"></i>
                        </div>
                    </div>
                    <div className="forget-password">
                        <Link to='/' className="anchor">Lupa Password?</Link>
                    </div>
                    <button type="submit" className="btn btn-primary">Masuk</button>
                    <div className="or">
                        <span></span>
                        atau
                        <span></span>
                    </div>
                    <Link to='/' className="google">
                        <img src={goggle} alt="" />
                        <h5>Masuk dengan Google</h5>
                    </Link>
                    <div className="register-container">
                        <span>Sudah mempunyai akun? <Link to='/' className="anchor">Daftar</Link></span>
                    </div>
                </form>
            </div>
        </div>
        
    )
}


export default SigninPopup;