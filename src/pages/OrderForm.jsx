import { useState } from "react";
import "./OrderForm.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const OrderForm = () => {
  const navigate = useNavigate(); 
  const [formData, setFormData] = useState({
    isim: "Position Absolute Acı Pizza",
    fiyat: 85.5,
    puan: 4.9,
    yorumSayisi: 200,
    aciklama:
      "Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre.Pizza,domates peynir ve genellikle çeşitli diğer malzemelerle kaplanmış,daha sonra geleneksel larak odun ateşinde ir fırında yüksek sıcaklıkta pişirilen,genellikle yuvarlak,düzleştirilmiş mayalı buğday bazlı hamurdan luşan İtalyan kökenli lezzetli bir yemektir..Küçük bir pizzaya bazen pizzetta denir.",
  });
  
  const [kullaniciIsim, setKullaniciIsim] = useState("");
  const [boyut, setBoyut] = useState("");
  const [hamur, setHamur] = useState("");
  const [malzemeler, setMalzemeler] = useState([]);
  const [adet, setAdet] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);



  const malzemeFiyat = 5; // Her malzeme için 5₺ ekleniyor.

  const handleMalzemeChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      if (malzemeler.length < 10) {
        setMalzemeler([...malzemeler, value]);
      } else {
        alert("En fazla 10 malzeme seçebilirsiniz.");
      }
    } else {
      setMalzemeler(malzemeler.filter((malzeme) => malzeme !== value));
    }
  };

  const toplamFiyat = (formData.fiyat + malzemeler.length * malzemeFiyat) * adet;
   const formGecerli =
    kullaniciIsim.trim().length >= 3 &&
    boyut !== "" &&
    hamur !== "" &&
    malzemeler.length >= 4 &&
    malzemeler.length <= 10;


   

    const handleSubmit = (e) => {
      e.preventDefault();
      if (!formGecerli) return;
    
      setIsSubmitting(true);
    
      axios
        .post("https://reqres.in/api/pizza", {
          isim: kullaniciIsim,
          boyut,
          hamur,
          malzemeler,
          adet,
          toplamFiyat,
        })
        .then((response) => {
          console.log("Sipariş Özeti:", response.data);
          navigate("/success")
        })
        .catch((error) => {
          console.error(" Hata oluştu:", error);
        })
        .finally(() => {
          setIsSubmitting(false); 
        });
    };
    
  
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

        <form  onSubmit={handleSubmit}>
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
            {["Pepperoni", "Sosis", "Kanada Jambonu", "Tavuk", "Soğan", "Domates", "Mısır", "Jalapeno","Brokoli", "Ananas", "Sucuk"].map((malzeme) => (
              <label key={malzeme}>
                <input type="checkbox" value={malzeme} onChange={handleMalzemeChange} /> {malzeme}
              </label>
            ))}
            {malzemeler.length < 4 && <p style={{ color: "red" }}>En az 4 adet malzeme seçmelisiniz.</p>}
          </div>
          <div className="isim-input">
            <h4>İsim *</h4>
            <input
              type="text"
              placeholder="Adınızı giriniz (En az 3 karakter)"
              value={kullaniciIsim}
              onChange={(e) => setKullaniciIsim(e.target.value)}
            />
          </div>
          <div className="secimler-liste">
            <h4>Seçimler:</h4>
            {malzemeler.length === 0 ? (
              <p>Henüz malzeme seçilmedi.</p>
            ) : (
              <ul>
                {malzemeler.map((item, index) => (
                  <li key={index}> {item}</li>
                ))}
              </ul>
            )}
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
          <button type="submit" className="siparis-ver" disabled={!formGecerli || isSubmitting}>
            {isSubmitting ? "Gönderiliyor..." : "SİPARİŞ VER"}
         </button>
        </form>
      </section>
    </div>
  );
};

export default OrderForm;