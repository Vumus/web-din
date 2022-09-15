import {React, useState, useEffect} from 'react';
import {Card, Row, Container} from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';
import Beranda from '../../JS_Folder/beranda';
import Footer from '../../JS_Folder/footer';
import { dokumenFull } from '../../apilink';
import Iframe from 'react-iframe';
import '../../CSS_Folder/dokumen.css'

const DokumenFull = () => {
    const {slug} = useParams();
    const [FullDokumen, setFullDokumen] = useState(null);
    useEffect(() => {
        getFullDokumen();
        return () => {
            setFullDokumen(null);
        };
    }, []);

    function getFullDokumen() {
        const axios = require("axios");
        axios
            .get(dokumenFull + slug)
            .then(function(response) {
                setFullDokumen(response.data.data);
            })
            .catch(function(error) {})
            .then(function() {});
    }

    return (
        <>
            <Row className='dokumen-row'>
                <Beranda />
                {(FullDokumen != null) ?
                    <div className='dokumen-full-card'>
                        <article className='dokumen-full-title'>{FullDokumen[0].description_dokumen}</article>
                        <Iframe 
                            src={"data:application/pdf;base64," + FullDokumen[0].dokumen_file_data}
                            frameBorder="0"
                            scrolling='auto'
                            height="100%"
                            width="100%"
                            className='dokumen-full-page'
                        />
                    </div>
                : ' '}
                <Footer />
            </Row>
        </>
    )
}

export default DokumenFull;