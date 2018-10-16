import React from 'react';
import {BrowserRouter as Router, Route,NavLink} from 'react-router-dom';
import ProductListComponent from './ProductListComponent';


const HomeComponent = () =>(
  <div> Home </div>  
)

const UserComponent = () =>(
  <div> User Management  </div>
   
)

const OrderComponent = () =>(
  <div>  Order Management </div>
)

const Links = () =>(
 
    <div className="list ">
        <NavLink className="App-link list" exact activeClassName="active" to="/home">&nbsp; Home  &nbsp;</NavLink> 
        <NavLink className="App-link list" activeClassName="active" to="/user">&nbsp; User Management &nbsp;</NavLink>  
        <NavLink className="App-link list" activeClassName="active" to="/product">&nbsp; Product Management &nbsp;</NavLink> 
        <NavLink className="App-link list" activeClassName="active" to="/order">&nbsp; Order Management &nbsp;</NavLink>  
    </div>
)

const RouterComponent = () =>(
    
   <Router>
      <div>
          <section> 
            <Links />
          </section>
             <hr/>
         <section>
                 <div className="App-main">
                      <Route  path="/home" component={HomeComponent}/>
                      <Route  path="/user" component={UserComponent}/>
                      <Route  path="/product" component={ProductListComponent}/>
                      <Route  path="/order" component={OrderComponent}/>
                  </div>
          </section>
            
         </div>    
         
     
   </Router>
     
)

export default RouterComponent;
