import React, { Fragment, useState } from "react";
import { ToastsContainer, ToastsStore, ToastsContainerPosition } from 'react-toasts';
import { useDispatch } from "react-redux";
import { isMobile } from '../../utils/hooks/useWindowDimensions';
import { addToCart } from "../../lib/actions/shoppingCart";
import { StyledProductCard } from "./styles"
import Card, { CardHeader, BadgeLabel } from '../molecules/Card/index'
import {
  Button, 
  ButtonSize, 
  ButtonTheme,
  ProductImage, 
  Text 
} from "../atoms"

const AddToCartButton = ({ item, children, isVisible }) => {
  const dispatch = useDispatch()
  const addCart = () => {
    ToastsStore.info(`${item.title} added to cart`)
    dispatch(addToCart(item));
  }
  const { SMALL, LARGE } = ButtonSize
  const { ROUNDED } = ButtonTheme
  return (
    <div>
      <ToastsContainer store={ToastsStore} position={ToastsContainerPosition.BOTTOM_RIGHT} />
      <Button.INFO
        theme={ROUNDED}
        size={isMobile ? LARGE : SMALL}
        action={addCart}
        customColor="#2980b9"
        classNames={`float-right add-cart-button ${isMobile && `btn-block`} ${isVisible &&
          'visible'}`}
      >
        {children}
      </Button.INFO>
    </div>
  );
}
const ProductInformation = ({ item }) => {
  const { title, isbn, price, synopsis } = item
  return (<Fragment>
            <CardHeader 
              title={title} 
              subTitle={isbn} 
              badge={price}
              titleFontSize={isMobile ? "17" : "32"} 
              subTitleFontSize={isMobile ? "11" : "13"} />
            <Text.TRUNCATED>{synopsis}</Text.TRUNCATED>
          </Fragment>)
}
const ProductCard = ({ item }) => {
  const [isVisible, setVisible] = useState(false)
  const handleOnHover = (bool) => setVisible(bool)
  return (<Card>
            {isMobile && <BadgeLabel badge={item.price}/>}
            <ProductImage {...item} grid="col-sm-2" />
            <StyledProductCard className="col-sm " onMouseOver={() => handleOnHover(true)} onMouseLeave={() => handleOnHover(false)}>
              <ProductInformation item={item} />
              <AddToCartButton item={item} isVisible={isVisible}>Add to Cart</AddToCartButton>
            </StyledProductCard>
          </Card>)
}
export default ProductCard;


