import React, { Fragment } from 'react';
import { StyledText } from "../../atoms/text/styles"
import { Text } from "../../atoms/text"
import Button, { ButtonSize } from '../../atoms/button';

export const TextTruncate = props => {
  const { action, limit, characterLength, children } = props;
return <Text.TRUNCATED length={characterLength} limit={limit} action={action}>{children}</Text.TRUNCATED>;
};

Text.TRUNCATED = props => { 
    const {
        action, 
        limit, 
        length, 
        children
    } = props
    return (
      <Fragment>
        <StyledText {...props} classNames="float-left">
          {children.length > limit && children.substring(0, length)} ... &nbsp;
          {action != null && (
            <Button.LINK size={ButtonSize.SMALL} action={action} classNames="read-more-btn">
              read more
            </Button.LINK>
          )}
        </StyledText>
      </Fragment>
    );
}

