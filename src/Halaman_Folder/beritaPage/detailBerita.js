import {React, useState, useEffect} from 'react';
import {Card, Row} from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Beranda from '../../JS_Folder/beranda';
import Footer from '../../JS_Folder/footer';
import { newsDetail } from '../../apilink';

const BeritaFull = () => {
    const {id} = useParams();
    const [FullBerita, setFullBerita] = useState([]);
    useEffect(() => {
        getFullBerita();
        return () => {
            setFullBerita(null);
        };
    }, []);

    function getFullBerita() {
        const axios = require("axios");
        axios
            .get(newsDetail + id)
            .then(function(response) {
                setFullBerita(response.data.data);
            })
            .catch(function(error) {})
            .then(function() {});
    }

    return (
        <>
            <Row className='berita-row'>
                <Beranda />
                <div>
                    <Card className='berita-card-full'>
                        <Card.Title className='berita-header'>{FullBerita.title}</Card.Title>
                        <Card.Img className='berita-card-image-det' src={FullBerita.image_file_data} />
                        <Card.Text className='berita-card-text'>{FullBerita.content}</Card.Text>
                    </Card>
                </div>
                <Footer />
            </Row>
        </>
    )
}

export default BeritaFull;