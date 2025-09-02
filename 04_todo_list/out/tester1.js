function update(arr, id, updatedData) {
    return arr.map((item) => (item.id === id ?
        { ...item, ...updatedData } : item));
}
const arr = [
    { id: '01', name: 'John', email: 'john@email.com' },
    { id: '02', name: 'Sara', email: 'sara@email.com' },
    { id: '03', name: 'Michael', email: 'michael@email.com' },
];
const id = '01';
const updatedData = { email: 'john1@email.com' };
const result = update(arr, id, updatedData);
console.log(result);
export {};
