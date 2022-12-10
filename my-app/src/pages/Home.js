import Jumbotron from "../component/Jumbotron";
import google from '../images/homepage-partner-google.png';
import microsoft from '../images/homepage-partner-microsoft.png';
import aws from '../images/homepage-partner-aws.png';
import ibm from '../images/homepage-partner-ibm.png';
import indosat from '../images/homepage-partner-indosat-ooredoo-hutchison.png';
import kemenparekraf from '../images/homepage-partner-kemenparekraf.png';
import lintasarta from '../images/homepage-partner-lintasarta-new.png';
import line from '../images/homepage-partner-line.png';
import alcatel from '../images/homepage-partner-alcatel.png';
import samsung from '../images/homepage-partner-samsung.png';
import ericsson from '../images/homepage-partner-ericsson.png';
import telkomtelstra from '../images/homepage-partner-telkomtelstra.png';
import lenovo from '../images/homepage-partner-lenovo.png';
import intel from '../images/homepage-partner-intel.png';
import android from '../images/homepage-lp-android-developer-3.jpg';
import backend from '../images/homepage-lp-back-end-developer-2.jpg';
import frontend from '../images/homepage-lp-front-end-web-developer-2.jpg';
import ios from '../images/homepage-lp-ios-developer-2.jpg';
import ml from '../images/homepage-lp-machine-learning-developer-2.jpg';
import person1 from '../images/1.jpg';
import Swal from 'sweetalert2'

// const btnPrev = () => {
//     document.getElementsByClassName('first')[0].classList.add('left');
// }

// const btnNext = () => {
//     document.getElementsByClassName('first')[0].classList.add('right');
// }
const popup = () => {
    Swal.fire({
        icon: 'warning',
        title: 'Oops...',
        text: 'Anda harus login terlebih dahulu!',
        footer: "<Link to='/'>Login</Link>"
    })
}

const Home = () => {
    return(
        <>
            <Jumbotron />
            <div className="landing-page-contents">
                <div className="container">
                    <div className="item">
                        <h5>Telah dipercayai Oleh</h5>
                    </div>
                    <div className="item">
                        <div className="card">
                            <img src={google} alt="" />
                        </div>
                        <div className="card">
                            <img src={microsoft} alt="" />
                        </div>
                        <div className="card">
                            <img src={aws} alt="" />
                        </div>
                        <div className="card">
                            <img src={ibm} alt="" />
                        </div>
                        <div className="card">
                            <img src={indosat} alt="" />
                        </div>
                        <div className="card">
                            <img src={kemenparekraf} alt="" />
                        </div>
                        <div className="card">
                            <img src={lintasarta} alt="" />
                        </div>
                        <div className="card">
                            <img src={line} alt="" />
                        </div>
                        <div className="card">
                            <img src={alcatel} alt="" />
                        </div>
                        <div className="card">
                            <img src={samsung} alt="" />
                        </div>
                        <div className="card">
                            <img src={ericsson} alt="" />
                        </div>
                        <div className="card">
                            <img src={telkomtelstra} alt="" />
                        </div>
                        <div className="card">
                            <img src={lenovo} alt="" />
                        </div>
                        <div className="card">
                            <img src={intel} alt="" />
                        </div>
                    </div>
                    <div className="item">
                        <button className="btn-prev">
                            <i className="bi bi-caret-left"></i>
                        </button>
                        <button className="btn-next">
                            <i className="bi bi-caret-right"></i>
                        </button>
                    </div>
                    <div className="item">
                        <img className="first" src={android} alt="" />
                        <img src={backend} alt="" />
                        <img src={frontend} alt="" />
                        <img src={ios} alt="" />
                        <img src={ml} alt="" />
                    </div>
                    <div className="item">
                        <h5>Frontend Web Developer</h5>
                        <hr/>
                    </div>
                    <div className="item">
                        <button className="btn-prev">
                            <i className="bi bi-caret-left"></i>
                        </button>
                        <button className="btn-next">
                            <i className="bi bi-caret-right"></i>
                        </button>
                    </div>
                    <div className="item">
                        <div className="card-2">
                            <img src={person1} alt="" />
                            <div className="desc">
                                <div className="line">
                                    <i className="bi bi-bar-chart-line-fill"></i>
                                    Langkah 1
                                </div>
                                <div className="line">
                                    <h5>Belajar Dasar Pemrograman Web</h5>
                                </div>
                                <div className="line">
                                    <i className="bi bi-star-fill"></i>
                                    4.6
                                </div>
                                <div className="line">
                                    <i className="bi bi-award-fill"></i> 
                                    Level Dasar - Pemula
                                </div>
                                <button type="submit" className="btn btn-primary" onClick={popup}>Selengkapnya</button>
                            </div>
                        </div>
                        <div className="card-2">
                            <img src={person1} alt="" />
                            <div className="desc">
                                <div className="line">
                                    <i className="bi bi-bar-chart-line-fill"></i>
                                    Langkah 2
                                </div>
                                <div className="line">
                                    <h5>Belajar Web Frontend untuk Pemula</h5>
                                </div>
                                <div className="line">
                                    <i className="bi bi-star-fill"></i>
                                    4.6
                                </div>
                                <div className="line">
                                    <i className="bi bi-award-fill"></i>
                                    Level Pemula
                                </div>
                                <button type="submit" className="btn btn-primary" onClick={popup}>Selengkapnya</button>
                            </div>
                        </div>
                        <div className="card-2">
                            <img src={person1} alt="" />
                            <div className="desc">
                                <div className="line">
                                    <i className="bi bi-bar-chart-line-fill"></i>
                                    Langkah 3
                                </div>
                                <div className="line">
                                    <h5>Belajar Fundamental Frontend Web Developer</h5>
                                </div>
                                <div className="line">
                                    <i className="bi bi-star-fill"></i>
                                    4.6
                                </div>
                                <div className="line">
                                    <i className="bi bi-award-fill"></i>
                                    Level Pemula Menengah
                                </div>
                                <button type="submit" className="btn btn-primary" onClick={popup}>Selengkapnya</button>
                            </div>
                        </div>
                        <div className="card-2">
                            <img src={person1} alt="" />
                            <div className="desc">
                                <div className="line">
                                    <i className="bi bi-bar-chart-line-fill"></i>
                                    Langkah 4
                                </div>
                                <div className="line">
                                    <h5>Belajar Frontend Web Developer Menengah</h5>
                                </div>
                                <div className="line">
                                    <i className="bi bi-star-fill"></i>
                                    4.6
                                </div>
                                <div className="line">
                                    <i className="bi bi-award-fill"></i>
                                    Level Menengah
                                </div>
                                <button type="submit" className="btn btn-primary" onClick={popup}>Selengkapnya</button>
                            </div>
                        </div>
                        <div className="card-2">
                            <img src={person1} alt="" />
                            <div className="desc">
                                <div className="line">
                                    <i className="bi bi-bar-chart-line-fill"></i>
                                    Langkah 5
                                </div>
                                <div className="line">
                                    <h5>Belajar Frontend Web Developer Expert</h5>
                                </div>
                                <div className="line">
                                    <i className="bi bi-star-fill"></i>
                                    4.6
                                </div>
                                <div className="line">
                                    <i className="bi bi-award-fill"></i>
                                    Level Mahir - Profesional
                                </div>
                                <button type="submit" className="btn btn-primary" onClick={popup}>Selengkapnya</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;