import { useEffect, useState } from "react";

import GetStarted from "../components/landing-page-steps/get-started";
import NoOfPlayers from "../components/landing-page-steps/players-length";
import InputPlayerNames from "../components/landing-page-steps/players-name";
import NoOfRounds from "../components/landing-page-steps/rounds";
import ScoringSystem from "../components/landing-page-steps/scoring-system";
import StartGame from "../components/landing-page-steps/start-game";
import OpeningHeader from "../components/opening-header";
import Button from "../components/btn";

import { useGameStore } from "../store";

const View = {
    '0': <GetStarted />,
    '1': <NoOfRounds />,
    '2': <NoOfPlayers />,
    '3': <InputPlayerNames />,
    '4': <ScoringSystem />,
    '5': <StartGame />
}

type steps = '0' | '1' | '2' | '3' | '4' | '5'

export default function LandingPage() {
    const [currentStep, setCurrentStep] = useState<steps>('0')
    const CurrentView = View[currentStep];

    const handlePrev = () => {
        setCurrentStep((current) => {
            const currentStepNumber = Number(current);
            if (currentStepNumber > 0 && currentStepNumber < 6) {
                return (currentStepNumber - 1).toString() as steps;
            } else {
                return current;
            }
        });
    };

    const handleNext = () => {
        setCurrentStep((current) => {
            const currentStepNumber = Number(current);
            if (currentStepNumber < Object.keys(View).length - 1) {
                return (currentStepNumber + 1).toString() as steps;
            } else {
                return current;
            }
        });
    };

    const [disbaleBtn, setDisableBtn] = useState<boolean>(false)
    const numberOfPlayers = useGameStore().numberOfPlayers
    const players = useGameStore().players

    useEffect(() => {
        if (Number(currentStep) === 3) {
            numberOfPlayers !== Object.keys(players).length ? setDisableBtn(true) : setDisableBtn(false)
        }
        if (Number(currentStep) !== 3) setDisableBtn(false)
    }, [currentStep, players])


    return (
        <div className="container">
            <OpeningHeader />
            <div className="mt-12 w-full flex-1 h-full flex items-center justify-between flex-col gap-16 p-12 bg-main-accent rounded-xl">
                {CurrentView}

                {Number(currentStep) === 0 &&
                    <div onClick={handleNext} className="-mt-6">
                        <Button text='Get Started' bg='bg-main-primary' />
                    </div>
                }

                {
                    Number(currentStep) < 5 && !!Number(currentStep) &&
                    <div className="w-full flex items-center justify-between gap-12">
                        <div onClick={handlePrev}>
                            <Button text="previous" bg="bg-main-info" />
                        </div>
                        <div onClick={handleNext}>
                            <Button text="next" bg="bg-main-primary" disabled={disbaleBtn} />
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}
