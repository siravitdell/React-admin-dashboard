import React from 'react'
import './widgetLg.css'

export default function WidgetLg() {
    const Button = ({ type }) => {
        return <button className={"widgetLgButton " + type}>{type}</button>;
    };
    return (
        <div className="widgetLg">
            <h3 className="widgetLgTitle">Latest transactions</h3>
            <table className="widgetLgTable">
            <tr className="widgetLgTr">
            <th className="widgetLgTh">Customer</th>
            <th className="widgetLgTh">Date</th>
            <th className="widgetLgTh">Amount</th>
            <th className="widgetLgTh">Status</th>
            </tr>
            <tr className="widgetLgTr">
            <td className="widgetLgUser">
                <img
                src="https://scontent.fphs4-1.fna.fbcdn.net/v/t1.6435-9/136046846_3515681665183851_3347247388032562743_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=bCbUY1bZeeUAX_LU2iH&tn=-XZy7Q5ipnjcyb5y&_nc_ht=scontent.fphs4-1.fna&oh=43b56f9317a7a3db2fa13e9fdebae48c&oe=615E0D6E"
                alt=""
                className="widgetLgImg"
                />
                <span className="widgetLgName">Siravit Dontumpai</span>
            </td>
            <td className="widgetLgDate">8 Sep 2021</td>
            <td className="widgetLgAmount">$122.00</td>
            <td className="widgetLgStatus">
                <Button type="Approved" />
            </td>
            </tr>
            <tr className="widgetLgTr">
            <td className="widgetLgUser">
                <img
                src="https://scontent.fphs4-1.fna.fbcdn.net/v/t1.6435-9/136046846_3515681665183851_3347247388032562743_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=bCbUY1bZeeUAX_LU2iH&tn=-XZy7Q5ipnjcyb5y&_nc_ht=scontent.fphs4-1.fna&oh=43b56f9317a7a3db2fa13e9fdebae48c&oe=615E0D6E"
                alt=""
                className="widgetLgImg"
                />
                <span className="widgetLgName">Siravit Dontumpai</span>
            </td>
            <td className="widgetLgDate">8 Sep 2021</td>
            <td className="widgetLgAmount">$122.00</td>
            <td className="widgetLgStatus">
                <Button type="Declined" />
            </td>
            </tr>
            <tr className="widgetLgTr">
            <td className="widgetLgUser">
                <img
                src="https://scontent.fphs4-1.fna.fbcdn.net/v/t1.6435-9/136046846_3515681665183851_3347247388032562743_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=bCbUY1bZeeUAX_LU2iH&tn=-XZy7Q5ipnjcyb5y&_nc_ht=scontent.fphs4-1.fna&oh=43b56f9317a7a3db2fa13e9fdebae48c&oe=615E0D6E"
                alt=""
                className="widgetLgImg"
                />
                <span className="widgetLgName">Siravit Dontumpai</span>
            </td>
            <td className="widgetLgDate">8 Sep 2021</td>
            <td className="widgetLgAmount">$122.00</td>
            <td className="widgetLgStatus">
                <Button type="Pending" />
            </td>
            </tr>
            <tr className="widgetLgTr">
            <td className="widgetLgUser">
                <img
                src="https://scontent.fphs4-1.fna.fbcdn.net/v/t1.6435-9/136046846_3515681665183851_3347247388032562743_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=bCbUY1bZeeUAX_LU2iH&tn=-XZy7Q5ipnjcyb5y&_nc_ht=scontent.fphs4-1.fna&oh=43b56f9317a7a3db2fa13e9fdebae48c&oe=615E0D6E"
                alt=""
                className="widgetLgImg"
                />
                <span className="widgetLgName">Siravit Dontumpai</span>
            </td>
            <td className="widgetLgDate">8 Sep 2021</td>
            <td className="widgetLgAmount">$122.00</td>
            <td className="widgetLgStatus">
                <Button type="Approved" />
            </td>
            </tr>
        </table>
        </div>
    );
}