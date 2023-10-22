import { useState } from "react"
import { useGameStore } from "../../store"

export default function ScoringSystem() {
    const correctPoint = useGameStore(state => state.scoreMetrix.correctPoint)
    const bonusPoint = useGameStore(state => state.scoreMetrix.bonusPoint)
    const setCorrectPoint = useGameStore(state => state.setCorrectScoreMetrix)
    const setBonusPoint = useGameStore(state => state.setBonusScoreMetrix)

    const [correct, setCorrect] = useState<number>(correctPoint);
    const [bonus, setBonus] = useState<number>(bonusPoint);

    const handleSetBonusScore = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setBonus(Number(event.target.value));
        setBonusPoint(Number(event.target.value))
    };

    const handleSetCorrectScore = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setCorrect(Number(event.target.value));
        setCorrectPoint(Number(event.target.value))
    };

    return (
        <div className="w-full flex items-center justify-center flex-col gap-6">
            <div className="w-full">
                <label className="text-lg text-main-white text-start font-medium">Pick the points for correct answer</label>
                <select title="correct point" value={correct} onChange={handleSetCorrectScore}>
                    {Array.from({ length: 5 }, (_, index) => 1 + index).map((number) => (
                        <option key={number} value={number}>
                            {number}
                        </option>
                    ))}
                </select>
            </div>
            <div className="w-full">
                <label className="text-lg text-main-white text-start font-medium">Bonus point</label>
                <select title="bonus points" value={bonus} onChange={handleSetBonusScore}>
                    {Array.from({ length: 3 }, (_, index) => 1 + index).map((number) => (
                        <option key={number} value={number}>
                            {number}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    )
}
