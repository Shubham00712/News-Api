import React from 'react'
import Navbar from './Navbar'
import News from './News'
import './App.css';
import { searchNews,showHeadlines } from './action'

class App extends React.Component {
  componentDidMount() {
    const store=this.props.store
    store.subscribe(()=>{
      console.log("updated")
      this.forceUpdate()
    })
    store.dispatch(searchNews("*"))
    store.dispatch(showHeadlines())
    console.log(store.getState())
  }
  render() {
    const { news,newsLoaded,headlinesLoaded,headlines }=this.props.store.getState()
    return (
      <div className="main-container">
        <Navbar dispatch={this.props.store.dispatch}/>
        <News news={news} newsLoaded={newsLoaded} headlinesLoaded={headlinesLoaded} headlines={headlines}/>
      </div>
    );
}
}

export default App;
