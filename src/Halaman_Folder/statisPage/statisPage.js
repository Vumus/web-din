import { React, useEffect, useState } from "react"
import {Row, Card} from "react-bootstrap"
import Beranda from "../../JS_Folder/beranda"
import Footer from "../../JS_Folder/footer"
import "../../CSS_Folder/statis.css"
import { useParams } from "react-router"
import { stasisPage } from "../../apilink"

const StatisPage = () => {
    const [StatisData, setStatisData] = useState(null)
    useEffect(() => {
        getStatisData();
        return () => {
            setStatisData(null);
        };
    }, []);

        function getStatisData () {
            const axios = require ("axios");
            axios
                .get(stasisPage)
                .then(function(response) {
                    setStatisData(response.data.data.items);
                })
                .catch(function(error) {})
                .then(function() {});
        }
    return (
        <>
        {(StatisData != null) ?
            <Row>
                <Beranda />
                <h1>Halaman Statis</h1>
                {
                    StatisData && StatisData.map((item, index) => {
                        return (
                            <Card>
                                <Card.Title>{StatisData.title}</Card.Title>
                            </Card>
                        )
                    }
                    )
                }
                <Footer />
            </Row>: ''
            }
        </>
    )

}
export default StatisPage;