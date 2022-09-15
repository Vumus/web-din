import axios from 'axios';
import {React, useState, useEffect} from 'react';
import {Carousel} from 'react-bootstrap';
import { sliderNews } from '../apilink';
import '../CSS_Folder/slider.css'

const Slider = () => {
  const [index, setIndex] = useState(0);
    const [DataSlider, setDataSlider] = useState(null);
    useEffect(() => {
        getSlider();
        return () => {
          setDataSlider(null);
        };
    }, []);

    function getSlider() {
      axios
          .get(sliderNews)
          .then (function(response){
            setDataSlider(response.data.data.data);})
          .catch(function(error) {})
          .then (function() {});
          }

  return (
    <>
      {(DataSlider != null) ? 
          <Carousel className='slider-body'>
              {
                DataSlider && DataSlider.map((item, index) => {
                return (
                  <Carousel.Item>
                    <img className='slide' src={item.image_file_data}/>
                    <Carousel.Caption className='slide-capt'>{item.title}</Carousel.Caption>
                  </Carousel.Item>
                )
              })
            }
          </Carousel>: ''
        }
    </>
  );
}


export default Slider;