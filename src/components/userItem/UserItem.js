import React from "react"
//import { List, Image } from 'semantic-ui-react'
function UserItem(props) {
    return (
    <div className="UserItem">
        <br/>
        UserName: {props.username}
        <br/>
        DisplayName: {props.displayName}
    </div>
    )
}
export default UserItem