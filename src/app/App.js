import React,{Fragment} from 'react'
import {connect} from 'react-redux'
import Header from './components/header/Header'
import CardDetail from './components/card/CardDetail'

function App(props) {
  return (
    <Fragment>
      <Header/>
      <CardDetail/>
    </Fragment>
  );
}

const mapStateToProps = (state)=>({
  name: state.name
})

const mapDispatchToProps = (dispatch)=>({
  setName: (name)=>dispatch({type: "PRUEBA", payload: name})
})

export default connect(mapStateToProps,mapDispatchToProps)(App);