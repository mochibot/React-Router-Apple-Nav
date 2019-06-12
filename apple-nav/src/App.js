import React from 'react';
import { Route } from 'react-router-dom';
import { navBarData } from './nav-data';

import NavWrapper from './components/NavWrapper';
import SubNav from './components/SubNav';
import Support from './components/Support';

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
          <Route
            path='/Support'
            component={Support} />
        </div>
      </div>
    );
  }
}

export default App;
