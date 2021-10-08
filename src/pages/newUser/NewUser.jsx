import React from 'react'
import "./newUser.css"

export default function newUser() {
    return (
        <div className="newUser">
            <h1 className="newUserTitle">New User</h1>
            <form action="" className="newUserForm">
                <div className="newUserItem">
                    <label >Username</label>
                    <input type="text" placeholder="GojoSatoru"/>
                </div>
                <div className="newUserItem">
                    <label >Full name</label>
                    <input type="text" placeholder="Gojo Satoru"/>
                </div>
                <div className="newUserItem">
                    <label >Email</label>
                    <input type="text" placeholder="GojoSatoru@gmail.com"/>
                </div>
                <div className="newUserItem">
                    <label >Password</label>
                    <input type="text" placeholder="12345678"/>
                </div>
                <div className="newUserItem">
                    <label >Phone</label>
                    <input type="text" placeholder="123-456-7890"/>
                </div>
                <div className="newUserItem">
                    <label >Address</label>
                    <input type="text" placeholder="Tokyo, Japan"/>
                </div>
                <div className="newUserItem">
                    <label>Gender</label>
                    <div className="newUserGender">
                        <input type="radio" name="gender" id="male" value="male" />
                        <label for="male">Male</label>
                        <input type="radio" name="gender" id="female" value="female" />
                        <label for="female">Female</label>
                        <input type="radio" name="gender" id="other" value="other" />
                        <label for="other">Other</label>
                    </div>
                </div>
                    <div className="newUserItem">
                        <label>Active</label>
                        <select className="newUserSelect" name="active" id="active">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    <button className="newUserButton">Create</button>
            </form>
        </div>
    )
}
