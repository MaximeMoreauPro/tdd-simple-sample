import { GetQuantityDiscount, calculateBasketPrice, getAvailableQuantityDiscount } from './calculateBasketPrice';

/**
 * Create the test fixture for the use case CalculateBasketPrice.
 * It uses the builder pattern to create the fixture 
 * and abstracts the implementation details (calculateBasketPrice and getAvailableQuantityDiscount functions etc.)
 * making the spec/test more readable with BDD style (given, when, then) focusing on code intent/business/why/what insteaf of how.
 * It's a good practice especially for big use cases with a lot of rules.
 */
export function createFixture() {
    let items: string[] = [];
    let basketPrice: number = 0;
    let getQuantityDiscount: GetQuantityDiscount;

    return {
        givenTheItemsInTheBasketAre(itemsAdded: string[]) {
            items = itemsAdded;
        },
        givenSomeQuantityDiscountAreAvailable() {
            getQuantityDiscount = getAvailableQuantityDiscount;
        },
        whenTheBasketPriceIsCalculated(){
            basketPrice = calculateBasketPrice(items, getQuantityDiscount);
        },
        thenTheBasketPriceIs(expectedBasketPrice: number) {
            expect(basketPrice).toBe(expectedBasketPrice);
        },
    };
}
