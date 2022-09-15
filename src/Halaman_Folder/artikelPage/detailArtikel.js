import {React, useState, useEffect} from 'react';
import {Card, Row} from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Beranda from '../../JS_Folder/beranda';
import Footer from '../../JS_Folder/footer';
import { artikelDetail } from '../../apilink';
import '../../CSS_Folder/artikel.css'

const ArtikelFull = () => {
    const {id} = useParams();
    const [FullArtikel, setFullArtikel] = useState([]);
    useEffect(() => {
        getFullArtikel();
        return () => {
            setFullArtikel(null);
        };
    }, []);

    function getFullArtikel() {
        const axios = require("axios");
        axios
            .get(artikelDetail + id)
            .then(function(response) {
                setFullArtikel(response.data.data);
            })
            .catch(function(error) {})
            .then(function() {});
    }

    return (
        <>
            <Row className='artikel-row-full'>
                <Beranda />
                <Card className='artikel-card-full'>
                    <Card.Title className='artikel-header'>{FullArtikel.title}</Card.Title>
                    <Card.Img className='artikel-card-image-det' src={FullArtikel.image_file_data} />
                    <Card.Text className='artikel-card-text'>{FullArtikel.content}</Card.Text>
                </Card>
                <Footer />
            </Row>
        </>
    )
}

export default ArtikelFull;