/**
 * No quantity discount is applied by default
 */
export function calculateBasketPrice(items: string[], getQuantityDiscount: GetQuantityDiscount = getDefaultQuantityDiscount): number {
    let basketPrice = 0;

    const groupeItems = groupItems(items);

    for(const [item, quantity] of Object.entries(groupeItems)) {
        basketPrice += calculateItemsPrice(item, quantity, getQuantityDiscount);
    }

    return basketPrice;
}

function getItemUnitPrice(item: string) {
    const itemUnitPrices = new Map<string, number>([
        ['Apple', 0.35],
        ['Banana', 0.2],
        ['Melon', 0.5], 
        ['Lime', 0.15]]
    );

    return itemUnitPrices.get(item) || 0;
}

function calculateItemsPrice(item: string, quantity: number, getQuantityDiscount: GetQuantityDiscount): number {
    return getItemUnitPrice(item) * getQuantityDiscount(item, quantity);
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
