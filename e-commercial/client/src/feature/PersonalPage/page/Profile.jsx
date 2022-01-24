import React from 'react';
import ProfileSidebar from '../../../component/common/ProfileSidebar/ProfileSidebar';

function Profile() {
  return (
    <div className="profile__card">
        <h3 className="profile__card-title">My profile</h3>
        <div className="profile__devider"></div>
        <div className="profile__main">
            <div className="profile__field profile__username">
                <label className="profile__username--label">Username</label>
                <h4 className="profile__username--value">wyvernp</h4>
            </div>
            <div className="profile__field profile__name">
                <label className="profile__name--label">Name</label>
                <input type="text" className="profile__name--value"/>
            </div>
            <div className="profile__field profile__email">
                <label className="profile__email--label">Email</label>
                <h4 className="profile__field profile__email--value">phonglethanh2@gmail.com<a href="#!" >Change</a></h4>
            </div>
            <div className="profile__field profile__phone">
                <label className="profile__phone--label">Phone</label>
                <h4 className="profile__phone--value">0926782779<a href="#!" >Change</a></h4>
            </div>
            <div className="profile__field profile__gender">
                <label className="profile__gender--label">Gender</label>
                <h4 className="profile__gender--value">wyvernp</h4>
            </div>
            <button className="profile__save">Save</button>
        </div>
    </div>
      )
  ;
}

export default Profile;
