import React, { useEffect, useRef, useState} from "react";
// import "../css/artList.css";
// import "../css_mobile/artList_mobile.css";
//NFT
import NFT1 from "../artworks/NFT/1.PNG";
import NFT2 from "../artworks/NFT/2.PNG";
import NFT3 from "../artworks/NFT/3.PNG";
import NFT4 from "../artworks/NFT/4.PNG";
import NFT5 from "../artworks/NFT/5.PNG";
import NFT6 from "../artworks/NFT/6.PNG";
import NFT7 from "../artworks/NFT/7.PNG";
import NFT8 from "../artworks/NFT/8.PNG";
import NFT9 from "../artworks/NFT/9.PNG";
import NFT10 from "../artworks/NFT/10.PNG";
//2021
import fountain from "../artworks/2021/fountain.webp";
import fruitTree from "../artworks/2021/fruitTree.webp";
import hamburger from "../artworks/2021/hamburger.webp";
import ghost from '../artworks/2021/ghost.webp';
import lastOne from '../artworks/2021/lastOne.webp';
import rule from '../artworks/2021/rule.webp';
import pushedOut from '../artworks/2021/pushedOut.webp';
import clawMachineGame from '../artworks/2021/clawMachineGame.webp';
import embedded from '../artworks/2021/embedded.webp';
//2020
import afterSpiderManLeft from '../artworks/2020/afterSpiderManLeft.webp';
import contemporarySunflower from '../artworks/2020/contemporarySunflower.webp';
import float from '../artworks/2020/float.webp';
import outOfSeason from '../artworks/2020/outOfSeason.webp';
import untitled_occupy from '../artworks/2020/untitled(occupy).webp';
import vacanceInTheMuseum from '../artworks/2020/vacanceInTheMuseum.webp';
import whatIsLove from '../artworks/2020/whatIsLove.webp';
//2019
import flowerAndButterfly from '../artworks/2019/flowerAndButterfly.webp';
import frozenShadow from '../artworks/2019/frozenShadow.webp';
import JamJarComposition from '../artworks/2019/JamJarComposition.webp';
import untitled_HalliGalli from '../artworks/2019/untitled(HalliGalli).webp';
//2018
import cookOnTheCuttingBoard from '../artworks/2018/cookOnTheCuttingBoard.webp';
import doesMicroPerspectiveShowUsTheThruth from '../artworks/2018/doesMicroPerspectiveShowUsTheThruth.webp';
import futureTenseTrap from '../artworks/2018/futureTenseTrap.webp';
import theMomentAttractedToFlame from '../artworks/2018/theMomentAttractedToFlame.webp';
//2017
import crossroadInIncient from '../artworks/2017/crossroadInIncient.webp';
import minimalize from '../artworks/2017/minimalize.webp';
import TheProcessOfWordsBecomingBelief from '../artworks/2017/TheProcessOfWordsBecomingBelief.webp';

