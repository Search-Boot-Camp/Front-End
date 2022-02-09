import PropTypes from "prop-types";
import './Footer.css';

function Footer() {
    return (
        <div id="footer">
            <footer>
                <div id="sbclogo">
                    <img src="./site_logo.png"></img>
                </div>
                <div id="footer1">
                    <h2>SBC</h2>
                    <h3>Search Boot Camp</h3>
                    <p>최근 코로나로 정보화시대가 더욱 가속화가 되었고, 많은 사람들이
                        <br/>
                        IT, SW 분야에 뛰어들고 있습니다. 그로 인해 부트 캠프 또한
                        <br/>
                        많이 생겨나고 있습니다. 이런 적지 않은 수의 부트 캠프를 쉽게
                        <br/>
                        비교할 수 있는 서비스를 제공하고자 프로젝트를 시작하였습니다.</p>
                </div>
                <div id="frontMember">
                    <h2>Front</h2>
                    <p>권은빈 DSWU
                    </p>
                    <p>신영한 KIT
                    </p>
                    <p>안재현 KIT
                    </p>
                    <p>이수화 KIT
                    </p>
                    <p>이혜린 SMU
                    </p>
                </div>
                <div id="backMember">
                    <h2>Back</h2>
                    <p>구현우 KIT</p>
                    <p>김현빈 SMU</p>
                    <p>박보성 HUFS</p>
                    <div id="king">
                        <img src="./wanggwan.png"></img>
                        <p>
                            이서현 KIT</p>
                    </div>
                    <p>최혁순 KWU</p>
                </div>
            </footer>
        </div>
    );
}

export default Footer;