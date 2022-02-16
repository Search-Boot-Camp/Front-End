import './Introduce.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import mem5 from './../../img/mem5.jpg';
import Ad from '../Ad/Ad';
import sitelogo from './../../img/site_logo.png';

function Introduce(){
    return (
        <div>
            <Header/>
            <div id="introApp">
            <div id="siteIntroduce">
                <img id={sitelogo} src="site_logo.png" alt="profile"></img>
                <div id="siteComment">
                    <h1>Search Boot Camp</h1>
                    <p>최근 코로나로 정보화시대가 더욱 가속화가 되었고, 많은 사람들이 IT, SW 분야에<br/>
                        뛰어들고 있습니다. 그로 인해 부트 캠프 또한 많이 생겨나고 있습니다. 이런 적지
                        않은 <br/> 수의 부트캠프를 쉽게 비교할 수 있는 서비스를 제공하고자 멋쟁이사자처럼과 함께<br/> 
                        SBC(Search Boot Camp)라는 프로젝트를 시작하였습니다.                
                    </p>
                </div>
            </div>
            <div id="memberIntroduce">
                <div id="frontMemberIntroduce">
                    <h2> Front Member</h2>
                    <div id="front1">   
                        <img src={mem5} alt="profile"></img>
                        <div id="front1text">
                            <h3> 권은빈 🦁 </h3>
                            <p>덕성여자대학교</p>
                            <p>@eunbeann</p>
                        </div>
                        <div id="sogam">
                            <p>짧은 시간이었는데도 불구하고 팀원분들과 사이좋은 분위기에서 프로젝트에 참여할 수 있어서 
                                넘 좋았고, 이렇게 멋쟁이 사자처럼에 참여하는 여러 대학운영진분들과 알게 되어서
                                영광인 시간이었습니다. 만족스러운 결과물이 나와서 뿌듯하고, 처음 다루는 리액트에
                                함께 도전해볼 수 있어 좋았습니다. 다음에도 같이 프젝하고 싶어요. 이멤버 리멤버💙
                            </p>
                        </div>
                    </div>
                    <div id="front2">  
                        <img src={mem5} alt="profile"></img>
                        <div id="front2text"> 
                            <h3> 신영한 🦁 </h3>
                            <p>금오공과대학교</p>
                            <p>@syhan7516</p>
                        </div>
                        <div id="sogam">
                            <p>짧은 시간이었는데도 불구하고 팀원분들과 사이좋은 분위기에서 프로젝트에 참여할 수 있어서 
                                넘 좋았고, 이렇게 멋쟁이 사자처럼에 참여하는 여러 대학운영진분들과 알게 되어서
                                영광인 시간이었습니다. 만족스러운 결과물이 나와서 뿌듯하고, 처음 다루는 리액트에
                                함께 도전해볼 수 있어 좋았습니다. 다음에도 같이 프젝하고 싶어요. 이멤버 리멤버💙
                            </p>
                        </div>
                    </div>
                    <div id="front3">  
                        <img src={mem5} alt="profile"></img>   
                        <div id="front3text">
                            <h3> 안재현 🦁 </h3>
                            <p>금오공과대학교</p>
                            <p>@JaeHyun<br/>Ground</p>
                        </div>
                        <div id="sogam">
                            <p>22년 1월부터 웹 프로그래밍을 시작해서 첫 번째 프로젝트를 Search Boot camp 프로젝트로 시작하게 됐습니다. 첫 프로젝트였던 만큼 기대도 많이 됐지만 "경험도 없고 실력도 부족한 내가 다른 팀원분들한테 피해 끼치지 않게 잘 할 수 있을까?" 라는 걱정도 많았습니다. 하지만 이런 걱정을 했던 제가 바보였다고 생각이 들 만큼 저희 팀원분들이 너무 잘 대해주셨고 그로 인해서 많은 것들을 배울 수 있었던 보람찬 경험이었습니다. 또 좋은 팀원분들이자 멋쟁이사차처럼 대학들의 운영진들과 만날 수 있어서 영광이었습니다. 다들 수고 많이 하셨고 우리 우정 변치 말아요....❤🦁
                            </p>
                        </div>
                    </div>
                    <div id="front4">  
                        <img src={mem5} alt="profile"></img>
                        <div id="front4text">
                            <h3> 이수화 🦁 </h3>
                            <p>금오공과대학교</p>
                            <p>@shlee0820</p>
                        </div>
                        <div id="sogam">
                            <p>짧은 시간이었는데도 불구하고 팀원분들과 사이좋은 분위기에서 프로젝트에 참여할 수 있어서 
                                넘 좋았고, 이렇게 멋쟁이 사자처럼에 참여하는 여러 대학운영진분들과 알게 되어서
                                영광인 시간이었습니다. 만족스러운 결과물이 나와서 뿌듯하고, 처음 다루는 리액트에
                                함께 도전해볼 수 있어 좋았습니다. 다음에도 같이 프젝하고 싶어요. 이멤버 리멤버💙
                            </p>
                        </div>
                    </div>
                    <div id="front5">  
                        <img src={mem5} alt="profile"></img> 
                        <div id="front5text">
                            <h3> 이혜린 🦁 </h3>
                            <p>상명대학교</p>
                            <p>@HYERINI</p>
                        </div>
                        <div id="sogam5">
                            <p>짧은 시간이었는데도 불구하고 팀원분들과 사이좋은 분위기에서 프로젝트에 참여할 수 있어서 
                                넘 좋았고, 이렇게 멋쟁이 사자처럼에 참여하는 여러 대학운영진분들과 알게 되어서
                                영광인 시간이었습니다. 만족스러운 결과물이 나와서 뿌듯하고, 처음 다루는 리액트에
                                함께 도전해볼 수 있어 좋았습니다. 다음에도 같이 프젝하고 싶어요. 이멤버 리멤버💙
                            </p>
                        </div>
                    </div>
                </div>

                <div id="backMemberIntroduce">
                    <h2>Back Member</h2>
                    <div id="back1">  
                        <img src={mem5} alt="profile"></img> 
                        <div id="back1text">
                            <h3>구현우 🦁 </h3>
                            <p>금오공과대학교</p>
                            <p>@GHWooo</p>
                        </div>
                        <div id="sogam">
                            <p>짧은 시간이었는데도 불구하고 팀원분들과 사이좋은 분위기에서 프로젝트에 참여할 수 있어서 
                                넘 좋았고, 이렇게 멋쟁이 사자처럼에 참여하는 여러 대학운영진분들과 알게 되어서
                                영광인 시간이었습니다. 만족스러운 결과물이 나와서 뿌듯하고, 처음 다루는 리액트에
                                함께 도전해볼 수 있어 좋았습니다. 다음에도 같이 프젝하고 싶어요. 이멤버 리멤버💙
                            </p>
                        </div>
                    </div>
                    <div id="back2">  
                        <img src={mem5} alt="profile"></img>
                        <div id="back2text">
                            <h3>김현빈 🦁 </h3>
                            <p>상명대학교</p>
                            <p>@myunbongs</p>
                        </div>
                        <div id="sogam1">
                            <p>짧은 시간이었는데도 불구하고 팀원분들과 사이좋은 분위기에서 프로젝트에 참여할 수 있어서 
                                넘 좋았고, 이렇게 멋쟁이 사자처럼에 참여하는 여러 대학운영진분들과 알게 되어서
                                영광인 시간이었습니다. 만족스러운 결과물이 나와서 뿌듯하고, 처음 다루는 리액트에
                                함께 도전해볼 수 있어 좋았습니다. 다음에도 같이 프젝하고 싶어요. 이멤버 리멤버💙
                            </p>
                        </div>
                    </div>
                    <div id="back3">  
                        <img src={mem5} alt="profile"></img> 
                        <div id="back3text">
                            <h3>박보성 🦁 </h3>
                            <p>한국외국어대학교</p>
                            <p>@bosungpark</p>
                        </div>
                        <div id="sogam4">
                            <p>짧은 시간이었는데도 불구하고 팀원분들과 사이좋은 분위기에서 프로젝트에 참여할 수 있어서 
                                넘 좋았고, 이렇게 멋쟁이 사자처럼에 참여하는 여러 대학운영진분들과 알게 되어서
                                영광인 시간이었습니다. 만족스러운 결과물이 나와서 뿌듯하고, 처음 다루는 리액트에
                                함께 도전해볼 수 있어 좋았습니다. 다음에도 같이 프젝하고 싶어요. 이멤버 리멤버💙
                            </p>
                        </div>
                    </div>
                    <div id="back4">  
                        <img src={mem5} alt="profile"></img>
                        <div id="back4text">
                            <h3>이서현 🦁 </h3>
                            <p>금오공과대학교</p>
                            <p>@kathyleesh</p>
                        </div>
                        <div id="sogam">
                            <p>짧은 시간이었는데도 불구하고 팀원분들과 사이좋은 분위기에서 프로젝트에 참여할 수 있어서 
                                넘 좋았고, 이렇게 멋쟁이 사자처럼에 참여하는 여러 대학운영진분들과 알게 되어서
                                영광인 시간이었습니다. 만족스러운 결과물이 나와서 뿌듯하고, 처음 다루는 리액트에
                                함께 도전해볼 수 있어 좋았습니다. 다음에도 같이 프젝하고 싶어요. 이멤버 리멤버💙
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Ad />
        <Footer/>
        
        </div>
    )
}

export default Introduce;