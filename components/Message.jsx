import React from 'react'
import { connect } from 'react-redux'

const Message = ({message}) =>
  <p>{message}</p>;


const mapMessageStateToProps = (state) => {
    return {
        message: state.message
   }
}
const  AppMessage = connect(mapMessageStateToProps)(Message)

export default AppMessage

