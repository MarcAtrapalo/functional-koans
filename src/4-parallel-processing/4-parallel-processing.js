import * as API from '../client';

export function getFirstResolvedValue(promises) {
    return Promise.race(promises);
}

export function getMaxResolvedValue(promises) {
    const max = (a, b) => b > a ? b : a;

    return Promise.all(promises)
        .then(results => results.reduce(max));
}

export function getItemsStocks(orderId) {
    const hasId = (id) => (line) => line.item === id;

    return API.getOrder(orderId)
        .then(order => {
            const itemPromises = order.lines.map(line => API.getItem(line.item));
            return Promise.all(itemPromises).then(items => {
                return items.map(item => {
                    const boughtItems = order.lines.find(hasId(item.id)).amount;
                    const remainingStock = item.stock - boughtItems;
                    return {itemId: item.id, remainingStock};
                });
            });
        });
}
