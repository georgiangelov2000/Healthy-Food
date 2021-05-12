import "./App.css";
import React, { useEffect, useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Register from "./components/Auth/Register/Register";
import Login from "./components/Auth/Login/Login";
import Dashboard from "./components/Dashboard/Dashboard";
import Header from "./components/Header/Header";
import UserContext from "././context/UserContext";
import AddFood from "././components/Foods/AddFood/AddFood";
import FoodDetails from "./components/Foods/FoodDetails/FoodDetails";
import EditFood from "./components/Foods/EditFood/EditFood";
import PublicFood from "./components/Foods/PublicFood/PublicFood";
import FoodByCategory from "./components/Foods/FoodByCategory/FoodByCategory";
import Main from "./components/Main/Main";
import { auth } from "./utils/firebase";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged(setUser);
  }, []);

  const authInfo = {
    isAuthenticated: Boolean(user),
    username: user?.email,
    id: user?.uid,
  };

  return (
    <div>
      <UserContext.Provider value={authInfo}>
        <Header />
        <Switch>
          <Route path="/" exact component={Main}  />
          <Route path="/categories/:category" component={FoodByCategory} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/add-food" component={AddFood} />
          <Route path="/details/:id" component={FoodDetails} />
          <Route path="/edit/:id" component={EditFood} />
          <Route path="/logout" render={()=>{
            auth.signOut();
            return <Redirect to="/" />
          }} />
        </Switch>
      </UserContext.Provider>
    </div>
  );
}

export default App;
