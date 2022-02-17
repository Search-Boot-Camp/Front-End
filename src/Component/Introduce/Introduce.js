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
                    <div id="front">   
                        <div id="image"> 
                            <img src={mem5} alt="profile"></img>
                        </div>
                        <div id="fronttext">
                            <h3> 권은빈 🦁 </h3>
                            <p>덕성여자대학교</p>
                            <p>@eunbeann</p>
                        </div>
                        <div id="sogam">
                            <p>좋은 팀과 재밌는 프로젝트로 즐겁게 보낸 시간들 이였습니다♥ 
                                대단한 팀원들과 함께 하면서 스스로 성장 욕구도 많이 느꼈고 개발도, 개발 
                                외적으로도 다양한 부분 배울 수 있었습니다! 다음엔 더 성장한 모습으로 다시 프로젝트 
                                같이 하고 싶어요 ㅎ,ㅎ 다들 너무 수고 많았고 올해 멋사 1년 후회 없이 보내 보아용!! 감사합니다 🦁 
                            </p>
                        </div>
                    </div>
                    <div id="front">  
                        <div id="image"> 
                            <img src={mem5} alt="profile"></img>
                        </div>
                        <div id="fronttext"> 
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
                    <div id="front">  
                        <div id="image"> 
                            <img src={mem5} alt="profile"></img>
                        </div> 
                        <div id="fronttext">
                            <h3> 안재현 🦁 </h3>
                            <p>금오공과대학교</p>
                            <p>@JaeHyun<br/>Ground</p>
                        </div>
                        <div id="sogam">
                            <p>22년 1월부터 웹 프로그래밍을 시작해서 첫 번째 프로젝트를 Search Boot camp 프로젝트로 
                                시작하게 됐습니다. 첫 프로젝트였던 만큼 기대도 많이 됐지만 "경험도 없고 실력도 부족한 
                                내가 다른 팀원분들한테 피해 끼치지 않게 잘 할 수 있을까?" 라는 걱정도 많았습니다. 하지만 
                                이런 걱정을 했던 제가 바보였다고 생각이 들 만큼 저희 팀원분들이 너무 잘 대해주셨고 그로 인해서 
                                많은 것들을 배울 수 있었던 보람찬 경험이었습니다. 또  멋쟁이사차처럼 대학들의 운영진들과 만날 
                                수 있어서 영광이었습니다. 다들 수고 많이 하셨고 우리 우정 변치 말아요....❤🦁
                            </p>
                        </div>
                    </div>
                    <div id="front">  
                        <div id="image"> 
                            <img src={mem5} alt="profile"></img>
                        </div>
                        <div id="fronttext">
                            <h3> 이수화 🦁 </h3>
                            <p>금오공과대학교</p>
                            <p>@shlee0820</p>
                        </div>
                        <div id="sogam">
                            <p> 첫 웹 프로젝트라서 많이 서툴고 어떻게 해야할 지 몰라서 방황했던 것 같은데, 
                                아이디어와 열쩡🔥 가득한 프론트엔드 분들과 코딩만렙✨ 백엔드 분들이 있으셨기에 프로젝트를 잘 마무리 할 수 있었던 것 같습니다.
                                특히 이번 플젝을 통해 리액트를 처음 써봤는데 직접 설계한 화면을 구현하는 과정에서 적어도 리액트의 '리'까지는 알 수 있었고 (멀고 먼 코딩고수의길 ..)
                                프론트엔드 분야에 더 매력을 느낀 것 같아서 좋았습니다 !
                                플젝의 시작을 SBC로 하게되어 좋네요. 모두 수고많으셨어요 🚀💗
                            </p>
                        </div>
                    </div>
                    <div id="front">  
                        <div id="image"> 
                            <img src={mem5} alt="profile"></img>
                        </div>
                        <div id="fronttext">
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
                    <div id="back">  
                        <div id="image"> 
                            <img src={mem5} alt="profile"></img>
                        </div>
                        <div id="backtext">
                            <h3>구현우 🦁 </h3>
                            <p>금오공과대학교</p>
                            <p>@GHWooo</p>
                        </div>
                        <div id="sogam">
                            <p>처음으로 다른 인원들과 하나의 목표를 가지고 프로젝트를 진행할 수 있는 좋은 경험이었습니다. 
                                팀원들도 다들 즐거운 성격에 항상 웃으면서 코딩해서 스트레스 받는 일도 없이 좋았습니다. 
                                특히나 이번에 Back에 관심이 많았는데, 실력있는 팀원들 덕분에 많이 배웠고 좋은 결과물이 
                                나온거 같아 만족스럽습니다! 한가지 아쉽다면 코로나 때문에 다같이 모여서 코딩 못했던게 
                                아쉽지만! 앞으로 살날이 많이 남았기 때문에 기회가 된다면 꼭 웃으면서 대면으로 보길 희망합니다!
                                다들 행복하세요!
                            </p>
                        </div>
                    </div>
                    <div id="back"> 
                        <div id="image"> 
                            <img src={mem5} alt="profile"></img>
                        </div>
                        <div id="backtext">
                            <h3>김현빈 🦁 </h3>
                            <p>상명대학교</p>
                            <p>@myunbongs</p>
                        </div>
                        <div id="sogam1">
                            <p>안녕하세요!!!!!!!!!!!!!! 저는 SBC의 시끄러움 수다쟁이 담당이었는데요 🤪 정신 없는 김현빈을 다들 
                                보듬어주시고 따뜻하게 대해주셔서 프로젝트 하는 동안 너무 행복했어요 💕 제가 처음 멋쟁이 사자처럼에 
                                들어왔을 때는 팀장이 되어서 서현님만큼 이끌지도 못 했고 개발도 잘못했는데…. 이제는 도움도 드리고 한 몫 
                                할 수 있게 된 거 같아 굉장히 뿌듯합니다 (갑자기 내 자랑) 간밤에 모각코 하면서 이런 저런 얘기를 나누고 두서없는 
                                제 이야기에도 공감해주시느라 고생해주신 영한님, 처음에 어색했던 프론트엔드 뽀짝한 분위기로 잘 이끌어주시고 막판에 
                                저와 친해져주신 섹시프리티 은빈님(초울트라영광), 슈퍼두퍼인싸력을 뽐내며 어디 누나한테 반말 쓰고 있는 재현이! 히히 
                                넝담이구 밤샘하는 프론트엔드 팀원분들 부담 덜어드리려고 궂은 일도 도맡아서 하느라 고생해따 그리구 학생회 일도 그렇고 
                                아르바이트 끝나고도 열씨미 참여해줬던 코딩 천재 큐티빠티 혜린이, 맡으신 일을 착착 해주셨던 보성님, 항상 묵묵히 멋진 
                                결과물을 내주셨던 수화님두, 백엔드에서 쪼잘쪼잘 제 얘기 들어주시구 서현님과 열일해주신 현우님, 프로젝트 처음부터 끝까지 
                                정성스러운 공지와 보고해주시면서 느슨한 김현빈에 약간의 긴장을 넣어주셨던 팀장으로서의 서현님두 너무 너무 고생 많으셨고 
                                감사했습니다 🙇‍♀️ 
                            </p>
                        </div>
                    </div>
                    <div id="back">  
                        <div id="image"> 
                            <img src={mem5} alt="profile"></img>
                        </div> 
                        <div id="backtext">
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
                    <div id="back">  
                        <div id="image"> 
                            <img src={mem5} alt="profile"></img>
                        </div>
                        <div id="backtext">
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