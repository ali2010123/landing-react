import React from 'react'
import Profile from './Profile'

export default function Profiles(props) {
    let profile = props.data.users.map(g =>{
        return <Profile login= {g.login} name={g.name} />
      })
      return (
        <div>
            {profile}
        </div>
      )
}
