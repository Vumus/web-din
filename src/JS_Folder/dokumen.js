import { React, useState, UseEffect, useEffect } from 'react';
import {Row, Card} from 'react-bootstrap';
import Box from '@mui/material/Box';
import '../CSS_Folder/dokumen.css';
import { dokumenList } from '../apilink';
import axios from 'axios';

const Dokumen = () => {
    const [DataDokumen, setDataDokumen] = useState(null);
    useEffect(() => {
        getDokumen();
        return () => {
            setDataDokumen(null);
        };
    }, []);

    function getDokumen() {
        axios
            .get(dokumenList)
            .then(function(response) {
                setDataDokumen(response.data.data.data);
            })
            .catch(function(error) {})
            .then(function() {});
    }

    return (
        <>
        {(DataDokumen != null) ? 
            <Box className='dokumen-bg'>
                <Row className='news-row'>
                <h1 className='dokumen-header'>Dokumen Terkini</h1>
                    {
                        DataDokumen && DataDokumen.map((item, index) => {
                        return (
                            <a className='dokumen-card' href={`/DokumenFull/${item.slug}`}>
                                <Card.Body className='card-body'>
                                    <Card.Title>{item.dokumen_item[0].dokumen_file_name}</Card.Title>
                                    <Card.Text>{item.dokumen_item[0].description_dokumen}</Card.Text>
                                </Card.Body>
                            </a>
                        )
                        })
                    }
                </Row>
            </Box>: ''
        }
        </>
    );
};

export default Dokumen;