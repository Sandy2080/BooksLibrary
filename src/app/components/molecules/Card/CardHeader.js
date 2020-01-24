import React from "react";
import { Title, SubTitle } from "../../atoms/text/Text";

export const CardHeader = ({ title, isbn }) => (
  <div>
    <Title>{title}</Title>
    <SubTitle>{isbn}</SubTitle>
  </div>
);