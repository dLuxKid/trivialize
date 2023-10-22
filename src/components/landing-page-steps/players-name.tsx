import { useState } from "react"
import { useGameStore } from "../../store"

export default function InputPlayerNames() {
    const numberOfPlayers = useGameStore(state => state.numberOfPlayers)
    const addPlayer = useGameStore((state) => state.addPlayer)

    const [players, setPlayers] = useState<string[]>(Array(numberOfPlayers).fill(''))
    const [isPlayersAdded, setIsPlayersAdded] = useState<boolean[]>(Array(numberOfPlayers).fill(false))


    const handleChange = (index: number, nameOfPlayer: string) => {
        setPlayers((prevPlayerNames) => {
            const updatedPlayerNames = [...prevPlayerNames];
            updatedPlayerNames[index] = nameOfPlayer;
            return updatedPlayerNames;
        });
    }

    const handleAddPlayer = (index: number) => {
        const playerName = players[index]
        if (playerName) {
            addPlayer(playerName.trim())
            // setPlayers((prevPlayerNames) => {
            //     const updatedPlayerNames = [...prevPlayerNames];
            //     updatedPlayerNames[index] = '';
            //     return updatedPlayerNames;
            // });
            setIsPlayersAdded((PlayerAdded) => {
                const updateIsPlayerAdded = [...PlayerAdded]
                updateIsPlayerAdded[index] = true
                return updateIsPlayerAdded
            })
        }
    }

    return (
        <form className="flex flex-col gap-4 md:gap-6 items-stretch w-full">
            {
                Array.from({ length: numberOfPlayers }).map((_, index) => (
                    <label className="w-full" key={index}>
                        <p className="text-base text-white font-medium pb-2">
                            {isPlayersAdded[index] ? <span className="text-main-success">{players[index]} has been registered</span> : `Enter Player ${index + 1} details`}
                        </p>
                        <div className="relative w-full">
                            <input
                                title="player name"
                                type="text"
                                value={players[index]}
                                onChange={(e) => handleChange(index, e.target.value)}
                            />
                            <button
                                className="py-2 px-4 text-main-white absolute right-0 rounded-xl top-0 bottom-0 bg-main-black disabled:bg-gray-600 disabled:cursor-not-allowed"
                                onClick={() => handleAddPlayer(index)}
                                disabled={isPlayersAdded[index]}
                            >
                                Add Player
                            </button>
                        </div>
                    </label>
                ))
            }
        </form >
    )
}
