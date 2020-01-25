import React from "react";
import { Text } from "../../atoms/text";

export const CardBody = ({ item }) => {
  const { synopsis } = item
  return (<Text.TRUNCATED className="synopsis">{synopsis}</Text.TRUNCATED>)
}
