import React from "react";
import styled from "styled-components";

import heart_red from "../image/heart_red.png";
import heart_gray from "../image/heart_gray.png";
import { useSelector } from "react-redux";

const HeartButton = (props) => {
  const is_like = useSelector((state) => state.post.is_like);
  const icon_url = is_like ? heart_red : heart_gray;

  return (
    <React.Fragment>
      <Heart onClick={props._onClick} icon_url={icon_url}></Heart>
    </React.Fragment>
  );
};

const Heart = styled.div`
  width: 1.8rem;
  height: 1.5rem;
  display: flex;
  background: url(${(props) => props.icon_url});
  background-size: cover;
  cursor: pointer;
`;

export default HeartButton;
