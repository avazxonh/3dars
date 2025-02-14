import React from "react";

export default function NotFound() {
  return (
    <div className="not-found-page">
      <div className="not-found-box">
        <h1 className="not-found-header">404</h1>
        <p className="not-found-subtitle">Not Found!</p>
        <p className="not-found-subtitle">Qidirgan sahifangiz topilmadi.</p>
        <a href="/" className="back-home-button">
          Bosh sahifaga qaytish
        </a>
      </div>
    </div>
  );
}
