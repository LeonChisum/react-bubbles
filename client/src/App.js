import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Login from "./components/Login";
import { ProtectedRoute } from "./ProtectedRoute/ProtectedRoute"
import "./styles.scss";
import BubblePage from "./components/BubblePage";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Login} />
        <ProtectedRoute path='/bubbles' component={BubblePage} />
      </div>
    </Router>
  );
}

export default App;
