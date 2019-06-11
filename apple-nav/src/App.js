import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import { navBarData } from './nav-data';
import NavWrapper from './components/NavWrapper';
import SubNav from './components/SubNav';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      links: []
    }
  }

  componentDidMount() {
    this.setState({
      links: navBarData
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <NavWrapper links={this.state.links}/>  
          <Route 
            path='/:product'
            render={(props) => (
              <SubNav 
                {...props}
                links={this.state.links} />
            )}
          />
        </div>
      </div>
    );
  }
}

export default App;
