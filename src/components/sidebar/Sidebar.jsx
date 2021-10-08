import React from 'react'
import './sidebar.css'
import {Timeline,
        TrendingUp,
        Apps,
        PersonOutline,
        Storefront,
        Payment,
        BarChart,
        MailOutline,
        ChatBubbleOutline,
        DynamicFeed,
        ErrorOutline,
        WorkOutline} from '@material-ui/icons';
import { Link } from 'react-router-dom';

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                        <ul className="sidebarList">
                            <Link to="/" className="Link">
                            <li className="sidebarListItem" >
                                <Apps className="sidebarIcon"/>
                                Home
                            </li>
                            </Link>
                            <li className="sidebarListItem">
                                <Timeline className="sidebarIcon"/>
                                Analytics
                            </li>
                            <li className="sidebarListItem">
                                <TrendingUp className="sidebarIcon"/>
                                Sales
                            </li>
                        </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Quick Menu</h3>
                        <ul className="sidebarList">
                            <Link to="/users" className="Link">
                                <li className="sidebarListItem" >
                                    <PersonOutline className="sidebarIcon"/>
                                    Users
                                </li>
                            </Link>
                            <Link to="/products" className="Link">
                            <li className="sidebarListItem ">
                                <Storefront className="sidebarIcon"/>
                                Products
                            </li>
                            </Link>
                            <Link to="/transactions" className="Link">
                            <li className="sidebarListItem">
                                <Payment className="sidebarIcon"/>
                                Transactions
                            </li>
                            </Link>
                            <Link to="/reports" className="Link">
                            <li className="sidebarListItem">
                                <BarChart className="sidebarIcon"/>
                                Reports
                            </li>
                            </Link>
                        </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Notifications</h3>
                        <ul className="sidebarList">
                            <li className="sidebarListItem" >
                                <MailOutline className="sidebarIcon"/>
                                Mail
                            </li>
                            <li className="sidebarListItem">
                                <DynamicFeed className="sidebarIcon"/>
                                Feedback
                            </li>
                            <li className="sidebarListItem">
                                <ChatBubbleOutline className="sidebarIcon"/>
                                Messages
                            </li>
                        </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Staff</h3>
                        <ul className="sidebarList">
                            <li className="sidebarListItem" >
                                <WorkOutline className="sidebarIcon"/>
                                Manage
                            </li>
                            <li className="sidebarListItem">
                                <Timeline className="sidebarIcon"/>
                                Analytics
                            </li>
                            <li className="sidebarListItem">
                                <ErrorOutline className="sidebarIcon"/>
                                Reports
                            </li>
                        </ul>
                </div>
            </div>
        </div>
    )
}
