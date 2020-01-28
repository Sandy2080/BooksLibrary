import React, { useEffect, useState, Fragment } from "react";
import { Text } from "../../atoms"

const Loading = () => {
    const [index, setIndex] = useState(0)
    const [loadingDots, set] = useState(".")
    const dots = [".", "..", "..."]
    useEffect(() => {
        const timer = setInterval(() => {
            setIndex(index < dots.length - 1 ? index + 1 : 0)
            set(dots[index])
        }, 500);
        return () => clearTimeout(timer);
    }, [index, dots])

    return (<Fragment>
        <br />
        <Text.NORMAL fontSize="25">Loading {loadingDots}</Text.NORMAL>
    </Fragment>)
}
export default Loading