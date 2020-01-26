import React from "react";
import { ProductCard } from "./ProductCard";
import { SubTitle } from "../atoms/text";

const EmptyResults = () => <SubTitle>No Results</SubTitle>;
export const Library = ({ items }) => (
<div>
    {items && items.length ? (
        items.map((result, index)=> <ProductCard key={index} item={result} />)
    ) : (<EmptyResults />)}
</div>);
