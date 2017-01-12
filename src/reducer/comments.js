import {  } from '../constants'
import { normalizedComments } from '../fixtures'
import { arrayToMap } from '../helpers'

const defaultState = arrayToMap(normalizedComments)

export default (state = defaultState, action) => {
    const { type, payload, response, error } = action

    switch (type) {

    }

    return state
}