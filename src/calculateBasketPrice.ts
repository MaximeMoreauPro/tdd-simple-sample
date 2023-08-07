/**
 * No quantity discount is applied by default
 */
export function calculateBasketPrice(items: string[], getQuantityDiscount: GetQuantityDiscount = getDefaultQuantityDiscount): number {
    let basketPrice = 0;

    const groupeItems = groupItems(items);

    for(const [item, quantity] of Object.entries(groupeItems)) {
        basketPrice += calculateItemsPriceInPence(item, quantity, getQuantityDiscount);
    }

    return basketPrice / 100;
}

function getItemUnitPriceInPence(item: string) {
    const itemUnitPrices = new Map<string, number>([
        ['Apple', 35],
        ['Banana', 20],
        ['Melon', 50], 
        ['Lime', 15]]
    );

    return itemUnitPrices.get(item) || 0;
}

function calculateItemsPriceInPence(item: string, quantity: number, getQuantityDiscount: GetQuantityDiscount): number {
    return getItemUnitPriceInPence(item) * getQuantityDiscount(item, quantity);
}

type GetQuantityDiscount = (item: string, quantity: number) => number;

const getDefaultQuantityDiscount: GetQuantityDiscount = (_, quantity) => quantity;

export const getAvailableQuantityDiscount: GetQuantityDiscount = function (item, quantity) {
    if(item === 'Melon') {
        return Math.ceil(quantity / 2);
    }
    return quantity;
}

function groupItems(items: string[]): Record<string, number> {
    const groupedItems: Record<string, number> = {};

    for(let i = 0; i < items.length; i++) {
        groupedItems[items[i]] = (groupedItems[items[i]] || 0) + 1;
    }

    return groupedItems;
}
