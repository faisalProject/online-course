import homepageHero from '../images/homepage-hero.png';

const pageScroll = (e) => {
    const scroll = document.getElementsByClassName('page-scroll')[0];
    const href = scroll.getAttribute('href');
    const hrefElement = document.querySelector(href);
    const offset = hrefElement.offsetTop - 70;
    document.querySelector('html', 'body').scrollTop = offset;
    e.preventDefault()
}

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
                    <a href='#course' className='btn btn-primary page-scroll' onClick={pageScroll}>Belajar Sekarang</a>
                </div>
                <div className="item">
                    <img src={homepageHero} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Jumbotron;