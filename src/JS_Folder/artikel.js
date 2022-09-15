import { React, useState, useEffect } from "react";
import { Card, Row } from "react-bootstrap";
import "../CSS_Folder/artikel.css";
import { artikelMain } from "../apilink";

const Artikel = () => {
  const [DataArtikel, setDataArtikel] = useState(null);
  useEffect(() => {
    getArtikel();
    return () => {
      setDataArtikel(null);
    };
  }, []);

  function getArtikel() {
    const axios = require("axios");
    axios
      .get(artikelMain)
      .then(function (response) {
        setDataArtikel(response.data.data.data);
      })
      .catch(function (error) {})
      .then(function () {});
  }
  return (
    <>
      <h1 className="artikel-header">Artikel Terkini</h1>
      {DataArtikel != null ? (
        <Row className="artikel-row">
          {DataArtikel &&
            DataArtikel.map((item, index) => {
              return (
                <Card className="artikel-card">
                    <a className="card-body" href={`/ArtikelFull/${item.id}`}>
                      <Card.Img src={item.image_file_data} />
                      <Card.Title>{item.title}</Card.Title>
                      <Card.Text>{item.intro}</Card.Text>
                    </a>
                </Card>
              );
            })}
        </Row>
      ) : (
        ""
      )}
    </>
  );
};

export default Artikel;
