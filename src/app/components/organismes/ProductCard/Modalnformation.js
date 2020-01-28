import React from 'react';
import {  Modal } from '../../molecules';
import { Text } from '../../atoms';
export const ModalInformation = ({ item }) => {
  const { title, isbn, synopsis } = item;
  return (
    <Modal.LARGE id={isbn} title={title}>
      <Text.NORMAL>{synopsis}</Text.NORMAL>
    </Modal.LARGE>
  );
};
