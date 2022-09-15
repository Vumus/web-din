import {react, useState, useEffect, Fragment} from 'react';
function API() {
  const [DataResponse, setDataResponse] = useState(null);

  useEffect(() => {
    getArtikel();

    return () => {
      setDataResponse(null);
    };
  }, []);

  function getArtikel() {
    const axios = require('axios');
    axios.get('http://adminmesuji.embuncode.com/api/article?instansi_id=4&per_page=3').then(function (response) {
    setDataResponse(response.data.data.data);
    }).catch(function (error) {

    }).then(function () {

    });
  }

    return (
    <>
      {
        (DataResponse != null) ? 
          <div className="container-main">
        {
          DataResponse && DataResponse.map((item, index) => {
            return (
              <div className="card">
                <div className="card-body">
                  <img className='image-size' src={item.image_file_data} alt="" />
                  <h1>{item.title}</h1>
                  <p>{item.content}</p>
                  <button>Detail</button>
                </div>
              </div>
            )
          })
        }
        </div>: ''
      }
      </>
  );
  
}

export default API;