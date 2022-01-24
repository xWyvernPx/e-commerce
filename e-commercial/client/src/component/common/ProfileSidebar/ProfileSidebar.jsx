import React from 'react';
import { Outlet } from 'react-router-dom';
import './sidebar.scss'
function ProfileSidebar() {
  return <div className="profile__page">
      <div className="">
          <div className="profile__sidebar--top">
              <div className="profile__sidebar-ava">
                  <img src="https://scontent.fsgn5-15.fna.fbcdn.net/v/t1.6435-9/167680325_2940176386304476_5438954694978316709_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=xatiZxl6M0QAX9h1K_W&_nc_ht=scontent.fsgn5-15.fna&oh=00_AT86VdALmFSn6DrfHU3UwIuUeTo9xbwcgBiGsmXrpzJKcg&oe=620FF997" alt="" />
              </div>
              <h3 className="profile__sidebar-username">WyvernP</h3>
          </div>
          <div className="profile__sidebar--main">
              <ul className="sidebar">
                  <li className="sidebar__item">
                      <i class="far fa-user"></i> <h3>My Account</h3></li>
                  <li className="sidebar__item"><i class="fas fa-clipboard-list"></i><h3>Orders</h3></li>
                  <li className="sidebar__item"><i class="far fa-heart"></i><h3>Wishlist</h3></li>
                  <li className="sidebar__item"><i class="far fa-bell"></i><h3>Notifications</h3></li>
              </ul>
          </div>
      </div>
      <Outlet/>

  </div>;
}

export default ProfileSidebar;
