import { useNavigate } from "react-router-dom";
import Button from "../btn";


export default function StartGame() {
    const navigate = useNavigate()
    return (
        <Button text="GET STARTED" onClick={() => navigate('/game')} />
    )
}
