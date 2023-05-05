import React, { useState } from 'react';
import { GetCodeWarsUserData } from '../../Services/DataService';

export default function TestGetCodeWarsUserData() {
    const [username, setUsername] = useState<string>('');

    const handleSubmit = async () => {
        console.log(await GetCodeWarsUserData(username));
    }

    return (
        <div>
            <h1>Get User Info</h1>
            <input type='text' placeholder='Enter Username' onChange={({target: { value }}) => setUsername(value)}/>
            <button onClick={handleSubmit}>Get User Data</button>
        </div>
    )
}