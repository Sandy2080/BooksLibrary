import React from "react";
import { Text, SubTitle } from "../../atoms/text";

export const CardHeader = ({ title, isbn }) => (
  <div>
    <SubTitle margin="10" >{title}</SubTitle>
    <Text.SMALL className="card-subtitle mb-2">isbn: {isbn}</Text.SMALL>
  </div>
);