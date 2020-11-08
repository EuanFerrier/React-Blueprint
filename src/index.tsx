import React from 'react';
import ReactDOM from 'react-dom';
//import { Provider } from "react-redux";

//import { store } from './globalStore'
import { App } from './app/index'
// require('./Styles/Scss/main.scss')

ReactDOM.render(
    <App />,
    document.getElementById('root'));

  module.hot.accept();


//   ReactDOM.render(
//     <Provider store={store}>
//       <Router>
//         <Switch>
//           <Route exact path='/' component={LoginPage} />
//           {/* <Route exact path='/dashboard' component={Dashboard} /> */}
//         </Switch>
//       </Router>
//     </Provider>,
//     document.getElementById('root'));