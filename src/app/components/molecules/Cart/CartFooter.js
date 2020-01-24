import React, { Fragment, useEffect  } from "react";
import { StyledFooter } from './styles'
import  Divider  from '../../atoms/divider' 
import { useDispatch, useSelector } from "react-redux";
import { setDiscount } from "../../../lib/actions/shoppingCart";
import {
  CartSubtotalRow,
  CartTotalRow
} from "./_components"

export const CartFooter = () => {
  const props = useSelector(state => ({...state.shoppingCartReducer }));
  const { isPending } = props
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setDiscount())
  }, []) 
return (
  <Fragment>
    {!isPending &&
      <StyledFooter>
        <CartSubtotalRow {...props} />
          <Divider />
        <CartTotalRow {...props} />
      </StyledFooter>}
   </Fragment>
)}