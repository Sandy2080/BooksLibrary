import React, { Fragment } from "react";
import { useDispatch } from "react-redux";
import { ProductImage } from '../atoms/image/Image'
import Button, { ButtonSize, ButtonTheme } from '../atoms/button/index'
import useWindowDimensions from '../../utils/hooks/useWindowDimensions';
import { Text } from "../atoms/text"
import Card, { CardHeader } from '../molecules/Card/index'
import { addToCart } from "../../lib/actions/shoppingCart";
import { StyledProductCard } from "./styles"

const AddToCartButton = ({ item, children }) => {
  const dispatch = useDispatch()
  const addCart = () => dispatch(addToCart(item))
  const { width } = useWindowDimensions();
  const isMobile = width < 640
  const { SMALL, LARGE } = ButtonSize
  const { ROUNDED } = ButtonTheme
  return (
    <div>
      <Button.INFO
        theme={ROUNDED}
        size={isMobile ? LARGE : SMALL}
        action={addCart}
        customColor="#2980b9"
        classNames={`float-right add-cart-button ${isMobile && `btn-block`}`}>
        {children}
      </Button.INFO >
    </div>
  );
}
const ProductInformation = ({ item }) => {
  const { title, isbn, synopsis } = item
  const { width } = useWindowDimensions();
  const isMobile = width < 640
  return (<Fragment>
            <CardHeader 
              title={title} 
              subTitle={isbn} 
              margin="10" 
              fontSize={isMobile ? "20" : "32"}/>
            <Text.TRUNCATED>{synopsis}</Text.TRUNCATED>
          </Fragment>)
}
const ProductCard = ({ item }) => (
    <Card>
      <ProductImage {...item} grid="col-sm-2"/>
      <StyledProductCard className="col-sm">
        <ProductInformation item={item} />
        <AddToCartButton item={item}>Add to Cart</AddToCartButton>
      </StyledProductCard>
    </Card>
);
export default ProductCard;

