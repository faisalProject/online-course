import { Link } from "react-router-dom";
import goggle from '../images/google.png';

const show = () => {
    document.getElementsByClassName('show-3')[0].classList.toggle('active');
    const x = document.getElementById('pass-2');
    if(x.type === 'password') {
        x.type = 'text'
    } else {
        x.type = 'password'
    }
}

const Signin = () => {
    return(
        <div className="signin-contents">
            <div className="container">
                <div className="signin">
                    <div className="top">
                        <h5>Masuk</h5>
                    </div>
                    <form>
                        <input type="email" className="form-control" placeholder="email" />
                        <div className="password-container">
                            <input type="password" className="form-control" id="pass-2" placeholder="password" />
                            <div className="show-3" onClick={show}>
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
                            <span>Belum mempunyai akun? <Link to='/register' className="anchor">Daftar</Link></span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signin;