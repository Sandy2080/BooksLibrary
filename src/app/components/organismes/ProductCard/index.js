import React, { useState } from 'react';
import { isMobile } from '../../../utils/hooks/useWindowDimensions';
import { ToastContext } from '../../../lib/ToastContext';
import { StyledProductCard } from './styles';
import Card, {  BadgeLabel } from '../../molecules/Card/index';
import { ProductImage } from '../../atoms';
import { AddToCartButton } from "./AddCartButton"
import { ProductInformation } from "./ProductInformation" 
const ProductCard = ({ item }) => {
  const [isVisible, setVisible] = useState(false);
  const handleOnHover = bool => setVisible(bool);
  return (
    <Card>
      {isMobile && <BadgeLabel badge={item.price} />}
      <ProductImage {...item} grid="col-sm-2" />
      <StyledProductCard
        className="col-sm"
        onMouseOver={() => handleOnHover(true)}
        onMouseLeave={() => handleOnHover(false)}>
          <ProductInformation item={item} />
          <ToastContext.Consumer>
            {value => (
              <AddToCartButton item={item} isVisible={isVisible} value={value}>
                Add to Cart
              </AddToCartButton>
            )}
          </ToastContext.Consumer>
      </StyledProductCard>
    </Card>
  );
};
export default ProductCard;
