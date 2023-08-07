#!/usr/bin/env node

import { calculateBasketPrice, getAvailableQuantityDiscount } from './calculateBasketPrice';

const items = process.argv.slice(2);

console.log(`The basket price is £${calculateBasketPrice(items, getAvailableQuantityDiscount)}`);
