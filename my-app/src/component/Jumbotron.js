import homepageHero from '../images/homepage-hero.png';

const Jumbotron = () => {
    return(
        <div className="jumbotron">
            <div className="container">
                <div className="item">
                    <img src={homepageHero} alt="" />
                </div>
                <div className="item">
                    <h3>Bangun Karirmu Sebagai<br/>Developer Profesional</h3>
                    <p>Mulai Belajar terarah dengan online course</p>
                    <button type='submit' className='btn btn-primary'>Belajar Sekarang</button>
                </div>
                <div className="item">
                    <img src={homepageHero} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Jumbotron;