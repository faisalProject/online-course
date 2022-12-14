import { Link } from "react-router-dom";
import goggle from '../images/google.png';

const show = () => {
    document.getElementsByClassName('show-2')[0].classList.toggle('active');
    const x = document.getElementsByClassName('password-type')[0];

    if(x.type === 'password') {
        x.type = 'text'
    } else {
        x.type = 'password'
    }
}

const siginPopup = () => {
    document.getElementsByClassName('signin-popup-contents')[0].classList.add('active');
    document.querySelector('body').classList.add('active');
}

const Register = () => {
    return(
        <div className="register-contents">
            <div className="container">
                <div className="register">
                    <div className="top">
                        <h5>Daftar</h5>
                    </div>
                    <form>
                        <input type="text" className="form-control" placeholder="nama lengkap" /> 
                        <input type="email" className="form-control" placeholder="email" />
                        <div className="password-container">
                            <input type="password" className="form-control password-type" placeholder="password" />
                            <div className="show-2" onClick={show}>
                                <i className="bi bi-eye-slash"></i>
                                <i className="bi bi-eye"></i>
                            </div>
                        </div>
                        <div className="desc">
                            <p>Gunakan minimal 8 karakter dengan kombinasi huruf dan angka</p>
                        </div>
                        <button type="submit" className="btn btn-primary">Daftar</button>
                        <div className="or">
                            <span></span>
                            atau
                            <span></span>
                        </div>
                        <Link to='/' className="google">
                            <img src={goggle} alt="" />
                            <h5>Masuk dengan Google</h5>
                        </Link>
                        <div className="signin-container">
                            <span>Sudah mempunyai akun? <span className="anchor" onClick={siginPopup}>Masuk</span></span>
                            <span>Sudah mempunyai akun? <Link to='/signin' className="anchor">Masuk</Link></span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register;