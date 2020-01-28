import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Loading from './Loading';
import Button, { ButtonSize } from '../../atoms/button';
import { StyledText } from '../../atoms/text/styles';
import { Text } from '../../atoms/text';

const TextTruncate = props => {
  const { action, limit, characterLength, children } = props;
  return (
    <Text.TRUNCATED length={characterLength} limit={limit} actions={action}>
      {children}
    </Text.TRUNCATED>
  );
};
Text.TRUNCATED = props => {
  const { actions, limit, length, children } = props;
  return (
    <Fragment>
      <StyledText {...props} classNames="float-left">
        {children.length > limit && children.substring(0, length)} ... &nbsp;
        {actions != null && (
          <Button.LINK size={ButtonSize.SMALL} action={actions} classNames="read-more-btn">
            read more
          </Button.LINK>
        )}
      </StyledText>
    </Fragment>
  );
};
TextTruncate.propTypes = {
  action: () => {},
  limit: PropTypes.string,
  characterLength: PropTypes.string,
};
export { Loading };
export default TextTruncate;