const IMG = [
    //NFT
    {
        'id': 'error_1',
        'src': NFT1,
        'wshType' : "w",
    },
    {
        'id': 'error_2',
        'src': NFT2,
        'wshType' : "w",
    },
    {
        'id': 'error_3',
        'src': NFT3, 
        'wshType' : "w",
    },
    {
        'id': 'error_4',
        'src': NFT4,
        'wshType' : "w",
    },
    {
        'id': 'error_5',
        'src': NFT5,
        'wshType' : "w",
    },
    {
        'id': 'error_6',
        'src': NFT6,
        'wshType' : "w",
    },
    {
        'id': 'error_7',
        'src': NFT7,
        'wshType' : "w",
    },
    {
        'id': 'error_8',
        'src': NFT8,
        'wshType' : "w",
    },
    {
        'id': 'error_9',
        'src': NFT9,
        'wshType' : "w",
    },
    {
        'id': 'error_10',
        'src': NFT10,
        'wshType' : "w",
    },
    //2021년도
    {
      'id': 'Various Fountain in one Fountain',
      'src': fountain,
      'wshType' : "w",
  },
  {
      'id': 'Fruit Tree',
      'src': fruitTree,
      'wshType' : "w",
  },
  {
      'id': 'Hamburger',
      'src': hamburger, 
      'wshType' : "w",
  },
  {
      'id': 'Ghost',
      'src': ghost,
      'wshType' : "w",
  },
  {
      'id': 'Last one',
      'src': lastOne,
      'wshType' : "h",
  },
  {
      'id': 'Rule',
      'src': rule,
      'wshType' : "w",
  },
  {
      'id': 'Pushed Out',
      'src': pushedOut,
      'wshType' : "w",
  },
  {
      'id': 'Claw Machine Game',
      'src': clawMachineGame,
      'wshType' : "h",
  },
  {
      'id': 'Embedded',
      'src': embedded,
      'wshType' : "w",
  },
    //2020년도
    {
      'id': 'After Spider-Man Left',
      'src': afterSpiderManLeft,
      'wshType' : "w",
  },
  {
      'id': 'Contemporary Sunflower',
      'src': contemporarySunflower,
      'wshType' : "s",
  },
  {
      'id': 'Float',
      'src': float,
      'wshType' : "w",
  },
  {
      'id': 'Out of Season',
      'src': outOfSeason,
      'wshType' : "w",
  },
  {
      'id': 'Untitled(occupy)',
      'src': untitled_occupy,
      'wshType' : "w",
  },
  {
      'id': 'Vacance in the Museum',
      'src': vacanceInTheMuseum,
      'wshType' : "w",
  },
  {
      'id': 'What is Love',
      'src': whatIsLove,
      'wshType' : "h",
  },
    // 2019년도
    {
      'id': 'Flower and Butterfly',
      'src': flowerAndButterfly,
      'wshType' : "w",
  },
  {
      'id': 'Frozen Shadow',
      'src': frozenShadow,
      'wshType' : "s",
  },
  {
      'id': 'Jam Jar Composition',
      'src': JamJarComposition,
      'wshType' : "w",
  },
  {
      'id': 'Untitled(Halli Galli)',
      'src': untitled_HalliGalli,
      'wshType' : "w",
  },
    //2018년도
    {
      'id': 'Cook on the Cutting board',
      'src': cookOnTheCuttingBoard,
      'wshType' : "w",
  },
  {
      'id': 'Does Micro-perspective Show us the Thruth',
      'src': doesMicroPerspectiveShowUsTheThruth,
      'wshType' : "w",
  },
  {
      'id': 'Future tense Trap',
      'src': futureTenseTrap,
      'wshType' : "h",
  },
  {
      'id': 'The Moment Attracted to Flame',
      'src': theMomentAttractedToFlame,
      'wshType' : "h",
  },
  //2017년도
  {
      'id': 'Crossroad in Incident',
      'src': crossroadInIncient,
      'wshType' : "w",
  },
  {
      'id': 'Minimalize',
      'src': minimalize,
      'wshType' : "w",
  },
  {
      'id': 'The Process of Words Becoming Belief',
      'src': TheProcessOfWordsBecomingBelief,
      'wshType' : "h",
  }
];
const ArtworkList = () => {
    const [currentImg, setCurrentImg] = useState({});
    const [wsh, setWsh] = useState("");
    const imgSpace = useRef();
    const img = useRef();


    const adjustSize = () => {
        console.log(currentImg.wshType);
        if(currentImg.wshType === "w"){
            console.log("width is more long");
            setWsh("w");
        } else if(currentImg.wshType === "s"){
            console.log("same");
            setWsh("s");
        } else if(currentImg.wshType === "h"){
            console.log("height is more long");
            setWsh("h");
        }
    };

    const showWork = (e) => {
        const {target: {value}} = e;
        const imgId = IMG.find(eachImg => eachImg.id === value);
        setCurrentImg(imgId);
    };

    useEffect(()=>adjustSize(),[currentImg]);

  return(
      <main className="listBox">
        <div ref={imgSpace}>
            <img className={`
            listImg 
            ${
                wsh ==="w" ? "adjust_W": 
                wsh === "s" ? "adjust_S":
                wsh === "h" ? "adjust_H":
                ""
            }`
            } ref={img} src={currentImg.src} alt={currentImg.id} />
        </div>
        <div className="listEmptyBox">

        </div>
        <div className="listContBox">

            <div className="year">
            <h3>
                2021
            </h3>
            <button className="title" onClick={showWork} value="Various Fountain in one Fountain">
                Various Fountain in one Fountain
            </button>
            <p>
                digital prints on paper <br />
                non-fixed <br />
                2021
            </p>
            <button className="title" onClick={showWork} value="Fruit Tree">
                Fruit Tree
            </button>
            <p>
                digital prints on paper <br />
                non-fixed <br />
                2021
            </p>
            <button className="title" onClick={showWork} value="Hamburger">
                Hamburger
            </button>
            <p>
                digital prints on paper <br />
                non-fixed <br />
                2021
            </p>
            <button className="title" onClick={showWork} value="Ghost">
                Ghost
            </button>
            <p>
                digital prints on paper <br />
                non-fixed <br />
                2021
            </p>
            <button className="title" onClick={showWork} value="Last one">
                Last one
            </button>
            <p>
                digital prints on paper <br />
                non-fixed <br />
                2021
            </p>
            <button className="title" onClick={showWork} value="Rule">
                Rule
            </button>
            <p>
                digital prints on paper <br />
                non-fixed <br />
                2021
            </p>
            <button className="title" onClick={showWork} value="Pushed Out">
                Pushed Out
            </button>
            <p>
                digital prints on paper <br />
                non-fixed <br />
                2021
            </p>
            <button className="title" onClick={showWork} value="Claw Machine Game">
                Claw Machine Game
            </button>
            <p>
                digital prints on paper <br />
                non-fixed <br />
                2021
            </p>
            <button className="title" onClick={showWork} value="Embedded">
                Embedded
            </button>
            <p>
                digital prints on paper <br />
                non-fixed <br />
                2021
            </p>
            </div>



            <div className="year">
            <h3>
                2020
            </h3>
            <button className="title" onClick={showWork} value="After Spider-Man Left">
                After Spider-Man Left
            </button>
            <p>
                digital prints on paper <br />
                non-fixed <br />
                2020
            </p>
            <button className="title" onClick={showWork} value="Contemporary Sunflower">
                Contemporary Sunflower
            </button>
            <p>
                digital prints on paper <br />
                non-fixed <br />
                2020
            </p>
            <button className="title" onClick={showWork} value="Float">
                Float
            </button>
            <p>
                digital prints on paper <br />
                non-fixed <br />
                2020
            </p>
            <button className="title" onClick={showWork} value="Out of Season">
                Out of Season
            </button>
            <p>
                digital prints on paper <br />
                non-fixed <br />
                2020
            </p>
            <button className="title" onClick={showWork} value="Untitled(occupy)">
                Untitled(occupy)
            </button>
            <p>
                digital prints on paper <br />
                non-fixed <br />
                2020
            </p>
            <button className="title" onClick={showWork} value="Vacance in the Museum">
                Vacance in the Museum
            </button>
            <p>
                digital prints on paper <br />
                non-fixed <br />
                2020
            </p>
            <button className="title" onClick={showWork} value="What is Love">
                What is Love
            </button>
            <p>
                digital prints on paper <br />
                non-fixed <br />
                2020
            </p>
            </div>
            

            <div className="year">
            <h3>
                2019
            </h3>
            <button className="title" onClick={showWork} value="Jam Jar Composition">
                Jam Jar Composition
            </button>
            <p>
                mixed media including 18 jam jar, printed paper <br />
                23 x 55 cm <br />
                2019
            </p>
            <button className="title" onClick={showWork} value="Flower and Butterfly">
                Flower and Butterfly
            </button>
            <p>
                digital prints on paper <br />
                non-fixed <br />
                2019
            </p>
            <button className="title" onClick={showWork} value="Frozen Shadow">
                Frozen Shadow
            </button>
            <p>
                digital prints on paper <br />
                non-fixed <br />
                2019
            </p>
            <button className="title" onClick={showWork} value="Untitled(Halli Galli)">
                Untitled(Halli Galli)
            </button>
            <p>
                halli galli game set, macaroon, fabric <br />
                non-fixed <br />
                2019
            </p>
            </div>


            <div className="year">
            <h3>
                2018
            </h3>
            <button className="title" onClick={showWork} value="Future tense Trap">
                Future tense Trap
            </button>
            <p>
                mixed media including flex signboard, sunfilm <br />
                70 x 150 cm <br />
                2018
            </p>
            <button className="title" onClick={showWork} value="The Moment Attracted to Flame">
                The Moment Attracted to Flame
            </button>
            <p>
                instant camera photo <br />
                7 x 5 cm <br />
                2018
            </p>
            <button className="title" onClick={showWork} value="Cook on the Cutting board">
                Cook on the Cutting board
            </button>
            <p>
                mixed media including a cushion, knife, meats, fruits, vegetables <br />
                700 x 1000  cm <br />
                2018
            </p>
            <button className="title" onClick={showWork} value="Does Micro-perspective Show us the Thruth">
                Does Micro-perspective Show us the Thruth
            </button>
            <p>
                digital prints on paper, frame <br />
                30.7 x 64.5 cm <br />
                2018
            </p>
            </div>


            <div className="year">
            <h3>
                2017
            </h3>
            <button className="title" onClick={showWork} value="The Process of Words Becoming Belief">
                The Process of Words Becoming Belief
            </button>
            <p>
                mixed media including a frame, desk, paper, pen <br />
                50 x 70 x 250 cm <br />
                2017
            </p>
            <button className="title" onClick={showWork} value="Minimalize">
                Minimalize
            </button>
            <p>
                mixed media including lock&lock, beach ball <br />
                10,5 x 10.5 x 6 cm <br />
                2017
            </p>
            <button className="title" onClick={showWork} value="Crossroad in Incident">
                Crossroad in Incident
            </button>
            <p>
                digital prints on paper <br />
                14.9 x 19.8 cm <br />
                2017
            </p>
            </div>
        </div>
        <div className="listEmptyBox">
        <div className="year">
            <h3>
                _error_moment
            </h3>
            <button className="title" onClick={showWork} value="error_1">
                error_1
            </button>
            <p>
                captured image <br />
                non-fixed <br />
                2021
            </p>
            <button className="title" onClick={showWork} value="error_2">
                error_2
            </button>
            <p>
                captured image <br />
                non-fixed <br />
                2021
            </p>
            <button className="title" onClick={showWork} value="error_3">
                error_3
            </button>
            <p>
                captured image <br />
                non-fixed <br />
                2021
            </p>
            <button className="title" onClick={showWork} value="error_4">
                error_4
            </button>
            <p>
                captured image <br />
                non-fixed <br />
                2021
            </p>
            <button className="title" onClick={showWork} value="error_5">
                error_5
            </button>
            <p>
                captured image <br />
                non-fixed <br />
                2021
            </p>
            <button className="title" onClick={showWork} value="error_6">
                error_6
            </button>
            <p>
                captured image <br />
                non-fixed <br />
                2021
            </p>
            <button className="title" onClick={showWork} value="error_7">
                error_7
            </button>
            <p>
                captured image <br />
                non-fixed <br />
                2021
            </p>
            <button className="title" onClick={showWork} value="error_8">
                error_8
            </button>
            <p>
                captured image <br />
                non-fixed <br />
                2021
            </p>
            <button className="title" onClick={showWork} value="error_9">
                error_9
            </button>
            <p>
                captured image <br />
                non-fixed <br />
                2021
            </p>
            <button className="title" onClick={showWork} value="error_10">
                error_10
            </button>
            <p>
                captured image <br />
                non-fixed <br />
                2021
            </p>
            </div>
        </div>
      </main>
  )
};

export default ArtworkList;