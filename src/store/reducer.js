import { combineReducers } from 'redux'
import {
    ADD_TODO,
    TOGGLE_TODO,
    SET_VISIBILITY_FILTER,
    VisibilityFilters
} from './action'
const { SHOW_ALL } = VisibilityFilters


// reducer 其实就是个纯函数，用来返回一个新的对象，下面两个函数就是两个reducer
function visibilityFilter(state = SHOW_ALL, action) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter
        default:
            return state
    }
}

function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
        return [
            ...state,
            {
                text: action.text,
                completed: false
            }
        ]
    case TOGGLE_TODO:
        return state.map((todo, index) => {
            if (index === action.index) {
                return Object.assign({}, todo, {
                    completed: !todo.completed
                })
            }
            return todo
        })
    default:
        return state
  }
}

const todoApp = combineReducers({   // 组合reducer
    visibilityFilter,
    todos
})

export default todoApp
