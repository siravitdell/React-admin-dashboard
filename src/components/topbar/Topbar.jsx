import React from 'react'
import "./topbar.css"
import {NotificationsNone,Language,Settings} from '@material-ui/icons';
import { Link } from 'react-router-dom';

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <Link to="/" className="Link">
                    <span className="logo">
                    Model
                    </span>
                    </Link>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsNone/>
                        <span className="topIconBadge">3</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Language/>
                        <span className="topIconBadge">3</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Settings/>
                    </div>
                    <img src="https://scontent.fphs4-1.fna.fbcdn.net/v/t1.6435-9/136046846_3515681665183851_3347247388032562743_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=bCbUY1bZeeUAX_LU2iH&tn=-XZy7Q5ipnjcyb5y&_nc_ht=scontent.fphs4-1.fna&oh=43b56f9317a7a3db2fa13e9fdebae48c&oe=615E0D6E" alt="" className="topAvater" />
                </div>
            </div>
        </div>
    )
}
