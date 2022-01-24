import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Orders from './Orders';
import Profile from './Profile';
import Wishlist from './Wishlist';

function PersonalPage() {
  return <div>
          
            <Route path="/profile" component={<Profile/>}/>
            <Route path="/wishlist" component={<Wishlist/>}/>
            <Route path="/orders" component={<Orders/>}/>
        
  </div>;
}

export default PersonalPage;
