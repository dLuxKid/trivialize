import { PlayersState, randomColors } from "../pages/game-page"
import Button from "./btn"

interface Props {
    players: { [key: string]: number[] }
    playerState: PlayersState
    addCorrectPoint: (name: string) => void
    addBonusPoint: (name: string) => void

}

export default function ScoringTable({ players, playerState, addBonusPoint, addCorrectPoint }: Props) {
    return (
        <table>
            <thead>
                <tr>
                    {Object.keys(players).map((playerName, index) => (
                        <th key={index} style={{ backgroundColor: randomColors[index], color: '#fff' }}>
                            {playerName}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                <tr>
                    {Object.keys(players).map((playerName, index) => (
                        <td key={index}>
                            <div className="my-1">
                                <Button
                                    text="Correct"
                                    bg="bg-main-primary"
                                    onClick={() => addCorrectPoint(playerName)}
                                    disabled={playerState[playerName]?.clickedCorrectScoreBtn}
                                />
                            </div>
                            <div className="my-1">
                                <Button
                                    text="Bonus"
                                    bg="bg-main-accent"
                                    onClick={() => addBonusPoint(playerName)}
                                    disabled={playerState[playerName]?.clickedBonusScoreBtn}
                                />
                            </div>
                        </td>
                    ))}
                </tr>
            </tbody>
        </table>
    )
}
