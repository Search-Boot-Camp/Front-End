import './App.css';
import Header from './Header';
import Select from './Select';
import MainBanner from './MainBanner';
import Footer from './Footer';

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
