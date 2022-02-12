/*eslint-disable*/

import './App.css';
import Header from './Component/Header/Header';
import Select from './Component/Select/Select';
import MainBanner from './Component/MainBanner/MainBanner';
import Footer from './Component/Footer/Footer';
import ImgBox from './Component/ImgBox/ImgBox.js';
import { Route, Routes } from 'react-router-dom';

function MainPage()
{
    return(
      <div>
        <div>
            <Header/>
        </div>
        
        <div className='Banner'>
            <MainBanner/>
        </div>
        
        <div>
            <Select/>
        </div>

        <div>
            <ImgBox/>
        </div>
        
        <div>
            <Footer/>
        </div>
    </div>
    );
}

function ErrorPage()
{
    return(
        <div>
            <h1>Not Found</h1>
        </div>
    );
}

function SearchPage()
{
    return(
        <div>
            <h1>Search Page</h1>
        </div>
    );
}

function DetailPage()
{
    return(
        <div>
            <h1>Detail Page</h1>
        </div>
    );
}

function App() {
    return (
        <div className="App">

            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/search" element={<SearchPage/>}/>
                <Route path="/detail" element={<DetailPage/>}/>
                <Route path="/*" element={<ErrorPage/>}/>
            </Routes>
        </div>
    );
}

export default App;
