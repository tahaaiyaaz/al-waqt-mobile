# FYI Notes

## Add new action for reducer steps

1. Add a constant in reducerConstants.js ex: SET_STREET: "SET_STREET"
2. Add a new 'case' to the reducer in container.js file.
   ex:
   `case ReducerActions.SET_STREET: return {...state, STREET: action.payload.street }`
3. dispatch an action
   ````dispatch({
     type: ReducerActions.SET_STREET,
     payload: { street: street },
   });```
   ````
