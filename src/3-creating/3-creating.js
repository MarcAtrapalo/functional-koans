import * as API from '../client';

export function getOrderDelayed(orderId, millis) {
    return API.getOrder(orderId)
        .then((order) => {
            return new Promise((resolve) => {
                setTimeout(() => resolve(order), millis);
            });
        });
}
