import React from "react";
import { useDispatch } from "react-redux";
import { ProductImage } from '../atoms/image/Image'
import Button, { ButtonSize, ButtonTheme } from '../atoms/button/index'
import useWindowDimensions from '../../utils/hooks/useWindowDimensions';
import Card, { CardHeader, CardBody } from '../molecules/Card/index'
import { addToCart } from "../../lib/actions/shoppingCart";

const AddToCart = ({ item, children }) => {
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
        classNames={`float-right add-cart-button ${isMobile && `btn-block`}`}
      >
        {children}
      </Button.INFO >
    </div>
  );
}
export const ProductInformation = ({ item }) => (
  <div className="col-sm product-information">
    <CardHeader {...item} margin="10" fontSize="32"/>
    <CardBody item={item} />
    <AddToCart item={item}>Add to Cart</AddToCart>
  </div>
)
const ProductCard = ({ item }) => (
    <Card>
      <ProductImage {...item} grid="col-sm-2"/>
      <ProductInformation item={item} />
    </Card>
);
export default ProductCard;

