import React from 'react'

const UserContext = React.createContext()

export default UserContext;

// Context is just like the global variable  when the context is prepared we have to make a provider as well it act as a provider to all the other component we have to wrap the other component using the UserContext provider provide the data

{/* <UserContext>
    <login />
    <card>
        <data />
    </card>
</UserContext> */}