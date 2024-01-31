export function getDiscounts () {
    let maxPercentage = 1;
    let discounts = [];
    while (maxPercentage > 0.1 ) {
        let newPercentage = Number((maxPercentage - 0.1).toFixed(2));
        discounts.push(newPercentage);
        maxPercentage = newPercentage
    }
    return discounts
}