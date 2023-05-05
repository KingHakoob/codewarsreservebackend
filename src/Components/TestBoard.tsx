import TESTINGUserInfo from "./TESTINGUserInfo/TESTINGuserinfo";
import { GetCodeWarsUserData } from "../Services/DataService";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function TestBoard() {
    let navigate = useNavigate();

    const [username, setUsername] = useState<string>('');
    
    const handleSubmit = async () => {
        sessionStorage.setItem('UserData', JSON.stringify(await GetCodeWarsUserData(username)))
        navigate("/TESTINGDisplayKata");
    }

    return (
        <div>
            <input type='text' placeholder='Enter Username' onChange={({ target: { value } }) => setUsername(value)} />
            <button onClick={handleSubmit}>Search Kata</button>
        </div>
    );
}