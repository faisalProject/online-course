const show = () => {
    document.getElementsByClassName('show-2')[0].classList.toggle('active');
    const x = document.getElementsByClassName('password-type')[0];

    if(x.type === 'password') {
        x.type = 'text'
    } else {
        x.type = 'password'
    }
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
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register;