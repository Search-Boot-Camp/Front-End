import './MbtiStart.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import sbc_mbti_logo from './../../img/sbc_mbti_logo.png';

function MbtiStart(){
    return (
        <div class="mbti">
            <Header/>
            <article class="start">
                <h1 class="main-title mt-5 text-center">나는 어떤 개발자?</h1>
                <h2 class="sub-title mt-3 text-center">MBTI로 알아보는 당신의 개발 스타일은?</h2>
                <div class="logo">
                <img src={sbc_mbti_logo} id="sbc_mbti_logo.png" alt="sbc_mbti_logo"></img>
                </div>
                <div class="start-cover mt-1 mb-3">
                    <button type="button" class="btn-start btn btn-primary" onclick='start();'>나의 개발자 유형 알아보기</button>
                </div>
            </article>
            <Footer/>
        </div>
    )
}

export default MbtiStart;