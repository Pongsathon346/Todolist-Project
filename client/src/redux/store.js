import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { compose } from 'redux'

import reducer from './reducers'
import mySaga from './sagas'

const sagaMiddleware = createSagaMiddleware()

export default createStore(
    reducer,
    compose(
    applyMiddleware(sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)

sagaMiddleware.run(mySaga)