import React, { useState, useEffect } from "react";
// import "./chart.css";
import { styled } from "styled-components";
import Common from "../../util/Common";
import axios from "axios";
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
  p {
    color: #333;
  }

  span {
    color: #333;
  }
`;

export default function Chart() {
  const [monthlyUserData, setMonthlyUserData] = useState([]);

  useEffect(() => {
    const fetchMonthlyUserData = async () => {
      try {
        console.log("월정보 가져오는 중");
        const response = await axios.get(
          Common.MV_DOMAIN + "/member/admin/monthly",
          Common.tokenHeader()
        );
        if (response.data !== null) {
          setMonthlyUserData(response.data);
        }
      } catch (error) {
        console.error("Error fetching monthly user data:", error);
      }
    };

    Common.handleTokenAxios(fetchMonthlyUserData);
  }, []);

  // useEffect(() => {
  //   console.log("montly" + monthlyUserData[0].month);
  // }, [monthlyUserData]);

  return (
    <ChartComp>
      <div className="chart">
        <h4 className="chartTitle">월별 회원가입 현황</h4>
        {
          <ResponsiveContainer
            width="100%"
            aspect={4 / 1.5} // aspect 는 width / height 의 비율을 지정
          >
            <LineChart data={monthlyUserData}>
              {/* XAxis에 domain 속성 추가 */}
              <XAxis
                dataKey="month"
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
