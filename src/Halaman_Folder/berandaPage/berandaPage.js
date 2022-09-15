import "./berandaPage.css";
import React from "react";
import Beranda from "../../JS_Folder/beranda";
import Slider from "../../JS_Folder/slider";
import News from "../../JS_Folder/berita";
import Galeri from "../../JS_Folder/galeriFoto";
import Artikel from "../../JS_Folder/artikel";
import Footer from "../../JS_Folder/footer";
import Dokumen from "../../JS_Folder/dokumen";

const BerandaPage = () => {
  return (
    <>
      <Beranda />
      <Slider />
      <div className="main-container">
        <div className="flexbox-container">
          <div className="flexbox-items item1 doc">
              <Dokumen />
          </div>
          <div className="flexbox-items item2">
              <News />
          </div>
        </div>
          <div>
              <Galeri />
          </div>
        <div className="flexbox-container">
          <div className="flexbox-items item2">
              <Artikel />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BerandaPage;