export function getIdGenerator() {
    let counter = 0;
    return function nextId() {
        counter++;
        return counter;
    }
}