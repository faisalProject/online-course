import Swal from "sweetalert2";
const tokenActivationButton = () => {
    Swal.fire({
        icon: 'warning',
        title: 'Oops...',
        text: 'Anda harus masuk terlebih dahulu',
        confirmButtonColor: '#2D3E50',
      })
}

const TokenActivationPage = () => {
    return(
        <div className="TokenActivationPage-contents">
            <div className="container">
                <div className="item">
                    <div className="item-child">
                        <h3>Aktivasi Token</h3>
                        <p>Anda punya kode token dari pembelian di e-commerce atau program beasiswa? Silahkan aktifkan token tersebut pada kolom di bawah untuk mulai belajar.</p>
                    </div>
                </div>
                <div className="item">
                    <div className="item-child">
                        <input type="text" className="form-control" placeholder="Masukkan Token" />
                        <button type="submit" className="btn btn-primary token-activation-button" onClick={tokenActivationButton}>Aktivasi Token</button>
                    </div>
                    <div className="item-child">
                        <p>Kelas yang teraktivasi akan sesuai dengan token masing-masing (token beasiswa, voucher fisik kelas satuan dari e-commerce, voucher fisik langganan dari e-commerce, dsb)</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TokenActivationPage;