import React, { CSSProperties } from "react";
import styled from "styled-components";

const Img = styled.div``;

type Props = {
  source: string;
  style?: CSSProperties;
} & typeof defaultProps;

let defaultProps = {
  style: {
    width: 100,
    height: "auto"
  }
};

const Image = ({ source, style }: Props) => {
  return <Img style={style} src={source} />;
};

Image.defaultProps = defaultProps;
export default Image;
