import React from 'react';
import PropTypes from 'prop-types';
import { ModalSize } from './types';

const Modal = props => {
  const { title, children, size, id } = props;
  return (
    <div className="modal fade" id={`${id}`} role="dialog" aria-hidden="true">
      <div className={`modal-dialog ${size}`} role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{title}</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">{children}</div>
        </div>
      </div>
    </div>
  );
};

const { SMALL, LARGE, XLARGE } = ModalSize;
Modal.SMALL = props => <Modal size={SMALL} {...props}></Modal>;
Modal.LARGE = props => <Modal size={LARGE} {...props}></Modal>;
Modal.XLARGE = props => <Modal size={XLARGE} {...props}></Modal>;

Modal.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  size: PropTypes.string,
};
export default Modal;
