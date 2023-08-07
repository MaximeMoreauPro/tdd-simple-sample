export function calculateBasketPrice(items: string[]): number {
    let basketPrice = 0;

    for(let i = 0; i < items.length; i++) {
        basketPrice += getItemUnitPrice(items[i]);
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
