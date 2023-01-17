import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News';
import { BrowserRouter as Router,Routes, Route,} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

export default class App extends Component {

  state = {
    progress:0
  }

  setProgress = (progress)=>{
    this.setState({progress: progress})
  }
  render() {
    return (
      <>
      <Router>
      <Navbar/>
      <LoadingBar
        height={3}
        color='#f11946'
        progress={this.state.progress} 
      />

      <Routes>
      {/* <Route path="/about"></Route> */}
      <Route exact path="/science" element={<News  setProgress={this.setProgress} key="science" country= "in" pageSize={6} category= 'science'/>} />
      <Route exact path="/business" element={<News  setProgress={this.setProgress} key="business" country= "in" pageSize={6} category= 'business'/>} />
      <Route exact path="/entertainment" element={<News  setProgress={this.setProgress} key="entertainment" country= "in" pageSize={6} category= 'entertainment'/>} />
      <Route exact path="/general" element={<News  setProgress={this.setProgress} key="general" country= "in" pageSize={6} category= 'general'/>} />
      <Route exact path="/health" element={<News  setProgress={this.setProgress} key="health" country= "in" pageSize={6} category= 'health'/>} />
      <Route exact path="/sports" element={<News  setProgress={this.setProgress} key="sports" country= "in" pageSize={6} category= 'sports'/>} />
      <Route exact path="/technology" element={<News  setProgress={this.setProgress} key="technology"country= "in" pageSize={6} category= 'technology'/>} />

      
      </Routes>

      </Router> 
      </>
    )
  }
}