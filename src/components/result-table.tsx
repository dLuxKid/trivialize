import { PlayersScores, randomColors } from "../pages/game-page";


export default function ResultTable({ playerScore }: { playerScore: PlayersScores }) {
    return (
        <table>
            <thead>
                <tr>
                    <th className="bg-main-secondary text-main-white">Player</th>
                    <th className="bg-main-info text-main-white">Final Score</th>
                </tr>
            </thead>
            <tbody>
                {
                    Object.keys(playerScore).map((playerName, index) => (
                        <tr key={index}>
                            <td style={{ backgroundColor: randomColors[index], color: '#fff' }}>{playerName}</td>
                            <td className="text-lg font-bold text-main-black">{playerScore[playerName]}</td>
                        </tr>
                    ))}
            </tbody>
        </table>
    )
}
