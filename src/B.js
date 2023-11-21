import React from 'react';
import { UserConsumer } from './UserContext';
const B = () => {
    return (
        <UserConsumer>
            {
                (username) => {
                    return(
                        <div>
                            <h1>Hello I am {username}</h1>
                        </div>
                    )
                }
            }
        </UserConsumer>
    )
}

export default B;