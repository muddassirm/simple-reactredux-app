import React from 'react'
import Button from './Button.jsx';
import List from './List.jsx'

class Content extends React.Component {

    constructor(props) {
        super(props);
        //this.state = {...this.props}; //get initial state
        this.handleClick = this.handleClick.bind(this);
        this.handleRemoveClick = this.handleRemoveClick.bind(this);             
  
    }

    handleRemoveClick(key) {
        this.props.onRemove(key);
    }

    handleClick() {
        if (this.refs.simpletext.value.length > 0) {
            this.props.onSubmit(this.refs.simpletext.value);
            this.props.onApprove(this.refs.simpletext.value);
            this.refs.simpletext.value = ''
        }        
    }
    componentDidMount() {
        //this.unsubscribe = AppReduxStore.subscribe(() =>
        //    this.setState(AppReduxStore.getState())
        //);
    }

    componentWillUnmount() {
        //this.unsubscribe();
    }

    render() {
        var simpleContent =
            <div>
                {this.props.text}
                <br />
                Enter text : <input type="text" ref="simpletext"/>
                <Button handleClick={this.handleClick} text="SUBMIT" />
                <br />
            </div>;

        return simpleContent;
    }

}

export default Content;