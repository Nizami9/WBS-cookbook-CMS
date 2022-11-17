import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import Main from './components/Main';
import Footer from './components/Footer.js'

import React from "react";
 import "./App2.css";
import { client } from "./client";
import Posts from "./components/Posts";

class App extends React.Component {
  constructor(props) {
   super(props) 
    this.state = {
   articles: [],
 };}
 
  componentDidMount() {
    client
      .getEntries()
      .then((response) => {
        console.log(response);

        this.setState({
          articles: response.items,
        });
      })

      .catch(console.error);
      }

      
  render() {
    console.log(process.env.REACT_APP_ROXI);
    return (
      <div className="App">
        <div className="container">
          <header>
            <div className="Header">
              <Header />
            </div>
          </header>
          <main>
            <div className="Navbar">
              <Navbar />
            </div>
            <div className="wrapper">
              <Posts posts={this.state.articles} />
            </div>
          </main>
          <footer>
            <div className='footer'>
              <Footer />
            </div>
          </footer>
        </div>
      </div>
    );
  }
}
export default App;
