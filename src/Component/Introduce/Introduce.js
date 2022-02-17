import './Introduce.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import mem5 from './../../img/mem5.jpg';
import Ad from '../Ad/Ad';
import sitelogo from './../../img/site_logo.png';
import seohyun from './../../img/seohyun.png';
import geb from './../../img/geb.png';
import syh from './../../img/syh.png';
import khb from './../../img/khb.png';
import ghw from './../../img/ghw.png';

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
                            <img src={geb} alt="profile"></img>
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
                            <img src={syh} alt="profile"></img>
                        </div>
                        <div id="fronttext"> 
                            <h3> 신영한 🦁 </h3>
                            <p>금오공과대학교</p>
                            <p>@syhan7516</p>
                        </div>
                        <div id="sogam">
                            <p>모든 것이 처음이었던 저에게 정말 좋은 기억, 경험을 남기게 해준 프로젝트였습니다.
                                할 수 있을까. 라는 걱정보다는 할 수 있다. 라는 자신감을 갖게 해주신 협업, 동료분들 모두에게 감사합니다.
                                앞으로도 더 많은 배움과 경험을 통해 더 성장하여 다음에는 멋진 모습으로 다시 볼 수 있었으면 좋겠습니다. 수고하셨습니다.
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
                            <img src={ghw} alt="profile"></img>
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
                            <img src={khb} alt="profile"></img>
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
                            <p>좋은 팀과 함께할 수 있어서 즐거운 시간이었습니다. 개인적으로는 많은 역할을 하지는 못했지만, 많이 배우고 자극도 많이 받은 시간이었습니다. 
                                규모가 제법 있는 팀이라 의견을 조율하기 힘드셨을텐데, 좋은 분위기로 끝까지 잘 이끌어주신 분들 너무 수고하셨습니다.
                            </p>
                        </div>
                    </div>
                    <div id="back">  
                        <div id="image"> 
                            <img src={seohyun} alt="profile"></img>
                        </div>
                        <div id="backtext">
                            <h3>이서현 🦁 </h3>
                            <p>금오공과대학교</p>
                            <p>@kathyleesh</p>
                        </div>
                        <div id="sogam">
                            <p>벌써 사이드 프로젝트가 마무리할 시간이네요! 
                                25일은 매우 짧은 기간이지만 매일 함께하면서 하나의 프로젝트를 완성한 우리에겐 정말 긴 여정이었던 것 같습니다. 💕 
                                PM, REACT, Django,등 많은 것들을 단기간에 알차게 배울 수 있는 값진 기회였던 것 같습니다! 
                                모든 방면에서 늘 든든한 지원군이 되어주고 자면서도 코드를 생각해 준 현우님 &
                                분위기 메이커를 담당해 주며 똑 부러지게 작업해준 Front 만능 은빈님 & 
                                매일 밝은 에너지를 주며 첫날부터 프로젝트 가이드라인을 잡아주며 sbc의 길잡이가 되어준 섹시하고 Back 천재 현빈님 & 
                                조용하지만 맡은 일을 가장 빨리 완벽하게 처리해 준 보성님 & 
                                팀장 멘탈을 잡아주고 팀원들의 잘 풀리지 않는 코드를 같이 해결해 주며 sbc의 데이터 통신까지 책임져준 영한님 & 
                                긍정적인 에너지를 가지고 난관에 부딪혀도 끝까지 해결하는 재현님 & 
                                생각지도 못한 부분을 잘 캐치해 주고 뭐든 척척 구현에 주는 로직 구현 천재 수화님 
                                & 늘 나서서 먼저 도와주려 하고 귀여운 목소리와 센스까지 겸비한 CSS 장인 혜린 님까지 여러분들이 있었기에 최고의 팀이라 생각합니다! 
                                진짜 열정이 식지 않는 여러분 덕분에 더 책임감 가지고 즐기면서 할 수 있었습니다!
                                모두들 정말 많이 수고하셨고 가장 부족함이 많은 팀장과 함께 끝까지 잘 해내 주신 팀원 분들 모두 너무 감사합니다!❤️ 
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Ad />
        {/* <Footer/> */}
        
        </div>
    )
}

export default Introduce;