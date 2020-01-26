import React, { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { ProductImage } from '../atoms/image/Image'
import Button, { ButtonSize, ButtonTheme } from '../atoms/button/index'
import { isMobile } from '../../utils/hooks/useWindowDimensions';
import { Text } from "../atoms/text"
import Card, { CardHeader } from '../molecules/Card/index'
import { addToCart } from "../../lib/actions/shoppingCart";
import { StyledProductCard } from "./styles"

const AddToCartButton = ({ item, children, isVisible }) => {
  const dispatch = useDispatch()
  const addCart = () => dispatch(addToCart(item))
  const { SMALL, LARGE } = ButtonSize
  const { ROUNDED } = ButtonTheme
  return (
    <div>
      <Button.INFO
        theme={ROUNDED}
        size={isMobile ? LARGE : SMALL}
        action={addCart}
        customColor="#2980b9"
        classNames={`float-right add-cart-button ${isMobile && `btn-block`} ${isVisible && 'visible'}`}>
        {children}
      </Button.INFO >
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
            <ProductImage {...item} grid="col-sm-2" />
            <StyledProductCard className="col-sm " onMouseOver={() => handleOnHover(true)} onMouseLeave={() => handleOnHover(false)}>
              <ProductInformation item={item} />
              <AddToCartButton item={item} isVisible={isVisible}>Add to Cart</AddToCartButton>
            </StyledProductCard>
        </Card>)
}
export default ProductCard;

