import React from "react";
import './Solution.css';
import '../App.css';

const Solution = () => {
    return (
        <div className="wrap">
            <Inbody />
            <Recom />
            <Comp />
        </div>
    );
}

function Inbody() {
    return (
        <div>
            <div className="wrap-center">
                <div className="inbodyHeader">
                    <h4 style={{fontSize: 24, textAlign: "left"}}>인바디 분석 그래프</h4>
                    <button style={{color:"white", backgroundColor:"#00BFFF", borderColor:"#00BFFF", width:"240px", height:"32px", borderRadius:"4px"}}>상세 분석 & 나의 히스토리 확인하기</button>
                </div>
                <div className="inbodyGraph">
                    <img src="/Users/minseopark/Desktop/health care project/health/src/components/graph.png" alt="logo"/>
                </div>

            </div>
        </div>
    )
}

function Recom() {
    return (
        <div>
            <div className="wrap-center">
                <h4 style={{fontSize: 24, textAlign: "left"}}>추천 솔루션</h4>
                <div className="detail">
                    <p className="workout">현재 고도 비만 상태이므로, 저강도 유산소 3:무산소 7의 비율로 운동을 추천드립니다</p>
                    <p className="diet">식단의 경우, 600-700kcal 정도를 섭취하시고 간식은 줄여주세요</p>
                </div>
                <div className="recomBlock">
                    <table>
                        <tr>
                            <td className="tBlock">안녕</td>
                            <td className="tBlock">히히</td>
                            <td className="tBlock">그래</td>
                        </tr>
                        <tr>
                            <td className="tBlock">오오</td>
                            <td className="tBlock">근데</td>
                            <td className="tBlock">좋아</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    )
}

function Comp() {
    return (
        <div className="wrap-center">
            <h4 style={{fontSize: 24, textAlign: "left"}}>집합군 비교 분석</h4>
            <p>비슷한 몸 상태를 가진 분들 중 상위 30%에 위치해있습니다</p>
            <img src="/Users/minseopark/Desktop/health care project/health/src/components/graph.png" alt="graph3"></img>
        </div>
    )
}

export default Solution;