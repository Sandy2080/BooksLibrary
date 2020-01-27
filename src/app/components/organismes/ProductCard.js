import React, { Fragment, useState } from "react";
import "../../utils/assets"
import { ToastsContainer, ToastsStore, ToastsContainerPosition } from 'react-toasts';
import { useDispatch, useSelector } from "react-redux";
import { isMobile } from '../../utils/hooks/useWindowDimensions';
import { addToCart, updateCart } from "../../lib/actions/shoppingCart";
import { StyledProductCard } from "./styles"
import Card, { CardHeader, BadgeLabel } from '../molecules/Card/index'
import { TextTruncate, Modal } from "../molecules/"
import {
  Text,
  Button, 
  ButtonSize, 
  ButtonTheme,
  ProductImage, 
} from "../atoms"

const AddToCartButton = ({ item, children, isVisible }) => {
  const dispatch = useDispatch()
  const props = useSelector(state => ({
    ...state.shoppingCartReducer,
  }));
  const add = () => {
    dispatch(addToCart(item));
  }
  const update = included => {
    dispatch(updateCart(included[0].id, included[0].quantity + 1));
  }
  const addCart = () => {
    const included = props.items.filter(i => i.details.isbn === item.isbn);
    if (included.length > 0) { return update(included) }
    add(item);
    ToastsStore.info(`${item.title} added to cart`);
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
const ModalInformation = ({ item }) => {
  const { title, isbn, synopsis } = item
  return (
    <Modal.LARGE id={isbn} title={title}>
      <Text.NORMAL>{synopsis}</Text.NORMAL>
    </Modal.LARGE>
  );
};
const ProductInformation = ({ item }) => {
  const { title, isbn, price, synopsis } = item
  const readMore = () => {
    window.$(`#${isbn}`).modal('show');
  }
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


