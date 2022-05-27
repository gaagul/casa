import React from 'react'
import Authentication from '../../auth'
import {UncontrolledButtonDropdown,DropdownToggle,DropdownMenu,DropdownItem} from 'reactstrap'




const Profile = () => {
    return (
        <div>
            <UncontrolledButtonDropdown>
                <DropdownToggle caret>
                    Profile
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem header >
                    Header
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem on  onClick={()=>{Authentication.logOut()}}>
                    LogOut
                    </DropdownItem>
                </DropdownMenu>
            </UncontrolledButtonDropdown>
        </div>
    )
}

export default Profile