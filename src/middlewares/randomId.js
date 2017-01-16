import { generateRandomId } from '../helpers'

export default store => next => action => {
    const {generateId, ...rest} = action
    if (!generateId) return next(action)
    next({...rest, randomId: generateRandomId()})
}