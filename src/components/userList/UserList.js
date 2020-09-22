import React from "react"
import UserItem from "../userItem/UserItem"

class UserList extends React.Component {
    render() {
        return (
            <div className="UserList">
                {this.props.user.map((userObj, i) => {
                    return <UserItem
                        key={i}
                     
                        username={userObj.username}
                        displayName={userObj.displayName}
                        
                        
                    />
                })}


            </div>
        )
    }
}

export default UserList