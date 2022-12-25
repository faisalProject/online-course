import Swal from "sweetalert2";
import Sponsor from "../component/Sponsor";

const subscribeToAlerts = () => {
    Swal.fire({
        icon: 'warning',
        title: 'Oops...',
        text: 'Anda harus masuk terlebih dahulu',
        confirmButtonColor: '#2D3E50',
      })
}

const SubscriptionFeesPage = () => {
    return(
        <div className="SubscriptionFeesPage-contents">
            <div className="container">
                <h3>Biaya & Benefit Langganan</h3>
                <p>Pilih paket langganan sebagai investasi belajar yang sesuai dengan kebutuhan Anda.</p>
            </div>
            <div className="container">
                <div className="card">
                    <div className="item">
                        <p>Langganan 1 bulan (30 hari)</p>
                    </div>
                    <div className="item">
                        <h5>Rp 1,500,000</h5>
                        <button type="submit" className="btn btn-primary" onClick={subscribeToAlerts}>Pilih paket</button>
                    </div>
                </div>
                <div className="card">
                    <div className="item">
                        <p>Langganan 2 bulan (60 hari)</p>
                    </div>
                    <div className="item">
                        <h5>Rp 2,500,000</h5>
                        <button type="submit" className="btn btn-primary" onClick={subscribeToAlerts}>Pilih paket</button>
                    </div>
                </div>
                <div className="card">
                    <div className="item">
                        <p>Langganan 3 bulan (90 hari)</p>
                    </div>
                    <div className="item">
                        <h5>Rp 3,500,000</h5>
                        <button type="submit" className="btn btn-primary" onClick={subscribeToAlerts}>Pilih paket</button>
                    </div>
                </div>
                <div className="card">
                    <div className="item">
                        <p>Langganan 4 bulan (120 hari)</p>
                    </div>
                    <div className="item">
                        <h5>Rp 5,000,000</h5>
                        <button type="submit" className="btn btn-primary" onClick={subscribeToAlerts}>Pilih paket</button>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="sponsors-title">
                    <h5>Telah dipercayai Oleh</h5>
                </div>
                <Sponsor />
            </div>
        </div>
    )
}

export default SubscriptionFeesPage;