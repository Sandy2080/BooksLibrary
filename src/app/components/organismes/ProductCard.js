import React, { Fragment}  from "react";
import { ProductImage } from '../atoms/image/Image'
import { CardHeader, CardBody } from '../molecules/Card/index'

const Content = ({ item }) => (
  <div className="col-sm">
    <CardHeader {...item} /><br />
    <CardBody item={item} />
  </div>
)

const ProductCard = ({ item }) => (
  <Fragment>
    <div className="card">
      <div className="card-body">
        <div className="row">
          <ProductImage {...item} grid="col-sm-2"/>
          <Content item={item} />
        </div>
      </div>
    </div>
    <br />
  </Fragment>
);
export default ProductCard;

