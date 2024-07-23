import React from "react";

const Solution = () => {
    return (
        <div>
            <Inbody />
            <Recom />
            <Comp />
        </div>
    );
}

function Inbody() {
    return (
        <div className="inbody">
            <h4>인바디 분석 그래프</h4>
            <button>상세 분석 & 나의 히스토리 확인하기</button>
            <p>인바디 분석 그래프 실시간으로 데이터 받아서 들어가야 하는 자리</p>
        </div>
    )
}

function Recom() {
    return (
        <div className="rcm_solution">
            <h4>추천 솔루션</h4>
            <p>현재 상태 설명 줄글. 데이터 받아와야 한다</p>
        </div>
    )
}

function Comp() {
    return (
        <div className="compare">
            <h4>집합군 비교 분석</h4>
            <p>비슷한 몸 상태를 가진 분들 중 상위 30%에 위치해있습니다</p>
        </div>
    )
}

export default Solution;