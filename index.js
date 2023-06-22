import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Hello from './Hello';
import MyHello from './MyHello';
import Swap from './Swap';
import SwapExample from './SwapExample';
import RadioExample from './RadioExample';
import CheckboxExample from './CheckboxExample';
import DropdownlistExample from './DropdownlistExample';
import ListboxExample from './ListboxExample';
import ArrayExample from './ArrayExample';
import ObjectExample from './ObjectExample';
import Welcome from './Welcome';
import SIClass from './SIClass';
import SquareDemo from './SquareDemo';
import UncontrollerComponent from './UncontrolledComponent';
import UnRadioExample from './UnRadioExample';
import MountingExample from './MountingExample';
import UpdatingExample from './UpdatingExample';
import UnmountingExample from './UnmountingExample';
import ListExample from './ListExample';
import MultiDimensionList from './MultiDimensionList';
import CounterExample from './CounterExample';
import A from './A';
import RestAPIGet from './RestAPIGet';
import Restapipost from './RestAPIPost';
import RestAPIPUTExample from './RestAPIPutExample';
import RestAPIDeleteExample from './RestAPIDelete';
import RestAPIGetFunctional from './RestAPIGETFunctional';
import RestAPIPOSTFunctional from './RestAPIPostFunctional';
import Maincomponent from './MainComponent';
import store from './Redux/store';
import MyComponent from './Redux/MyComponent';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <MyComponent />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
