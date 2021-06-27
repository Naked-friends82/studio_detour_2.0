import React from "react";
import barrada_img from "../fineart/Barrada.jpg";

const Barrada=({scrollToTop, barrada}) => {
  return(
    <div className="compBox">
      <h2 ref={barrada} >Palissade de Chantier (Building Site Wall), Ferry, Tangier, Fig. 3(2009) – Yto Barrada</h2>
      <div className="compCont">
        <div className="compIntr">
          <p>
              2018년  PACE 갤러리에서 Yto Barrada의 개인전이 열렸다. 다수의 사진, 페브릭 작업과 Blue Palm이라는 조형물이 있었다. 전체적으로 차분한 분위기와 달리 Blue Palm이라는 작업이 눈에 띄었다. 그저 황폐한 건물의 사진이라 생각했지만, Blue Palm이라는 작품과 연결되어 더욱 깊이 있는 읽기가 가능했다. 
              Blue Palm은 어두운 철판을 이용하여 야자수 모양을 이루고 있다. 구조물 전면에는 60년대 Hollywood에 있는 간판처럼 작은 색 전구들이 줄지어 배치되어, 저마다의 빛을 내고 있다. 이것은 입간판의 모습을 띄어 Icon처럼 느껴진다.
          </p>
          <p>
              모로코의 여러 상업도시는 광석·아몬드·오렌지 등을 수출했지만 1911년 국제 분쟁지역이 되었고, 1960년 대지진으로 인해 도시의 대부분이 파괴되었다. 한 때 화려했던 상업도시는 이제 사람들이 떠나 황량한 바람만이 남아있다. Yto Barrada의 ‘Palissade de chantier (Building Site Wall), Fig. 4, Tangier’는 이러한 쇠락한 모로코의 옛 도시를 보여준다. 사진은 바다가 그려진 울타리이자 벽이다. 벽에 그려진 바다 그림은 항구도시의 분위기를 자아냄과 동시에 그 자체로 도시의 간판 역할을 한다. 찬란했던 당시 그것은 단순히 바다가 그려진 벽이 아니다. 그것은 청량한 바다의 이미지로 표현된 도시의 성공과 꿈의 상징이다. 하지만 쇠락의 기운과 함께 뜯어진 이미지와 어긋난 울타리는 바다라는 상업적이고 낭만적인 이미지에 균열을 낸다. 이는 오히려 벽이라는 것을 강조하며 우리가 꿈꿨던 환상에 대한 허무한 감정을 자아낸다.
          </p>
        </div>
        <div className="compImgBox">
            <img className="compImg" src={barrada_img} alt="Palissade de Chantier (Building Site Wall)_Yto Barrada" />
        </div>
        <div className="compIntr">
          <p>
              Yto Barrada는 한때는 꿈과 희망이 가득했지만, 현재는 빛을 바래 황량해진 현실을 이야기한다. 그것은 시대를 따라가지 못해 쇠락한 모로코의 항구도시에 대한 이야기라고 생각할 수 있지만, 확실히 이것은 우리들의 삶의 모습을 담고 있다. 우리는 어떤 행동을 할 때, 그 행동이 가져올 미래를 생각한다. 그것은 밝고 찬란하며 지금의 상황을 더 낫게 만들 것으로 예상한다. 하지만 그것의 기대와 믿음이 클수록 그것이 이뤄지지 못했을 때의 허망함은 크다. 벽의 바다 그림이 물감으로 만들어진 환상일 뿐이라는 것을 알았을 때의 씁쓸함을 더 짙게 만든다. 이렇게 Yto Barrada는 기대와 허망함의 감정을 우리에게 전달함으로써 꿈꾸며 앞으로 나아가는 인간의 속성을 이야기한다.
          </p>
          <p>
              기대를 하면 할수록 실망은 크다. 이를 모르는 사람이 과연 있을까? 문제는 그것을 멈출 수 없다는 것이다. 그것은 개인의 삶의 순간순간에서부터 국가정책, 이데올로기까지 다양한 모습으로 변주되고 반복된다. 수많은 경험에도 불구하고 인간은 불만을 가지고 그것을 해결하는 무언가를 꿈꾸고 좌절한다. 때로는 문제가 해결되기도 한다. 그러나 문제의 해결책이 돌이킬 수 없는 독이 되어 과거라는 노스텔지어를 만든다. 자신이 그렇게 싫어했던 그 모습들을 그리워하게 된다. 
          </p>
        </div>
      </div>
      <button className="bottom" onClick={scrollToTop}>Move to Top of page</button>
    </div>    
  )
}

export default Barrada;