import React, {useState} from 'react';
import './Search.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ImgBox from '../ImgBox/ImgBox';
import {Form, Button} from 'react-bootstrap';
import find from './../../img/find.png';

const Search = () => {

    const [search, setSearch] = useState("");

    const onSubmit = () => {
        {
            // 검색창에서 돋보기버튼 눌렀을 때
            console.log(search);
        }
    };

    const onChange = (event) => {
        setSearch(event.target.value);
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
                        <Form id="form" onSubmit={onSubmit}>
                            <Form.Control type="string" onChange={onChange} placeholder="찾고 싶은 부트캠프를 검색하세요!"/>
                            <Button variant="secondary" type="submit">
                                <img alt="" src={find} width="23" height="23"/>
                            </Button>
                        </Form>
                    </div>
                    <div id="search-box">
                        <div id="search-str">
                            검색 결과
                        </div>
                        <hr width="90%"/>
                    </div>
                    <div className='img-box'>
                        <ImgBox/>
                    </div>

                </div>

            </div>
            <Footer/>
        </div>
    )
}

export default Search;