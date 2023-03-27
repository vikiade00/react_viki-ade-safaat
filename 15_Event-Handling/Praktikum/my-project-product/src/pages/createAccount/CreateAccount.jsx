import React from "react";
import "./createAccount.css";
import logoBoostrap from "../../assets/Bootstrap_logo.svg.png";
const article = {
  title: {
    id: "Buat Akun",
    en: "Create Account",
  },
  description: {
    id: "Di bawah ini adalah contoh formulir yang dibuat seluruhnya dengan kontrol formulir Bootstrap. Setiap grup formulir yang diperlukan memiliki status validasi yang dapat dipicu dengan mencoba mengirimkan formulir tanpa menyelesaikannya.",
    en: "Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.",
  },
};
export default function CreateAccount() {
  return (
    <div>
      <div className="container">
        <img src={logoBoostrap} alt="Logo Boostrap" width={50} className="image-brand" />
        <h3>{article.title.en}</h3>
        <p>{article.description.en}</p>
      </div>
    </div>
  );
}
