import { useState } from "react";
import "./OrderForm.css";
import { useNavigate } from "react-router-dom";

const OrderForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    isim: "Position Absolute Acı Pizza",
    fiyat: 85.5,
    puan: 4.9,
    yorumSayisi: 200,
    aciklama:
      "Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre.",
  });

  const [boyut, setBoyut] = useState("");
  const [hamur, setHamur] = useState("");
  const [malzemeler, setMalzemeler] = useState([]);
  const [adet, setAdet] = useState(1);

  const malzemeFiyat = 5; // Her malzeme için 5₺ ekleniyor.

  const handleMalzemeChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setMalzemeler([...malzemeler, value]);
    } else {
      setMalzemeler(malzemeler.filter((malzeme) => malzeme !== value));
    }
  };

  const toplamFiyat = (formData.fiyat + malzemeler.length * malzemeFiyat) * adet;

  const handleSubmit = (e)=> {
    e.preventDefault();
    navigate("/success")
  }
  return (
    <div className="order-form">
      <header>
        <h1>Teknolojik Yemekler</h1>
        <nav>
          <span>Anasayfa</span> - <span>Seçenekler</span> -
          <span className="active"> Sipariş Oluştur</span>
        </nav>
      </header>

      <section>
        <h2>{formData.isim}</h2>
        <div className="details">
          <h3>{formData.fiyat}₺</h3>
          <span>{formData.puan} </span>
          <span>({formData.yorumSayisi})</span>
        </div>
        <p className="description">{formData.aciklama}</p>

        <form onSubmit={handleSubmit}>
          <div className="first-section">
            <div className="size">
              <h4>Boyut Seç *</h4>
              {['Küçük', 'Orta', 'Büyük'].map((b) => (
                <label key={b}>
                  <input type="radio" name="boyut" value={b} onChange={(e) => setBoyut(e.target.value)} /> {b}
                </label>
              ))}
            </div>

            <div className="hamur">
              <h4>Hamur Seç *</h4>
              <select onChange={(e) => setHamur(e.target.value)}>
                <option value="">Hamur Kalınlığı</option>
                <option value="İnce">İnce</option>
                <option value="Klasik">Klasik</option>
                <option value="Kalın">Kalın</option>
              </select>
            </div>
          </div>

          <div className="malzemeler">
            <h4>Ek Malzemeler</h4>
            <p>En fazla 10 malzeme seçebilirsiniz. 5₺</p>
            {["Pepperoni", "Sosis", "Kanada Jambonu", "Tavuk", "Soğan", "Domates", "Mısır", "Jalapeno", "Ananas", "Sucuk"].map((malzeme) => (
              <label key={malzeme}>
                <input type="checkbox" value={malzeme} onChange={handleMalzemeChange} /> {malzeme}
              </label>
            ))}
          </div>

          <div className="siparis-notu">
            <h4>Sipariş Notu</h4>
            <textarea placeholder="Siparişe eklemek istediğiniz not var mı?"></textarea>
          </div>

          <div className="adet-secimi">
            <button type="button" onClick={() => setAdet(adet > 1 ? adet - 1 : 1)}>-</button>
            <span>{adet}</span>
            <button type="button" onClick={() => setAdet(adet + 1)}>+</button>
          </div>

          <div className="siparis-toplam">
            <h4>Sipariş Toplamı</h4>
            <p>Seçimler: {malzemeler.length * malzemeFiyat}₺</p>
            <h3>Toplam: {toplamFiyat.toFixed(2)}₺</h3>
          </div>

          <button type="submit" className="siparis-ver">SİPARİŞ VER</button>
        </form>
      </section>
    </div>
  );
};

export default OrderForm;