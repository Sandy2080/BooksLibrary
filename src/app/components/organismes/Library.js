import React from "react";
import ProductCard from "./ProductCard";
import { Text } from "../atoms/";

const EmptyResults = () => <Text.NORMAL>No Results</Text.NORMAL>;
const Library = ({ items }) => (
<div>
    {items && items.length ? (
        items.map((result, index)=> <ProductCard key={index} item={result} />)
    ) : (<EmptyResults />)}
</div>);
export default Library;