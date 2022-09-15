import { React, useState, useEffect } from 'react';
import { Card, Row } from 'react-bootstrap';
import { Box } from '@mui/material';
import { galeriImg } from '../apilink';
import '../CSS_Folder/galeri.css';
import axios from 'axios';

const Galeri = () => {
    const [DataGaleri, setDataGaleri] = useState(null);
    useEffect(() => {
        getFoto();
        return () => {
            setDataGaleri(null);
        };
    }, []);

    function getFoto() {
        axios
            .get(galeriImg)
            .then(function(response) {
                setDataGaleri(response.data.data.data);
            })
            .catch(function(error) {})
            .then(function() {});
        }
    
    return (
        <>
        {(DataGaleri != null) ? 
            <Box className='galeri-bg'>
                <Row className='galeri-full-bg'>
                <h1 className='galeri-header'>Galeri</h1>
                {
                    DataGaleri && DataGaleri.map((item, index) => {
                    return (
                        <Card className='galeri-card'>
                            <Card.Body className='body-galeri-card' href={`/FotoFull/${item.slug}`}>
                                <Card.Img className='card-image' src={item.image_gallery_item[0].image_file_data} />
                                <Card.Title>{item.title}</Card.Title>
                            </Card.Body>
                        </Card>
                    )
                    })
                }
                </Row>
            </Box>: ''
        }
        </>
    );
};

export default Galeri;
