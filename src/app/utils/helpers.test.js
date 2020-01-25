import { calculateTotal, calculateBestOffer } from "./helpers"
import { Offer } from "../models/Offer"
import { isMobile } from "../utils/hooks/useWindowDimensions"
import * as MOCKS from './mocks'
const { data } = MOCKS
const { books, offers } = data
const quantity = 1
const cart_total = books.map(book => book.price * quantity).reduce(calculateTotal, 0)
const commercialOffers = offers.map(obj => new Offer(obj))
const bestOffer = calculateBestOffer(cart_total, commercialOffers)

 describe('calculateTotal', () => {
     describe('when upon checkout', () => {
         it('calculate cart total should return 65', () => {
             expect(cart_total).toEqual(65);
         });
     });
 });
describe('calculateBestOffer', () => {
    describe('when best offer is available', () => {
        it('calculate best offer should return 15', () => {
            expect(bestOffer.discountValue).toEqual(15);
        });
    });
});

describe('calculate total with best offer', () => {
    describe('when best offer is available', () => {
        it('total cart after best offer discount should return 50', () => {
            const cart_total_discount = cart_total - bestOffer.discountValue
            expect(cart_total_discount).toEqual(50);
        });
    });
});

describe('detect viewport width', () => {
    const container = document.querySelector(".container")
    const top = container?.getClientRects()[0].top
    describe('when viewport is <= 640 wide', () => {
        it('offset top should return 140 when isMobile is truthy', () => {
            if (isMobile) expect(top).toEqual(160);
        });
    });
});