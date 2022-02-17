import React, {useState} from 'react';
import './Search.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ImgBox from '../ImgBox/ImgBox';
import Ad from '../Ad/Ad';
import axios from 'axios'
import find from './../../img/find.png';

const Search = () => {
    const [flag, setFlag] = useState(false);
    const [search, setSearch] = useState(" ");
    const [data, setData] = useState([]);
    const onChange = (event) => { 
        setSearch(event.target.value);
     };

    const onKeyPressHandler=(e)=>{
        if(e.key == 'Enter'){
            getData();
        }
    }
    const getData = () => {
        let completed = false;

        if (search === " " || search === "") {
            setData([]);
            return;
        }

        async function get() {
            // http://ec2-13-209-65-110.ap-northeast-2.compute.amazonaws.com:8000/api/boot
            // camp/search?search=html
            const result = await axios(`http://ec2-13-209-65-110.ap-northeast-2.compute.amazonaws.com:8000/api/bootcamp/search?search=${search}`)
            
            if (!completed) {
                setData(result.data);
                setFlag(true);
                // data 출력
                console.log(data);
            }
        }

        get()
        return() => {
            completed = true

        }
    }
    return (
        <div>
            <Header/>
            <div>
                <div className='search-frame'>
                    <div id="logo-container">
                        <img className="main-logo" src="site_logo.png" alt=""/>
                    </div>
                    <div className="form-f-box">
                        <div id="form">
                            <input
                                className ="form-input"
                                type="string"
                                onChange={onChange}
                                placeholder="찾고 싶은 부트캠프를 검색하세요!"
                                onKeyPress={onKeyPressHandler}>
                            </input>
                            <button variant="secondary" onClick = {getData} id="findbt">
                                <img alt="" src={find} width="23" height="23"/>
                            </button>
                        </div>
                    </div>

                    <div id="search-box">
                        <hr width="80%"/>
                        <div id="search-str">
                            검색 결과
                        </div>
                        <hr width="80%"/>
                    </div>

                    <div>
                        {
                            (data.length === 0 && flag === false) ? <div id="result-str">검색을 해주세요!</div>
                            : <div className='img-box'><ImgBox data={data}/></div>
                        }
                    </div>
                    <div>
                        {
                            (data.length === 0 && flag === true) 
                                ? <div id="result-str">검색 결과가 없습니다</div>
                                : <div className='img-box'><ImgBox data={data}/></div>
                        }
                    </div>

                </div>

            </div>
            <Ad />
            <Footer/>
        </div>
    )
}

export default Search;
