import React from "react";
import { Text, StyledTextSmall, StyledTextBold } from './styles'

const TextTruncate = ({ children }) => (
  <Text>
    <p>{children.length > 100 && children.substring(0, 150)} ...</p>
  </Text>
);
const Title = ({ children }) => <h5 className="card-title">{children}</h5>;
const SubTitle = ({ children }) => (
  <h6 className="card-subtitle mb-2 text-muted">{children}</h6>
);
const TextSmall = ({ children }) => (
  <StyledTextSmall className="text-muted">{children}</StyledTextSmall>
);
const TextBold = ({ children }) => <StyledTextBold>{children}</StyledTextBold>;
export { TextTruncate, Title, SubTitle, TextSmall, TextBold };