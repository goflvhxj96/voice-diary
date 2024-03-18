import React, { useState } from "react";
import styled from "styled-components";
import Header from "../../components/shop/Header";
import CategoryBar from "../../components/shop/CategoryBar";
import ItemList from "../../components/shop/ItemList";

const Page = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const TopComponents = styled.div`
  display: flex;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  background-color: white;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const opacity = {
  food: 0.5,
  effect: 0.5,
};

export default function ShopPage() {
  const [currentCategory, setcurrentCategory] = useState("food");
  function opacityStyle(category) {
    for (const key in opacity) {
      if (key === category) {
        opacity[key] = 1;
      } else {
        opacity[key] = 0.5;
      }
    }
  }
  opacityStyle(currentCategory);
  function clickHandler(e) {
    setcurrentCategory(e.target.id);
  }
  return (
    <Page>
      <TopComponents>
        <Header />
        <CategoryBar />
      </TopComponents>
      <ItemList />
    </Page>
  );
}
