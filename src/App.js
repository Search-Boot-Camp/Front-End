/*eslint-disable*/

import './App.css';
import Header from './Component/Header/Header';
import Select from './Component/Select/Select';
import MainBanner from './Component/MainBanner/MainBanner';
import Footer from './Component/Footer/Footer';
import ImgBox from './Component/ImgBox/ImgBox';
import Details from './Component/Details/Details';
import SearchPage from './Component/Search/Search';
import IntroducePage from './Component/Introduce/Introduce';
// import Ad from './Component/Ad/Ad';
import { Route, Routes } from 'react-router-dom';
// import {logo} from './site_logo.png';

function MainPage()
{
    return(
        <div id="app">
            <div id="main">
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
            <div id="error">
                <div> 
                    <p>여러분<br/>
                    지금당장<br/>화면을<br/>180도<br/>돌리고<br/>부트캠프를
                    <br/>검색하세요!!!!</p>
                </div>
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

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/detail" element={<Details />}/>
                <Route path="/" element={<MainPage/>} exact={true}/>
                <Route path="/search" element={<SearchPage/>}/>
                <Route path="/introduce" element={<IntroducePage/>}/>
                <Route path="/*" element={<ErrorPage/>}/>
            </Routes>
        </div>
    );
}

export default App;