import { useState } from "react";
import { useGameStore } from "../../store";


export default function NoOfPlayers() {
    const numberOfPlayers = useGameStore(state => state.numberOfPlayers)
    const setNumberOfPlayers = useGameStore(state => state.setNumberOfPlayers)

    const [selectedNumber, setSelectedNumber] = useState<number>(numberOfPlayers);

    const handleNumberChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedNumber(Number(event.target.value));
        setNumberOfPlayers(Number(event.target.value))
    };

    return (
        <div className="w-full">
            <label className="text-lg text-main-white text-start font-medium">Select the number of players</label>
            <select title="select rounds" value={selectedNumber} onChange={handleNumberChange} className="mb-24">
                {Array.from({ length: 9 }, (_, index) => 2 + index).map((number) => (
                    <option key={number} value={number}>
                        {number}
                    </option>
                ))}
            </select>
        </div>
    )
}
