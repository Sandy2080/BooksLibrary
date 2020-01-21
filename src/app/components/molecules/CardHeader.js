import React, { Fragment } from "react";
import { Title, SubTitle } from "../atoms/Text";

export const CardHeader = ({ item }) => (
  <Fragment>
    <Title>{item.title}</Title>
    <SubTitle>{item.isbn}</SubTitle>
  </Fragment>
);