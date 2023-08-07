export function calculateBasketPrice(items: string[]): number {
    let basketPrice = 0;

    for(let i = 0; i < items.length; i++) {
        if(items[i] === 'Apple') {
            basketPrice += 0.35;
        } else if(items[i] === 'Banana') {
            basketPrice += 0.2;
        }
    }

    return basketPrice;
}
