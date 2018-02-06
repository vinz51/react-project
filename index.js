import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import { logger } from 'redux-logger'
import { apiMiddleware } from 'redux-api-middleware'
import { BrowserRouter as Router, Route, Switch, hashHistory } from 'react-router-dom'

import reducersApp from 'Reducers/index'

import * as Styles from 'Styles/core'

import App from 'Src/App'
import PostCtn from 'Containers/PostCtn'

import Layout from 'Stateless/Layout'

const store = createStore(
    reducersApp,
    applyMiddleware(apiMiddleware, logger)
)

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Layout>
                <Switch>
                    <Route exact path="/" component={App} />
                    <Route path="/post/:id" component={PostCtn} />
                </Switch>
            </Layout>
        </Router>
    </Provider>,
    document.getElementById('root')
)
