import React from 'react'
import { connect, Provider } from 'react-redux'
import { render } from 'react-dom';
import Content from './components/Content.jsx';
import AppReduxStore from './lib-redux/AppReduxStore'
import AppReduxActions from './lib-redux/AppReduxActions';
import List from './components/List.jsx'

const mapContentStateToProps = (state) => {
    return {
        text : 'A simple redux implmentation with react',
        articles: state.articles,
        articlesApproved: state.articlesApproved,
        message: state.message,
    }
}

const mapSubmittedStateToProps = (state) => {
    return {
        articles: state.articles,
        listHeader: 'Submitted Articles',
    }
}

const mapMessageStateToProps = (state) => {
    return {
        message: state.message
   }
}

const mapApprovalStateToProps = (state) => {
    return {
        articles: state.articlesApproved,
        listHeader: 'Approved Articles',
    }
}

const mapContentDispatchToProps = (dispatch) => {
    return {
        
        onSubmit: (value) => dispatch(AppReduxActions.submitArticle(value)),
        onApprove:(value) => dispatch(AppReduxActions.approveArticle(value)),
        onRemove: (key) => dispatch(AppReduxActions.removeArticle(key))
    }
}

const mapListDispatchToProps = (dispatch) => {
    return {
        onRemove: (key) => dispatch(AppReduxActions.removeArticle(key))
    }
}

const Message = ({message}) =>
  <p>{message}</p>;

const AppContainer = connect(mapContentStateToProps, mapContentDispatchToProps)(Content)
const AppListSubmitted = connect(mapSubmittedStateToProps, mapListDispatchToProps)(List)
const AppListApprovals = connect(mapApprovalStateToProps, mapListDispatchToProps)(List)
const AppMessage  = connect(mapMessageStateToProps)(Message)
const Container = () => (
  <div>
    <AppContainer />
    <AppListSubmitted />
    <AppMessage/>
    <AppListApprovals/>
  </div>
)

const App = () =>
    <div>
        <Provider store={AppReduxStore}>
            <Container />
        </Provider>
    </div>   

export default App;