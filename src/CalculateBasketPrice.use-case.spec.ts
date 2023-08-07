import { createFixture } from './CalculateBasketPrice.use-case.test-fixture';

describe('Feature: calculate the basket price ', () => {    

    describe('Rule: should calculate the basket price by items quantity and unit price', () => { 
        let fixture: ReturnType<typeof createFixture>;

        beforeEach(() => {
            fixture = createFixture();
        });

        it('should return 0 when no items are passed', () => {
            fixture.givenTheItemsInTheBasketAre([]);
            fixture.whenTheBasketPriceIsCalculated();
            fixture.thenTheBasketPriceIs(0);
        });

        it('should return 0.35 when there is an apple in the basket', () => {
            fixture.givenTheItemsInTheBasketAre(['Apple']);
            fixture.whenTheBasketPriceIsCalculated();
            fixture.thenTheBasketPriceIs(0.35);
        });

        it('should return 0.7 when there are two apples in the basket', () => {
            fixture.givenTheItemsInTheBasketAre(['Apple', 'Apple']);
            fixture.whenTheBasketPriceIsCalculated();
            fixture.thenTheBasketPriceIs(0.7);
        })

        it('should return 0.4 when there are two bananas in the basket', () => {
            fixture.givenTheItemsInTheBasketAre(['Banana', 'Banana']);
            fixture.whenTheBasketPriceIsCalculated();
            fixture.thenTheBasketPriceIs(0.4);
        })

        it('should return 1 when there are two melons in the basket', () => {
            fixture.givenTheItemsInTheBasketAre(['Melon', 'Melon']);
            fixture.whenTheBasketPriceIsCalculated();
            fixture.thenTheBasketPriceIs(1);        
        })

        it('should return 0.3 when there are two limes in the basket', () => {
            fixture.givenTheItemsInTheBasketAre(['Lime', 'Lime']);
            fixture.whenTheBasketPriceIsCalculated();
            fixture.thenTheBasketPriceIs(0.3);     
        })

        it('should return 2.4 when there are two apples, two bananas, two melons and two limes in the basket', () => {
            fixture.givenTheItemsInTheBasketAre(['Apple', 'Banana', 'Melon', 'Lime', 'Apple', 'Banana', 'Melon', 'Lime']);
            fixture.whenTheBasketPriceIsCalculated();
            fixture.thenTheBasketPriceIs(2.4);     
        })
    })

    describe('Rule: should calculate the basket price with discount according to item quantity', () => {
        describe('Rule: buy one melon get one free', () => {
            let fixture: ReturnType<typeof createFixture>;

            beforeEach(() => {
                fixture = createFixture();
            });
            
            it('should return 0.5 when there are two melons in the basket', () => {
                fixture.givenTheItemsInTheBasketAre(['Melon', 'Melon']);
                fixture.givenSomeQuantityDiscountAreAvailable();
                fixture.whenTheBasketPriceIsCalculated();
                fixture.thenTheBasketPriceIs(0.5);     
            });

            it('should return 1 when there are three melons in the basket', () => {
                fixture.givenTheItemsInTheBasketAre(['Melon', 'Melon', 'Melon']);
                fixture.givenSomeQuantityDiscountAreAvailable();
                fixture.whenTheBasketPriceIsCalculated();
                fixture.thenTheBasketPriceIs(1);     
            });

            it('should return 1 when there are four melons in the basket', () => {           
                fixture.givenTheItemsInTheBasketAre(['Melon', 'Melon', 'Melon', 'Melon']);
                fixture.givenSomeQuantityDiscountAreAvailable();
                fixture.whenTheBasketPriceIsCalculated();
                fixture.thenTheBasketPriceIs(1);     
            });
        });

        describe('Rule: buy three limes for the price of two', () => {
            let fixture: ReturnType<typeof createFixture>;

            beforeEach(() => {
                fixture = createFixture();
            });

            it('should return 0.3 when there are three limes in the basket', () => {
                fixture.givenTheItemsInTheBasketAre(['Lime', 'Lime', 'Lime']);
                fixture.givenSomeQuantityDiscountAreAvailable();
                fixture.whenTheBasketPriceIsCalculated();
                fixture.thenTheBasketPriceIs(0.3);     
            });

            it('should return 0.45 when there are four limes in the basket', () => {
                fixture.givenTheItemsInTheBasketAre(['Lime', 'Lime', 'Lime', 'Lime']);
                fixture.givenSomeQuantityDiscountAreAvailable();
                fixture.whenTheBasketPriceIsCalculated();
                fixture.thenTheBasketPriceIs(0.45);     
            });

            it('should return 0.6 when there are five melons in the basket', () => {
                fixture.givenTheItemsInTheBasketAre(['Lime', 'Lime', 'Lime', 'Lime', 'Lime']);
                fixture.givenSomeQuantityDiscountAreAvailable();
                fixture.whenTheBasketPriceIsCalculated();
                fixture.thenTheBasketPriceIs(0.6);   
            });

            it('should return 0.6 when there are six melons in the basket', () => {
                fixture.givenTheItemsInTheBasketAre(['Lime', 'Lime', 'Lime', 'Lime', 'Lime', 'Lime']);
                fixture.givenSomeQuantityDiscountAreAvailable();
                fixture.whenTheBasketPriceIsCalculated();
                fixture.thenTheBasketPriceIs(0.6);   
            });
        });
    })
});