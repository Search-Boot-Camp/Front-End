import React, {useState, useEffect} from 'react';
import './Search.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ImgBox from '../ImgBox/ImgBox';
import {Form, Button} from 'react-bootstrap';
import find from './../../img/find.png';
import axios from 'axios'

const Search = () => {

    const [search, setSearch] = useState(" ");
    const [data, setData] = useState([]);
    const onChange = (event) => { 
        setSearch(event.target.value);
     };
    // 검색창에서 돋보기버튼 눌렀을 때
    const onSubmit = () => { { console.log(search) } };

    useEffect(() => {
        let completed = false;

        if (search === " " || search === "") {
            console.log("검색어를 입력해주세요!!");
            setData([]);
            return;
        }

        async function get() {
            // http://ec2-13-209-65-110.ap-northeast-2.compute.amazonaws.com:8000/api/boot
            // camp/search?search=html
            const result = await axios(`/api/bootcamp/search?search=${search}`)
            if (!completed) {
                setData(result.data);
                // data 출력
                console.log(data);
            }
        }

        get()
        return() => {
            completed = true
            console.log("~");
        }
    }, [search])

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
                            <Form.Control
                                type="string"
                                onChange={onChange}
                                placeholder="찾고 싶은 부트캠프를 검색하세요!"/>
                            <Button variant="secondary" type="submit" id="findbt">
                                <img alt="" src={find} width="23" height="23"/>
                            </Button>
                        </Form>
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
                            (data.length === 0 && search != " ") 
                                ? <div id="result-str">검색 결과가 없습니다.</div>
                                : <div className='img-box'><ImgBox data={data}/></div>
                        }
                    </div>

                </div>

            </div>
            <Footer/>
        </div>
    )
}

export default Search;