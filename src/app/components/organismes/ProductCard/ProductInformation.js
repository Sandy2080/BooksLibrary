import React, { Fragment } from 'react';
import { isMobile } from '../../../utils/hooks/useWindowDimensions';
import { CardHeader } from '../../molecules/Card/index';
import { TextTruncate } from '../../molecules';
import { ModalInformation } from "./Modalnformation"
import '../../../utils/scripts';

export const ProductInformation = ({ item }) => {
  const { title, isbn, price, synopsis } = item;
  const readMore = () => {
    window.$(`#${isbn}`).modal('show');
  };
  return (
    <Fragment>
      <CardHeader
        title={title}
        subTitle={isbn}
        badge={price}
        titleFontSize={isMobile ? '17' : '32'}
        subTitleFontSize={isMobile ? '11' : '13'}
      />
      <TextTruncate action={readMore} limit="100" characterLength="250">
        {synopsis}
      </TextTruncate>
      <ModalInformation item={item} />
    </Fragment>
  );
};
