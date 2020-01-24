import React from "react";
import { TextTruncate } from "../../atoms/text/Text";

export const CardBody = ({ item }) => {
  const { synopsis } = item
  return (<TextTruncate>{synopsis}</TextTruncate>)
}
