import React, { Fragment } from 'react';
import { isMobile, isTablet } from '../../../utils/hooks/useWindowDimensions';
import { CardHeader } from '../../molecules/Card/index';
import { TextTruncate } from '../../molecules';
import { ModalInformation } from "./Modalnformation"

export const ProductInformation = ({ item }) => {
  const { title, isbn, price, synopsis } = item;
  const fontSize = () => {
    if(isTablet) { return '20' }
    if(isMobile) { return '15' }
    return '32'
  }
  
  const readMore = () => {
    window.$(`#${isbn}`).modal('show');
  };
  return (
    <Fragment>
      <CardHeader
        title={title}
        subTitle={isbn}
        badge={price}
        titleFontSize={fontSize()}
        subTitleFontSize={isMobile ? '11' : '13'}
      />
      <TextTruncate action={readMore} limit="100" characterLength="250">
        {synopsis}
      </TextTruncate>
      <ModalInformation item={item} />
    </Fragment>
  );
};
