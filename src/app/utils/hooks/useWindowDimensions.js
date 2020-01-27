import { useState, useEffect, useCallback } from 'react';
let isMobile;
let isTablet;
export default function useWindowDimensions() {

    const hasWindow = typeof window !== 'undefined';
    const getWindowDimensions = useCallback(() => {
        const width = hasWindow ? window.innerWidth : null;
        const height = hasWindow ? window.innerHeight : null;
        isTablet = width <= 1024 && width > 640
        isMobile = width <= 640
        return {
            width,
            height,
            isMobile
        }
    },[hasWindow])
   
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    useEffect(() => {
        if (hasWindow) {
            function handleResize() {
                setWindowDimensions(getWindowDimensions());
            }

            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }
    }, [hasWindow, getWindowDimensions]);

    return windowDimensions;
}
export { isMobile, isTablet }