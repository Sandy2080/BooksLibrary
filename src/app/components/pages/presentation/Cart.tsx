import React, { useEffect, useCallback, Fragment } from 'react';
import { cartStatus } from '../../../lib/reducers/shoppingCart';
import { Loading } from '../../molecules/Text';
import ShoppingCart from '../../organismes/ShoppingCart';
import StatusAlert from '../../organismes/StatusAlert';

export interface ICartProps {
  items: [];
  status: any;
  history: any;
}
const Cart = (
  props: ICartProps & {
    getOffers: (items: any[]) => void;
    approveCart: () => void;
    cancelCheckout: () => void;
    reset: () => void;
  },
) => {
  const { items, getOffers, reset, status, approveCart, cancelCheckout, history } = props;
  const loadOffers = useCallback(() => getOffers(items), [items, getOffers]);

  useEffect(() => {
    loadOffers();
    scrollToTop(status === cartStatus.COMPLETE);
  }, [items, loadOffers, status]);

  const scrollToTop = (bool: Boolean) => {
    if (bool) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    }
  };
  const confirmOrder = () => {
    approveCart();
    const timer = setTimeout(() => {
      reset();
      history.push('/');
    }, 5000);
    return () => clearTimeout(timer);
  };
  return (
    <Fragment>
      <StatusAlert
        status={status}
        approveConfirmOrder={confirmOrder}
        cancelCheckout={cancelCheckout}
      />
      {status === cartStatus.APPROVED ? <Loading /> : <ShoppingCart {...props} />}
    </Fragment>
  );
};
export default Cart;
