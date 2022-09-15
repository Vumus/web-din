import React from 'react';
import BerandaPage from './Halaman_Folder/berandaPage/berandaPage';
import BeritaPage from './Halaman_Folder/beritaPage/beritaPage';
import ArtikelPage from './Halaman_Folder/artikelPage/artikelPage';
import ArtikelFull from './Halaman_Folder/artikelPage/detailArtikel';
import BeritaFull from './Halaman_Folder/beritaPage/detailBerita';
import DokumenPage from './Halaman_Folder/dokumenPage/dokumenPage';
import DokumenFull from './Halaman_Folder/dokumenPage/dokumenFull';
import GaleriFoto from './Halaman_Folder/galeriPage/galeriFoto';
import GaleriVideo from './Halaman_Folder/galeriPage/galeriVideo';
import VideoFull from './Halaman_Folder/galeriPage/pageVideo';
import FotoFull from './Halaman_Folder/galeriPage/pageFoto';
import StatisPage from './Halaman_Folder/statisPage/statisPage';
import { Routes, Route } from 'react-router-dom';

const App = () => {
    return (
        <>
            <Routes>
                <Route path='/' exact element={<BerandaPage />} />
                <Route path='/Berita' exact element={<BeritaPage />} />
                <Route path='/BeritaFull/:id' exact element={<BeritaFull />} />
                <Route path='/Artikel' exact element={<ArtikelPage />} />
                <Route path='/ArtikelFull/:id' exact element={<ArtikelFull />} />
                <Route path='/Dokumen' exact element={<DokumenPage />} />
                <Route path='/DokumenFull/:slug' exact element={<DokumenFull />} />
                <Route path='/GaleriFoto' exact element={<GaleriFoto />} />
                <Route path='/FotoFull/:slug' exact element={<FotoFull />} />
                <Route path='/GaleriVideo' exact element={<GaleriVideo />} />
                <Route path='/VideoFull/:slug' exact element={<VideoFull />} />
                <Route path='/StatisPage' exact element={<StatisPage />} />
            </Routes>
        </>
    )
}

export default App;
