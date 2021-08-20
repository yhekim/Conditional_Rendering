import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [girisYapildi, setGirisYapildi] = useState(false);
  const [isim, setIsim] = useState("");
  const [hataMesaji, setHataMesaji] = useState("");
  const handleChange = (e) => setIsim(e.target.value);
  const handleSubmit = (isim) => {
    if (isim.length < 5) {
      setHataMesaji("Kullanıcı ismi en az 5 harf olmalıdır");
    } else {
      setHataMesaji("");
      setGirisYapildi(!girisYapildi);
    }
  };
  return (
    <div className="App">
      <h1>React Dersleri</h1>
      {girisYapildi && <p>Giriş Başarılı :) </p>}
      {/* {girisYapildi || <p>Çıkış Başarılı :) </p>} */}
      {girisYapildi ? (
        <React.Fragment>
          <h2>Hoşgeldiniz , {isim}</h2>
          <button onClick={() => setGirisYapildi(!girisYapildi)}>Çıkış</button>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <input
            name="isim"
            placeholder="İsminiz"
            value={isim}
            onChange={handleChange}
          />
          <button
            onClick={() => {
              handleSubmit(isim);
            }}
          >
            Giriş
          </button>
          <br />
          <br />
          {hataMesaji ? <h4>{hataMesaji}</h4> : <h2>Giriş Yapınız </h2>}
        </React.Fragment>
      )}
    </div>
  );
}
