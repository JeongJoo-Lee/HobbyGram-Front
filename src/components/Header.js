import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <React.Fragment>
      <Div>
        <Font>Hobbygram</Font>
        <Buttondiv>
          <Button style={{ margin: "7px", marginRight: "5px" }}>로그인</Button>
          <Button style={{ margin: "7px", marginRight: "15px" }}>
            회원가입
          </Button>
        </Buttondiv>
      </Div>
    </React.Fragment>
  );
};

export default Header;

const Div = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 60px;
  background-color: #f6f6f6;
`;

const Button = styled.button`
  width: 100px;
  height: 35px;
  margin: 0px;
  border: 0px solid;
  background-color: #ccd6f1;
  border-radius: 10px;
`;

const Buttondiv = styled.div`
  display: flex;
  width: 100%;
  margin: 0px auto;
  justify-content: flex-end;
  align-items: center;
`;

const Font = styled.div`
  font-family: "Lobster", cursive;
  font-size: 40px;
  color: #a445c5;
  margin-left: 15px;
`;