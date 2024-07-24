import React from "react";
import './Solution.css';
import '../App.css';
import { Link } from 'react-router-dom';

const Solution = () => {
    return (
        <div className="wrap">
            <Inbody />
            <Recom />
            <Comp />
            <Footer />
        </div>
    );
}

function Inbody() {
    return (
        <div style={{marginTop: "30px"}}>
            <div className="wrap-center">
                <div className="header" style={{display: "flex", justifyContent: "space-between"}}>
                    <div className="headerTitle"><h2 style={{display: "inline-block"}}>인바디 분석 그래프</h2></div>
                    <div className="detailBtn">
                        <button>
                            <Link to={'/pages/detail'} style={{textDecoration: "none", color: "white", display:"inline-block"}}>상세 분석 & 나의 히스토리 확인하기</Link>
                        </button>
                    </div>
                </div>

                <div className="body">
                    <div style={{width: "800px", height: "300px", backgroundColor: "white", display: "inline-block"}}></div>
                </div>

            </div>
        </div>
    )
}

function Recom() {
    return (
        <div>
            <div className="wrap-center">
                <div className="header">
                    <div className="headerTitle">
                        <h2>추천 솔루션</h2>
                    </div>
                </div>
                
                <div className="detail">
                    <p className="workout">현재 고도 비만 상태이므로, 저강도 유산소 3:무산소 7의 비율로 운동을 추천드립니다</p>
                    <p className="diet">식단의 경우, 600-700kcal 정도를 섭취하시고 간식은 줄여주세요</p>
                </div>
                <div className="container">
                    <div className="item">추천운동1</div>
                    <div className="item">추천운동2</div>
                    <div className="item">추천운동3</div>
                    <div className="item">추천식단1</div>
                    <div className="item">추천식단2</div>
                    <div className="item">추천식단3</div>
                </div>
            </div>
        </div>
    )
}

function Comp() {
    return (
        <div className="wrap-center">
            <div className="header">
                <div className="headerTitle">
                    <h2>집합군 비교 분석</h2>
                </div>
            </div>

            <div className="bodyChart">
                <div className="bodyText">
                    <p>비슷한 몸 상태를 가진 분들 중 상위 30%에 위치해있습니다</p>
                </div>
            
                <div className="bodyGraph" style={{width: "600px", height: "200px", backgroundColor: "white", display: "inline-block"}}></div>
            </div>

            <div className="otherRecom">
                <p>회원님과 비슷한 스펙을 가진 다른 회원님들은 이런 운동과 식단을 병행하고 있습니다</p>
                <div className="container2">
                    <div className="item">회원1</div>
                    <div className="item">회원2</div>
                    <div className="item">회원3</div>
                    <div className="item">회원4</div>
                    <div className="item">회원5</div>
                </div>
            </div>
            
        </div>
    )
}

function Footer() {
    return (
        <div style={{height: "200px"}}>
        </div>
    )
}

export default Solution;