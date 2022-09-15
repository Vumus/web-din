import {React, useState, useEffect} from 'react';
import {Card, Row} from 'react-bootstrap';
import { useParams} from 'react-router-dom';
import Beranda from '../../JS_Folder/beranda';
import Footer from '../../JS_Folder/footer';
import { fotoFull } from '../../apilink';
import '../../CSS_Folder/galeri.css'

const FotoFull = () => {
    const {slug} = useParams();
    const [FullFoto, setFullFoto] = useState(null);
    useEffect(() => {
        getFullFoto();
        return () => {
            setFullFoto(null);
        };
    }, []);

    function getFullFoto() {
        const axios = require("axios");
        axios
            .get(fotoFull + slug)
            .then(function(response) {
                setFullFoto(response.data.data);
            })
            .catch(function(error) {})
            .then(function() {});
    }

    return (
        <>
        {(FullFoto != null) ?
            <Row className='foto-row-full'>
                <Beranda />
                    <Card className='foto-card-full'>
                        <Card.Img className='card-image' src={FullFoto[0].image_file_data} />
                    </Card>
                <Footer />
            </Row>: ' '
            }
        </>
    )
}

export default FotoFull;