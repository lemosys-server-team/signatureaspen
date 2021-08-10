import React, { Component } from "react";
import { Link ,Switch, Route, Redirect, useHistory, useLocation } from "react-router-dom";

import Home from "./home.component";
import Login from "./auth/login.component";
import Register from "./auth/register.component";
import ForgetPassword from "./auth/forget.password.component";
import NotFound from "./error/404.component";
import Auth from "./error/505.component";

import Sidebar from "./admin/layout/sidebar.component";
import Navbar from "./admin/layout/navbar.component";
import Footer from "./admin/layout/footer.component";
import Dashboard from "./admin/dashboard.component";
import MyProfile from "./admin/my/profile.component";
import MySetting from "./admin/my/setting.component";

import UserIndex from "./admin/user/index.component";
import UserAdd from "./admin/user/add.user.component";




{/* Route With Sidebar */}
const RouteWithSidebar = ({ component: Component, ...rest }) => {

  return (
    <Route {...rest} render={props => (
      <>
        <Sidebar />
        <main className="content">
          <Navbar />
          <Component {...props} />
          <Footer  />
        </main>
      </>
    )}
    />
  );

};


export default class Content extends Component {
   
    render() {
        return (
           <Switch>
             {/* home */}
            <Route exact path="/" component={Home} />

             {/* auth */}
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/forgetpassword" component={ForgetPassword} />
            <Route exact path="/auth" component={Auth} />
            
            {/* admin */}
            <RouteWithSidebar exact path="/admin/dashboard" component={Dashboard} />
            <RouteWithSidebar exact path="/admin/myprofile" component={MyProfile} />
            <RouteWithSidebar exact path="/admin/mysetting" component={MySetting} />
            {/* user */}
            <RouteWithSidebar exact path="/admin/user" component={UserIndex} />
            <RouteWithSidebar exact path="/admin/user/add" component={UserAdd} />

            {/* error */}
            <Route path="*" component={NotFound} />

            


          </Switch>
          );
    }
  }