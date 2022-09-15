import {React, useState, useEffect} from 'react';
import {Card, Row, Container} from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';
import Beranda from '../../JS_Folder/beranda';
import Footer from '../../JS_Folder/footer';
import { videoFull } from '../../apilink';
import Iframe from 'react-iframe';
import '../../CSS_Folder/galeri.css'

const VideoFull = () => {
    const {slug} = useParams();
    const [FullVideo, setFullVideo] = useState(null);
    useEffect(() => {
        getFullVideo();
        return () => {
            setFullVideo(null);
        };
    }, []);

    function getFullVideo() {
        const axios = require("axios");
        axios
            .get(videoFull + slug)
            .then(function(response) {
                setFullVideo(response.data.data);
            })
            .catch(function(error) {})
            .then(function() {});
    }

    return (
        <>
            <Row className='video-row'>
                <Beranda />
                {(FullVideo != null) ?
                    <div className='video-full-card'>
                        <Iframe 
                            src={FullVideo[0].video_url}
                            frameBorder="0"
                            scrolling='auto'
                            height="100%"
                            width="100%"
                            className='video-full-page'
                            allowFullScreen
                        />
                    </div>
                : ' '}
                <Footer />
            </Row>
        </>
    )
}

export default VideoFull;