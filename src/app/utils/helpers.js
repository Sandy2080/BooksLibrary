
import { CommercialOffer } from "../models/Offer" 

export const calculateTotal = ($0, $1) => $0 + $1;
export const checkout = (items) => items.map(item => item.details.price).reduce(calculateTotal, 0);

export const calculateTotalBestOffer = (subTotal, offers) => {
    let commercialOffers = offers.map(offer => {
        let commercialOffer = new CommercialOffer(offer)
        commercialOffer.calculate(subTotal, offer)
        return commercialOffer
    });
    commercialOffers = commercialOffers.filter(offer => offer.discountedValue != 0)
    const sorted = commercialOffers.sort(($0, $1) => $0.discountedValue - $1.discountedValue);
    return sorted[0]
};

export const saveToLocalStorage = (key, object) => localStorage.setItem(key, JSON.stringify(object));

export const getLocalStorage = (key) => {
    return JSON.parse(localStorage.getItem(key)) == null ||
        JSON.parse(localStorage.getItem(key)) == undefined ? 
        [] : JSON.parse(localStorage.getItem(key))
 }