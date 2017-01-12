export function arrayToMap(arr) {
    return arr.reduce((acc,entity) => ({...acc, [entity.id]: entity}), {})
}

export function mapToArray(obj) {
    return Object.keys(obj).map(key => obj[key])
}