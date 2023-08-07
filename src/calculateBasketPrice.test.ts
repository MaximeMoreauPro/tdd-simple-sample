import { calculateBasketPrice } from './calculateBasketPrice';

describe('calculateBasketPrice function that calculates the price of a basket of shopping', () => {    
    describe('Rule: should calculate the basket price by items quantity and unit price', () => { 
        it('should return 0 when no items are passed', () => {
            expect(calculateBasketPrice([])).toBe(0);
        })

        it('should return 0.35 when there is an apple in the basket', () => {
            expect(calculateBasketPrice(['Apple'])).toBe(0.35);
        })

        it('should return 0.7 when there are two apples in the basket', () => {
            expect(calculateBasketPrice(['Apple', 'Apple'])).toBe(0.7);
        })

        it('should return 0.4 when there are two bananas in the basket', () => {
            expect(calculateBasketPrice(['Banana', 'Banana'])).toBe(0.4);
        })

        it('should return 1 when there are two melons in the basket', () => {
            expect(calculateBasketPrice(['Melon', 'Melon'])).toBe(1);
        })

        it('should return 0.3 when there are two limes in the basket', () => {
            expect(calculateBasketPrice(['Lime', 'Lime'])).toBe(0.3);
        })

        it('should return 2.4 when there are two apples, two bananas, two melons and two limes in the basket', () => {
            expect(calculateBasketPrice(['Apple', 'Banana', 'Melon', 'Lime', 'Apple', 'Banana', 'Melon', 'Lime'])).toBe(2.4);
        })
    })
});