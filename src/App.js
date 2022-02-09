import './App.css';
import Header from './Header/Header';
import Select from './Select/Select';
import MainBanner from './MainBanner/MainBanner';
import Footer from './Footer/Footer';

function App() {
    return (
        <div className="App">
            <Header/>
            <div className='Banner'>
                <MainBanner/>
            </div>
            <div>
                <Select/>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
