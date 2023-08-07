export function calculateBasketPrice(items: string[]): number {
    let basketPrice = 0;

    const groupeItems = groupItems(items);

    for(const [item, quantity] of Object.entries(groupeItems)) {
        basketPrice += calculateItemsPrice(item, quantity);
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

function calculateItemsPrice(item: string, quantity: number): number {
    return getItemUnitPrice(item) * getQuantityDiscount(item, quantity);
}

function getQuantityDiscount(item: string, quantity: number): number {
    if(item === 'Melon') {
        return Math.ceil(quantity / 2);
    }
    return quantity
}

function groupItems(items: string[]): Record<string, number> {
    const groupedItems: Record<string, number> = {};

    for(let i = 0; i < items.length; i++) {
        groupedItems[items[i]] = (groupedItems[items[i]] || 0) + 1;
    }

    return groupedItems;
}
