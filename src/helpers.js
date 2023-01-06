// src/helpers.js
// This file should export two array helper functions:

// choice(items): returns a randomly selected item from array of items
// remove(items, item): removes the first matching item from items, if item exists, and returns it. Otherwise returns undefined.

function choice(items) {
    let idx = Math.floor(Math.random() * items.length)
    let item = items[idx]
    return item;
}

function remove(items, item) {
    return items.filter(i => i !== item);
}

export {choice, remove}