export function getRemainingStockOrCrash(order, item) {
    const hasId = (id) => (line) => line.item === id;
    const line = order.lines.find(hasId(item.id));
    if (!line) throw new Error('Item not in order');
    return item.stock - line.amount;
}

export function getRemainingStockOrReject(order, item) {
    return new Promise((resolve, reject) => {
        try {
            const remainingStock = getRemainingStockOrCrash(order, item);
            resolve(remainingStock);
        } catch (err) {
            reject('Line not found');
        }
    });
}

export function alternativeGetRemainingStockOrReject(order, item) {
    return new Promise(resolve => resolve(getRemainingStockOrCrash(order, item)))
        .catch((err) => {
            throw new Error('Line not found');
        });
}
