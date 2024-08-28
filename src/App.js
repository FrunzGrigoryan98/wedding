import './App.css';
import Countdown from "./Countdown";
import CupImg from "./assets/images/cup.svg";
import RingImg from "./assets/images/ring.svg";
import {useEffect, useState} from "react";
import sss from './assets/sounds/videoplayback.mp3'

function App() {
    const [audio] = useState(new Audio(sss));
    // const [isMusicPlaying, setIsMusicPlaying] = useState(false);

    const playAndPauseMusic = () => {
        if (audio) {
            // if (isMusicPlaying) {
            //     audio.pause();
            //     setIsMusicPlaying(false);
            // } else {
            audio.addEventListener('ended', function () {
                this.currentTime = 0;
                this.play().then(() => {
                    // res
                });
            }, false);

            audio.play();
        }
        // }
    }

    useEffect(() => {
        if (audio) {
            document.addEventListener('click', () => {
                console.log(audio.currentTime);
                if (audio.paused) {
                    audio.play();
                }
            })

            audio.addEventListener('ended', function () {
                this.currentTime = 0;
                this.play().then(() => {
                    // res
                });
            }, false);

            document.addEventListener('visibilitychange', () => {
                if (document.hidden) {
                    audio.pause();
                }
            })
        }
    }, [audio])

    return (
        <div className="App">
            <div className="mainWrapper">
                <div className="banner">
                    <div className="bannerInfo container">
                        <p className="bannerText"> Սիրով հրավիրում ենք Ձեզ՝ մեր հարսանյաց արարողությանը</p>
                        <h3 className="bannerText bold">10 Սեպտեմբեր 2024թ․</h3>
                        <div className="bannerInfoRow">
                            <p className="bannerText">Սիրով՝</p>
                            <h3 className="bannerText bold">Հայկ և Քրիստինե</h3>
                        </div>
                        <div className="countDownRow">
                            <p className="bannerText">Մնացել է</p>
                            <Countdown date={`2024-09-10T17:00:00`}/>
                        </div>
                    </div>
                </div>
                <div className="container section">
                    <div className="dayPlan">
                        <h3 className="dayPlanHead">Օրվա ծրագիր</h3>
                        <div className="dayPlanInner">
                            <div className="dayPlanColumn">
                                <div className="dayPlanRowColumn">
                                    <span className="dayPlanTime">15։00</span>
                                    <div className="dayPlanImgHolder">
                                        <img src={RingImg} alt="" className="dayPlanImg"/>
                                    </div>
                                </div>
                                <div className="dayPlanRowColumn">
                                    <span className="dayPlanTime">17:00</span>
                                    <div className="dayPlanImgHolder">
                                        <img src={CupImg} alt="" className="dayPlanImg"/>
                                    </div>
                                </div>

                            </div>
                            <div className="dayPlanColumn">
                                <div className="dayPlanInfo">
                                    <h3 className="dayPlanTitle">Պսակադրություն</h3>
                                    <p className="dayPlanDesc">Սաղմոսավանք վանական համալիր</p>
                                </div>
                                <div className="dayPlanInfo">
                                    <h3 className="dayPlanTitle">Հարսանեկան խնջույք</h3>
                                    <p className="dayPlanDesc">«Royal Yerevan» ռեստորանային համալիր</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="locationAndAddress">
                        <div className="locationAndAddressRow">
                            <div className="locationRow container">
                                <h3 className="locationName">Սաղմոսավանք վանական համալիր</h3>
                                <img src="https://www.mediahub.am/uploads/images/2023/07/image_750x_64a1c8f6271c0.jpg"
                                     alt="" className="locationImg"/>
                            </div>
                            <div className="addressRow container">
                                <p className="addressText">Հասցեն՝ գյուղ Սաղմոսավան, Արագածոտնի մարզ</p>
                                <div className="mapHolder">
                                    <div className="map" id="map"></div>
                                </div>
                            </div>
                        </div>
                        <div className="locationAndAddressRow">
                            <div className="locationRow container">
                                <h3 className="locationName">«Royal Yerevan» ռեստորանային համալիր</h3>
                                <img
                                    src="https://harsupesa.am/media/k2/items/cache/06611131acf1c8000c76d63729f03566_XL.jpg"
                                    alt="" className="locationImg"/>
                            </div>
                            <div className="addressRow container">
                                <p className="addressText">Հասցեն՝ Բագրևանդ 102</p>
                                <div className="mapHolder">
                                    <div className="map" id="map1"></div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <p className="dayPlanTitle hasMargin">Սիրով կսպասենք Ձեզ</p>
                </div>
            </div>
        </div>
    );
}

export default App;
