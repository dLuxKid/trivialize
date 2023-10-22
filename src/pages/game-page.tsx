import { useEffect, useState } from "react";

import Button from "../components/btn";
import ResultTable from "../components/result-table";

import { useGameStore } from "../store";

import ConfettiExplosion from 'react-confetti-explosion';
import ScoringTable from "../components/scoring-table";

export const randomColors = [
    "#4A90E2",
    "#FF6B6B",
    "#72C8B8",
    "#FFD700",
    "#A040A1",
    "#9C7C46",
    "#4CAF50",
    "#FF5722",
    "#795548",
    "#3F51B5"
];

export type PlayersState = {
    [playerName: string]: {
        clickedCorrectScoreBtn: boolean;
        clickedBonusScoreBtn: boolean;
    };
};

export type PlayersScores = {
    [playerName: string]: number
}

export default function GamePage() {
    const players = useGameStore().players
    const noOfRounds = useGameStore().numberOfRounds
    const scoreMetrix = useGameStore().scoreMetrix
    const addPointToPlayer = useGameStore().updatePlayerScore

    const [gameRound, setGameRound] = useState<number>(1)
    const [playerState, setPlayerState] = useState<PlayersState>({})
    const [gameOver, setGameOver] = useState<boolean>(false)
    const [playerScore, setPlayerScore] = useState<PlayersScores>({})

    useEffect(() => {
        Object.keys(players).forEach((playerName) => {
            setPlayerState((prev) => ({
                ...prev,
                [playerName]: {
                    clickedCorrectScoreBtn: false,
                    clickedBonusScoreBtn: false
                }
            }))
        })
    }, [])

    const addCorrectPoint = (playerName: string) => {
        addPointToPlayer(scoreMetrix.correctPoint, playerName)
        setPlayerState((prev) => ({
            ...prev,
            [playerName]: {
                ...prev[playerName],
                clickedCorrectScoreBtn: true,
            }
        }))
    }

    const addBonusPoint = (playerName: string) => {
        addPointToPlayer(scoreMetrix.bonusPoint, playerName)
        setPlayerState((prev) => ({
            ...prev,
            [playerName]: {
                ...prev[playerName],
                clickedBonusScoreBtn: true
            }
        }))
    }

    const handleNextRound = () => {
        setGameRound(prev => prev + 1)
        Object.keys(players).forEach((playerName) => {
            setPlayerState((prev) => ({
                ...prev,
                [playerName]: {
                    clickedCorrectScoreBtn: false,
                    clickedBonusScoreBtn: false
                }
            }))
        })
    }

    const calculateWinner = () => {
        Object.keys(players).map((playerName) => (
            setPlayerScore((prev) => ({
                ...prev,
                [playerName]: players[playerName].reduce((total, current) => total + current, 0)
            }))
        ))

        setTimeout(() => {
            setGameOver(true)
        }, 500);
    }

    return (
        <div className="container flex items-center justify-center flex-col">
            {
                !gameOver &&
                <p className="text-xl font-semibold text-main-info mb-6">
                    Round {gameRound} of {noOfRounds}
                </p>
            }
            {gameOver && <ConfettiExplosion />}
            <div className="w-full overflow-x-scroll shadow-lg">
                {
                    !gameOver &&
                    <ScoringTable
                        addBonusPoint={addBonusPoint}
                        addCorrectPoint={addCorrectPoint}
                        playerState={playerState}
                        players={players}
                    />
                }
                {
                    gameOver &&
                    <ResultTable playerScore={playerScore} />
                }
            </div>
            <div className="mt-12">
                {noOfRounds > gameRound && <Button text="Next round" onClick={handleNextRound} />}
                {noOfRounds === gameRound && !gameOver && <Button text="Announce Winner" onClick={calculateWinner} />}
            </div>
        </div>
    )
}
