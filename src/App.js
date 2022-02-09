import './App.css';
import Header from './Component/Header/Header';
import Select from './Component/Select/Select';
import MainBanner from './Component/MainBanner/MainBanner';
import Footer from './Component/Footer/Footer';

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
