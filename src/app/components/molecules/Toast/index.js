import React, { useEffect }  from 'react';
import PropTypes from 'prop-types';
import { StyledToast } from './styles';
import { Badge, Text } from '../../atoms'

const Styles = {
  position: 'fixed',
  display: 'inline-block',
  bottom: 20,
  right: 20,
  zIndex: '1',
};
const Toast = props => {
  const { title, label, message } = props
  return (
    <StyledToast
      aria-live="polite"
      aria-atomic="true"
      style={Styles}
      className="toast"
      id="toast"
      data-autohide="true">
      <div>
        <div className="toast-header">
          <strong className="mr-auto">{message}</strong>

          <Badge.INFO customColor="#2980b9">
            <Text color="white">{label}</Text>
          </Badge.INFO>
        </div>
        <div className="toast-body">{title}</div>
      </div>
    </StyledToast>
  );
};
Toast.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string,
  label: PropTypes.string
};
export default Toast;