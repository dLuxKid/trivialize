import React, { useState } from "react";
import { useGameStore } from "../../store";

export default function NoOfRounds() {
    const rounds = useGameStore(state => state.numberOfRounds)
    const setRounds = useGameStore(state => state.setNumberOfRounds)

    const [selectedNumber, setSelectedNumber] = useState<number>(rounds);

    const handleNumberChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedNumber(Number(event.target.value));
        setRounds(Number(event.target.value))
    };

    return (
        <div className="w-full">
            <label className="text-lg text-main-white text-start font-medium">Pick the number of rounds</label>
            <select title="select rounds" value={selectedNumber} onChange={handleNumberChange} className="mb-24">
                {Array.from({ length: 6 }, (_, index) => 5 + index).map((number) => (
                    <option key={number} value={number}>
                        {number}
                    </option>
                ))}
            </select>
        </div>
    )
}
