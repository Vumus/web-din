import { React, useState, useEffect } from 'react';
import { Card, Row } from 'react-bootstrap';
import { galeriImg } from '../../apilink';
import Beranda from '../../JS_Folder/beranda';
import Footer from '../../JS_Folder/footer';
import '../../CSS_Folder/galeri.css';

const GaleriFoto = () => {
    const [GaleriFoto, setGaleriFoto] = useState(null);
    useEffect(() => {
        getFoto();
        return () => {
            setGaleriFoto(null);
        };
    }, []);

    function getFoto() {
        const axios = require("axios");
        axios
            .get(galeriImg)
            .then(function(response) {
                setGaleriFoto(response.data.data.data);
            })
            .catch(function(error) {})
            .then(function() {});
    }

    return (
        <>
        {(GaleriFoto != null) ? 
                <Row className='Baris'>
                    <Beranda />
                    <h1 className='galeri-header-page'>Galeri Foto</h1>
                {
                    GaleriFoto && GaleriFoto.map((item, index) => {
                    return (
                        <a className='galeri-card' href={`/FotoFull/${item.slug}`}>
                            <Card.Body className='body-galeri-card'>
                                <Card.Img className='card-image' src={item.image_gallery_item[0].image_file_data} />
                                <Card.Title>{item.title}</Card.Title>
                            </Card.Body>
                        </a>
                    )
                    })
                }
                <Footer />
                </Row>: ''
        }
        </>
    );
};

export default GaleriFoto;