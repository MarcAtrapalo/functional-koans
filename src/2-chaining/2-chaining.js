import * as API from '../client';

export function getOrderPrice(orderId) {
    return API.getOrder(orderId)
        .then(o => `${o.price.amount} ${o.price.currency}`)
        .catch(e => '0');
}


export function getItemRemainingStock(orderId, itemId) {
    const hasItemId = (itemId) => (line) => line.item === itemId;

    return API.getOrder(orderId)
        .then(({lines}) => lines && lines.length > 0 ? lines.find(hasItemId(itemId)) : null)
        .then(line => {
            const orderedItems = line ? line.amount : 0;
            return line
                ? API.getItem(line.item).then(item => item.stock - orderedItems)
                : 0;
        });
}
