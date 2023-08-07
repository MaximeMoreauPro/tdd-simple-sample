import { calculateBasketPrice } from './calculateBasketPrice';

describe('calculateBasketPrice function that calculates the price of a basket of shopping', () => {    
    it('should return 0 when no items are passed', () => {
        expect(calculateBasketPrice([])).toBe(0);
    })
});