import React, { useState } from "react";
import styled from "styled-components";
import useStore from "../../store/store";
import { useNavigate } from "react-router-dom";
const Date = styled.div`
  background-color: #cad6c0;
  border-radius: 15px;
  max-width: 20vw;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  min-height: 2.5vh;
  padding: 0.2rem;
  margin-right: 0.5rem;
`;

const Line = styled.div`
  border: 0.1px solid #cacaca;
`;

const FilterdDiaryList = () => {
  const navigate = useNavigate();
  const goDetail = (id, diary) => {
    navigate(`${id}`, { state: diary });
  };
  const store = useStore();
  const diaries = [
    {
      id: 1,
      title: "힘들어서 한 잔 했습니다",
      date: "2020-01-01",
      emotion: "sad",
      content:
        "하... 인생이 많이 쓰다. 오늘은 술 한 잔 했다. 술이 달게 느껴진다. 진호는 왜 이렇게 잘 마시는거야? 피파 잘 하고 싶다. 가지 덮밥 생각보다 맛있다. Skrrr",
      picture:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRavVXxGrKkOn7bp0JcTSNO8yBlXnw4fihPPg&usqp=CAU",
    },
    {
      id: 2,
      title: "힘들어서 한 잔 했습니다",
      date: "2020-01-01",
      emotion: "sad",
      content:
        "하... 인생이 많이 쓰다. 오늘은 술 한 잔 했다. 술이 달게 느껴진다. 진호는 왜 이렇게 잘 마시는거야? 피파 잘 하고 싶다. 가지 덮밥 생각보다 맛있다. Skrrr",
      picture:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRavVXxGrKkOn7bp0JcTSNO8yBlXnw4fihPPg&usqp=CAU",
    },
    {
      id: 3,
      title: "힘들어서 한 잔 했습니다",
      date: "2020-01-01",
      emotion: "sad",
      content:
        "하... 인생이 많이 쓰다. 오늘은 술 한 잔 했다. 술이 달게 느껴진다. 진호는 왜 이렇게 잘 마시는거야? 피파 잘 하고 싶다. 가지 덮밥 생각보다 맛있다. Skrrr",
      picture:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRavVXxGrKkOn7bp0JcTSNO8yBlXnw4fihPPg&usqp=CAU",
    },
  ];
  if (diaries.length === 0) {
    return (
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Expressionless%20Face.png"
            alt="Expressionless Face"
            width="200"
            height="200"
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          검색 조건에 맞는 일기가 없습니다.
        </div>
      </div>
    );
  }
  const diaryList = diaries.map((diary) => {
    const emotionImageUrl = store.emotions[diary.emotion];
    return (
      <div key={diary.id}>
        <div
          onClick={() => goDetail(diary.id, diary)}
          style={{ display: "flex", alignItems: "center", padding: "0.5rem" }}
        >
          <img
            src={diary.picture}
            style={{
              width: "25vw",
              height: "10vh",
              borderRadius: "20%",
              marginRight: "1rem",
            }}
          ></img>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", paddingBottom: "0.8rem" }}>
              <Date>
                {diary.date.slice(5, 7)}월 {diary.date.slice(8, 10)}일
              </Date>
              <img
                src={emotionImageUrl}
                style={{ height: "4vh", width: "8vw" }}
              />
            </div>
            <div>{diary.title}</div>
          </div>
        </div>
        <Line />
      </div>
    );
  });
  return <div>{diaryList}</div>;
};

export default FilterdDiaryList;
