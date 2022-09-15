import {React, useEffect, useState} from 'react';
import {Row, Card} from "react-bootstrap";
import { artikelNews } from '../../apilink';
import Beranda from '../../JS_Folder/beranda';
import Footer from '../../JS_Folder/footer';

const BeritaPage = () => {
    const [DataNews, setDataNews] = useState(null);
    useEffect(() => {
        getNews();
        return () => {
            setDataNews(null);
        };
    }, []);

    function getNews() {
        const axios = require("axios");
        axios
            .get(artikelNews)
            .then(function(response) {
                setDataNews(response.data.data.data);
            })
            .catch(function(error) {})
            .then(function() {});
    }
    return (
        <>
        {(DataNews != null) ? 
            <Row className='news-row'>
                <Beranda />
                <h1 className='berita-header'>Berita</h1>
                {
                    DataNews && DataNews.map((item, index) => {
                    return (
                        <a className='card-news' href={`/BeritaFull/${item.id}`}>
                            <Card.Body className='card-body'>
                                <Card.Img className='card-image' src={item.image_file_data} alt="" />
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Text>{item.intro}</Card.Text>
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

export default BeritaPage;