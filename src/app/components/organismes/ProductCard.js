import React from "react";
import { ProductImage } from '../atoms/image/Image'
import Card, { CardHeader, CardBody } from '../molecules/Card/index'

const Content = ({ item }) => (
  <div className="col-sm">
    <CardHeader {...item} /><br />
    <CardBody item={item} />
  </div>
)
const ProductCard = ({ item }) => (
    <Card>
      <ProductImage {...item} grid="col-sm-2"/>
      <Content item={item} />
    </Card>
);
export default ProductCard;

