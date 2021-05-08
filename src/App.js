import React from 'react'
import {BrowserRouter as Router} from "react-router-dom"
import { Route, Switch } from 'react-router';

import DualForm from "./register/DualForm";
import CardComponent from './Dashboard/CardComponent'
import NewsData from "./user/NewsData";
import Dashboard from './Dashboard/Dashboard'
import {Redirect} from "react-router-dom"
import './index.css'
import Content from './user/Content'
import Header from './user/Header'
import Prevention from "./user/Prevention"
import TableData from './common/TableData'
import FooterUI from './common/FooterUI';
function App() {
  return (
    <div>
       <main>
         <Header />
         <DualForm />
            <Switch>
            <Route exact path="/" component={Content} />
            <Route path="/tableData" component={TableData} />
            <Route path="/news" component={NewsData} />
            <Route path="/prevention" component={Prevention} />
            <Redirect to="/" />
            </Switch>

        </main>
      <FooterUI />
      {/* <Prevention /> */}
    </div>
  )
}

export default App
