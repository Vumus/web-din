import { React, useState, useEffect } from "react";
import { Card, Row } from "react-bootstrap";
import { galeriVid } from "../../apilink";
import Beranda from "../../JS_Folder/beranda";
import Footer from "../../JS_Folder/footer";
import "../../CSS_Folder/galeri.css";

const GaleriVideo = () => {
  const [GaleriVideo, setGaleriVideo] = useState(null);
  useEffect(() => {
    getVideo();
    return () => {
      setGaleriVideo(null);
    };
  }, []);

  function getVideo() {
    const axios = require("axios");
    axios
      .get(galeriVid)
      .then(function (response) {
        setGaleriVideo(response.data.data.data);
      })
      .catch(function (error) {})
      .then(function () {});
  }
  return (
    <>
      {GaleriVideo != null ? (
        <Row className="Baris">
          <Beranda />
          <h1 className="galeri-header-page">Galeri Video</h1>
          {GaleriVideo &&
            GaleriVideo.map((item, index) => {
              return (
                <a className="galeri-card" href={`/VideoFull/${item.slug}`}>
                  <Card.Body className="body-galeri-card">
                    <Card.Img
                      className="card-image"
                      src={item.image_gallery_item[0].thumbnail_url}
                    />
                  </Card.Body>
                </a>
              );
            })}
          <Footer />
        </Row>
      ) : (
        ""
      )}
    </>
  );
};

export default GaleriVideo;
