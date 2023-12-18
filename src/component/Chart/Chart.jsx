import React from "react";
// import "./chart.css";
import { styled } from "styled-components";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// 스타일 컴포넌트로 안에서 css 불러주고
const ChartComp = styled.div`
  .chart {
    margin: 20px;
    padding: 20px;

    border-radius: 10px;
    /* border: 1px solid blue; */
    background-color: white;
    .chartTitle {
      margin-bottom: 30px;
      font-weight: 600;
      font-size: 1.3rem;
      color: #333;
    }
  }
  /* tooltip에서 사용하는 태그들이 관리자도구로 확인해보니까 p, span 태그여서 안쪽에서 선언해서 색 바꿔줬어요 */
  /* 전역스타일에서 기본 색을 white로 해뒀는데 이런식으로 어디 내부에 있는 태그다라는게 인식되게 해서 */
  /* 그쪽에서 바꿔주면 색 바껴용! */
  /* chart.css는 삭제해주세요 (갑자기 지워져 있으면 당황할까봐 그냥 뒀어용) */
  p {
    color: #333;
  }

  span {
    color: #333;
  }
`;

export default function Chart() {
  const data = [
    {
      name: "1월",
      monthlyUser: 50,
    },
    {
      name: "2월",
      monthlyUser: 20,
    },
    {
      name: "3월",
      monthlyUser: 40,
    },
    {
      name: "4월",
      monthlyUser: 30,
    },
    {
      name: "5월",
      monthlyUser: 15,
    },
    {
      name: "6월",
      monthlyUser: 55,
    },
    {
      name: "7월",
      monthlyUser: 60,
    },
    {
      name: "8월",
      monthlyUser: 0,
    },
    {
      name: "9월",
      monthlyUser: 70,
    },
    {
      name: "10월",
      monthlyUser: 30,
    },
    {
      name: "11월",
      monthlyUser: 10,
    },
    {
      name: "12월",
      monthlyUser: 100,
    },
  ];

  return (
    <ChartComp>
      <div className="chart">
        <h4 className="chartTitle">월별 회원가입 현황</h4>
        {
          <ResponsiveContainer
            width="100%"
            aspect={4 / 1.5} // aspect 는 width / height 의 비율을 지정
          >
            <LineChart data={data}>
              {/* XAxis에 domain 속성 추가 */}
              <XAxis
                dataKey="name"
                stroke="var(--GREY)"
                domain={["1월", "12월"]}
                tickCount={12}
              />
              <Line type="monotone" dataKey="monthlyUser" />
              <YAxis
                stroke="var(--GREY)"
                // tickCount 속성을 사용하여 눈금 간격을 지정
                tickCount={6}
                // tick 속성을 사용하여 텍스트 스타일 지정
                tick={{ fontSize: 12, fontWeight: "bold", fill: "var(--GREY)" }}
              />
              {/* tooltip에 같은 내용 반복으로 나와서 주석처리 했어요 */}
              {/* <Line type="monotone" dataKey="monthlyUser" /> */}
              {/* Tooltip 컴포넌트에 position 속성 추가 */}
              <Tooltip
                position={{ y: -20 }}
                wrapperStyle={{ pointerEvents: "all" }}
                contentStyle={{
                  color: "var(--GREY)",
                  minHeight: "60px",
                  padding: "10px",
                }} // Tooltip 크기 조절
                offset={20} // 위치 조절
              />
              <CartesianGrid stroke="var(--GREY)" strokeDasharray="5 5" />
            </LineChart>
          </ResponsiveContainer>
        }
      </div>
    </ChartComp>
  );
}