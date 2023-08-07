import { calculateBasketPrice } from './calculateBasketPrice';

describe('calculateBasketPrice function that calculates the price of a basket of shopping', () => {    
    it('should return 0 when no items are passed', () => {
        expect(calculateBasketPrice([])).toBe(0);
    })

    it('should return 0.35 when there is an apple in the basket', () => {
        expect(calculateBasketPrice(['Apple'])).toBe(0.35);
    })

    it('should return 0.7 when there are two apples in the basket', () => {
        expect(calculateBasketPrice(['Apple', 'Apple'])).toBe(0.7);
    })
});