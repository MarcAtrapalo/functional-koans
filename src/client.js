export const order = {
    id: 0,
    lines: [
        {item: 0, amount: 2},
        {item: 1, amount: 5},
        {item: 2, amount: 3},
    ],
    price: {
        amount: 10,
        currency: '€',
    },
};

export const brokenOrder = {
    id: 1,
    lines: [{item: 3, amount: 1}],
    price: {
        amount: 5,
        currency: '€',
    }
};

export const items = [
    {
        id: 0,
        name: 'Twix',
        stock: 5,
    },
    {
        id: 1,
        name: 'Zumo del Mercadona',
        stock: 25,
    },
    {
        id: 2,
        name: 'Crusanitos',
        stock: 9,
    }
];

export function getOrder(orderId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (orderId !== 0) reject('404 Order Not Found');
            resolve(order);
        }, 200);
    });
}

export function getItem(itemId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (itemId < 0 || itemId > 2) reject('404 Item Not Found');
            resolve(items[itemId]);
        }, 100);
    });
}
