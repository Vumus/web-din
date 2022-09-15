import { React, useState, UseEffect, useEffect } from 'react';
import { Card, Row } from 'react-bootstrap';
import '../CSS_Folder/berita.css';
import { artikelNews } from '../apilink';

const News = () => {
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
        <h1 className='berita-header'>Berita Terkini</h1>
        {(DataNews != null) ? 
            <Row className='news-row'>
                {
                    DataNews && DataNews.map((item, index) => {
                    return (
                        <Card className='card-news'>
                            <a className='card-body' href={`/BeritaFull/${item.id}`}>
                                <Card.Img className='card-image' src={item.image_file_data} alt="" />
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Text>{item.intro}</Card.Text>
                            </a>
                        </Card>
                    )
                    })
                }
            </Row>: ''
        }
        </>
    );
};

export default News;