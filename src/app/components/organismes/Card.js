import React, { Fragment}  from "react";
import { ProductImage } from '../atoms/Image'
import { CardHeader, CardBody } from '../molecules/index'

const Card = ({ item }) => (
  <Fragment>
    <div className="card">
      <div className="card-body">
        <div className="row">
          <div className="col-sm-2">
            <ProductImage item={item} />
          </div>
          <div className="col-sm">
            <CardHeader item={item} />
            <hr />
            <CardBody item={item} />
          </div>
        </div>
      </div>
    </div>
    <br />
  </Fragment>
);
export default Card;

