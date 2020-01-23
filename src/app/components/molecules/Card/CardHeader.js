import React, { Fragment } from "react";
import { Title, SubTitle } from "../../atoms/text/Text";

export const CardHeader = ({ title, isbn }) => (
  <Fragment>
    <Title>{title}</Title>
    <SubTitle>{isbn}</SubTitle>
  </Fragment>
);