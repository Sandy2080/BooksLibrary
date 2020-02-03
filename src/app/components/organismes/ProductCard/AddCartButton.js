import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isMobile } from '../../../utils/hooks/useWindowDimensions';
import { addToCart, updateCart } from '../../../lib/actions/shoppingCart';
import { Button, ButtonSize, ButtonTheme } from '../../atoms';

export const AddToCartButton = React.memo(function AddToCartButton({
  item,
  children,
  isVisible,
  value,
}) {
  const dispatch = useDispatch();
  const props = useSelector(state => ({ ...state.shoppingCartReducer }));
  const { setToastContext } = value;

  const add = () => {
    dispatch(addToCart(item));
  };
  const update = included => {
    dispatch(updateCart(included[0].id, included[0].quantity + 1));
  };
  const updateContext = () => {
    setToastContext({
      title: item.title,
      label: `€${item.price}`,
      message: '1 Book added to cart',
    });
    const timer = setTimeout(() => {
      setToastContext({ title: '', label: '', message: '' });
    }, 4000);
    return () => clearTimeout(timer);
  };
  const addCart = () => {
    updateContext();
    const included = props.items.filter(i => i.details.isbn === item.isbn);
    if (included.length > 0) {
      return update(included);
    }
    add(item);
  };
  const { SMALL, LARGE } = ButtonSize;
  const { ROUNDED } = ButtonTheme;
  return (
    <div>
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
});
