import React from "react";
import Card from "../organismes/Card";
import { SubTitle } from "../atoms/Text";

const EmptyResults = () => {
    return <SubTitle>No Results</SubTitle>;
};
const Library = ({ items }) => (
<div>
    {items && items.length ? (
        items.map(result => <Card item={result} />)
    ) : (<EmptyResults />)}
</div>);
export default Library;