import React from 'react'
import { connect, Provider } from 'react-redux'
import { render } from 'react-dom';
import Content from './components/Content.jsx';
import AppReduxStore from './lib-redux/AppReduxStore'
import AppReduxActions from './lib-redux/AppReduxActions';


const mapStateToProps = (state) => {
    return {
        articles: state.articles,
        articlesApproved: state.articlesApproved,
        message: state.message,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (value) => dispatch(AppReduxActions.submitArticle(value)),
        onApprove:(value) => dispatch(AppReduxActions.approveArticle(value)),
        onRemove: (key) => dispatch(AppReduxActions.removeArticle(key))
    }
}

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(Content)

const App = () =>
    <div>
        <Provider store={AppReduxStore}>
            <AppContainer />
        </Provider>
    </div>   

export default App;