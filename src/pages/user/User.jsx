import React from 'react'
import "./user.css"
import {PermIdentity,CalendarToday,PhoneIphone,MailOutline,LocationOn,Publish} from '@material-ui/icons/';
import { Link } from "react-router-dom"

export default function User() {
    return (
        <div className="user">
            <div className="userTitleContainer">
                <h1 className="userTitle">Edit User</h1>
                    <Link to="/newUser">
                        <button className="userAddButton">Create</button>
                    </Link> 
                <button className="userAddButton">Create</button>
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img src="https://scontent.fphs4-1.fna.fbcdn.net/v/t1.6435-9/136046846_3515681665183851_3347247388032562743_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=bCbUY1bZeeUAX_LU2iH&tn=-XZy7Q5ipnjcyb5y&_nc_ht=scontent.fphs4-1.fna&oh=43b56f9317a7a3db2fa13e9fdebae48c&oe=615E0D6E" 
                        alt="" className="userShowImg" />
                        <div className="userShowTopTitle">
                            <span className="userShowUsername">Siravit Dontumpai</span>
                            <span className="userShowUserTitle">Student</span>
                        </div>
                    </div>
                    <div className="userShowBottom">
                        <span className="userShowTitle">Account Details</span>
                        <div className="userShowInfo">
                            <PermIdentity className="userShowIcon"/>
                        <span className="userShowInfoTitle">siravitmodel</span>
                        </div>
                        <div className="userShowInfo">
                            <CalendarToday className="userShowIcon"/>
                        <span className="userShowInfoTitle">30.01.2001</span>
                        </div>
                        <span className="userShowTitle">Contact Details</span>
                        <div className="userShowInfo">
                            <PhoneIphone className="userShowIcon"/>
                        <span className="userShowInfoTitle">091-xxx-xxxx</span>
                        </div>
                        <div className="userShowInfo">
                            <MailOutline className="userShowIcon"/>
                        <span className="userShowInfoTitle">siravitmodel@gmail.com</span>
                        </div>
                        <div className="userShowInfo">
                            <LocationOn className="userShowIcon"/>
                        <span className="userShowInfoTitle">Phichit, Thailand</span>
                        </div>
                    </div>
                </div>
                <div className="userUpdate">
                <span className="userUpdateTitle">Edit</span>
                <form className="userUpdateForm">
                    <div className="userUpdateLeft">
                    <div className="userUpdateItem">
                        <label>Username</label>
                        <input
                        type="text"
                        placeholder="siravitmodel"
                        className="userUpdateInput"
                        />
                    </div>
                    <div className="userUpdateItem">
                        <label>Full Name</label>
                        <input
                        type="text"
                        placeholder="Siravit Dontumpai"
                        className="userUpdateInput"
                        />
                    </div>
                    <div className="userUpdateItem">
                        <label>Email</label>
                        <input
                        type="text"
                        placeholder="siravitmodel@gmail.com"
                        className="userUpdateInput"
                        />
                    </div>
                    <div className="userUpdateItem">
                        <label>Phone</label>
                        <input
                        type="text"
                        placeholder="091-xxx-xxxx"
                        className="userUpdateInput"
                        />
                    </div>
                    <div className="userUpdateItem">
                        <label>Address</label>
                        <input
                        type="text"
                        placeholder="Phichit, Thailand"
                        className="userUpdateInput"
                        />
                    </div>
                    </div>
                    <div className="userUpdateRight">
                    <div className="userUpdateUpload">
                        <img
                        className="userUpdateImg"
                        src="https://scontent.fphs4-1.fna.fbcdn.net/v/t1.6435-9/136046846_3515681665183851_3347247388032562743_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=bCbUY1bZeeUAX_LU2iH&tn=-XZy7Q5ipnjcyb5y&_nc_ht=scontent.fphs4-1.fna&oh=43b56f9317a7a3db2fa13e9fdebae48c&oe=615E0D6E"
                        alt=""
                        />
                        <label htmlFor="file">
                        <Publish className="userUpdateIcon" />
                        </label>
                        <input type="file" id="file" style={{ display: "none" }} />
                    </div>
                    <button className="userUpdateButton">Update</button>
                    </div>
                </form>
                </div>
            </div>
        </div>
    );
}