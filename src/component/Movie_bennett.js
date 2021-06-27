import React from "react";
import moneyball_1 from "../stillCut/moneyball_1.jpg";
import moneyball_2 from "../stillCut/moneyball_2.jpg";


const Bennett = ({scrollToTop, bennett}) => {
  return(
    <div className="compBox_m">
      <h2 ref={bennett}>Moneyball – Bennett Miller</h2>
        <div className="compCont_m">
          <div className="compIntr_m">
            <p>
              “We’re all told at some point we can no longer play the children’s game. We just don’t know when that’s gonna be.” 
            </p>
            <p>
              살면서 특정한 문제 상황에 봉착했을 때, 그것을 해결하기 위해선 2가지가 필요하다. 하나는 문제를 해결할 수 있는 방법, 그리고 그것을 실행시킬 수 있는 실행력. 어린 아이도 생각해낼 수 있는 간단한 것들이지만, 실제로 이 두가지를 갖추고 문제를 해결해낸 사람은 매우 드물다. <br />

              여기서 말하는 문제 상황이란, 우리가 살면서 겪는 여러 저항과는 본질적으로 다르다. 이것은 앞을 완전히 가로막는 장애물과 비슷하다. 장애물이 나타난 이유는 독립된 한 가지의 문제 때문만이 아니다. 자라온 환경과 그 속에서 형성된 성격과 정체성, 걸어온 커리어 등 총체적인 요소들이 결합된 결과다. 이 요소들은 지금의 모습을 만들어 주었지만, 그와 동시에 필연적으로 한계를 수반한다. 마치 공을 앞으로 던지면 힘차게 나아가지만, 그 순간 궤도가 정해져 떨어질 위치를 알게 되는 것과 같다.
            </p>
            <p>
              대부분의 사람들은 이 궤도를 인생의 과정이라 생각하고 이를 그대로 받아들인다. 그러나 특정한 사람들은 이 완만한 폐곡선을 견디지 못하고 괴로워하며 고군분투한다. 영화 속 빌리 또한 이러한 인간 중 하나다. 그는 상대적으로 가난한 구단의 단장으로, 구단 내 좋은 선수들을 끊임없이 빅 클럽에 뺏기는 참담한 상황 속에서 승리를 위해 고민한다. 빌리는 현 상황의 불공평함, 구단의 궤도와 그 종착점이 어딘지 정확히 인식하고 있었다. 따라서 구단의 베테랑 스카우터들의 이야기에 “틀렸다”고 이야기한다. 베테랑들은 경험과 함께 스스로가 야구에 대해 잘 알고 있다고 생각한다. 확실히 그들은 기존의 야구에 대해선 누구보다 전문가일 것이다. 그러나 그들은 현 상황을 타개하기 위해 새로운 생각을 하지 않는다. 지금까지의 방법 그대로, 좋은 선수를 발굴할 생각만을 한다. 선수를 발굴해도 다시 빅 클럽이 데려갈 것이라는 것을 알기에, 빌리는 그들의 노력이 그저 같은 상황을 반복하는 일로 느낀다.
            </p>
          </div>
          <div className="compImgBox_m">
              <img className="compImg_m" src={moneyball_1} alt="moneyball_1" />
              <img className="compImg_m" src={moneyball_2} alt="moneyball_2" />
          </div>
          <div className="compIntr_m">
            <p>
              빌리는 바뀌어야 한다 생각하지만, 특별한 방법이 없다. 그 또한 기존의 시스템에 속해있는 사람이며 기존의 시각대로 야구를 봐왔기에, 무엇을 어떻게 다르게 봐야하는지도 모른다. 이러한 그의 눈 앞에 경제학을 전공하여 야구를 숫자로 생각하는 피터가 나타난다. 통계에 집중하는 피터를 만난 빌리는 그의 생각이 가난한 구단의 폐곡선에서 벗어날 수 있는 방법이라 생각하여 그를 전격 기용한다. 물론 야구에 대한 피터의 철학과 그와 함께하는 빌리는 구단 밖에서는 조롱거리가 되고 구단 내에서는 갈등의 씨앗이 된다. 그러나 그들은 이에 굴하지 않고 뜻을 관철시키기 위해 끊임없이 노력한다. 이후 영화 러닝 타임의 대부분은 주변의 반대를 무릎 쓰고 자신의 생각을 밀고 나가는 지난한 과정이다.
            </p>
            <p>
              생각과 행동의 결합이 가지는 파괴적인 힘. 그것은 철학과 예술, 역사 등 다양한 분야에서 찾아볼 수 있다. 이러한 생각과 실천은 고통의 그 자체다. 새로운 생각이란 감도 잡히지 않으며, 기존의 자신을 부정하는 용기가 필요할 뿐 아니라 자신만의 외로운 싸움이기 때문이다. 포기할 수 있었다면 애초에 포기했을 것이다. 이러한 고통 속에서 고군분투하는 사람을 위해 감독은 아름다운 노래를 선물한다. 
            </p>
            <p>
              “I’m just a little bit caught in the middle. Life is a maze and love is a riddle. I don’t know where to go Can’t do it alone, I’ve tried. And I don’t know why. I’m just a little girl lost in the moment. I’m so scared but I don’t show it. I can’t figure it out it’s bringing me down. I know I’ve got to let it go. And just enjoy the show”
            </p>
          </div>
        </div>
        <button className="bottom_m" onClick={scrollToTop} >Move to Top of page</button>
    </div>
  )
}

export default Bennett;