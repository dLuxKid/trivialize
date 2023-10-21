import React, { useState } from "react";

import OpeningHeader from "../components/opening-header";

import Button from "../components/ui/btn";

import GetStarted from "../components/landing-page-steps/get-started";
import NoOfRounds from "../components/landing-page-steps/rounds";
import StartGame from "../components/landing-page-steps/start-game";

const View = {
    '0': <GetStarted />,
    '1': <NoOfRounds />,
    '2': <GetStarted />,
    '3': <GetStarted />,
    '4': <GetStarted />,
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

    return (
        <div className="w-full min-h-screen px-[7.5%] py-[5%]">
            <OpeningHeader />
            <div className="mt-12 w-full flex-1 h-full flex items-center justify-between flex-col gap-16 p-12 bg-main-accent rounded-xl">
                {CurrentView}

                {Number(currentStep) === 0 &&
                    <div onClick={handleNext} className="-mt-6">
                        <Button text='Get Started' bg='bg-main-primary' />
                    </div>
                }

                {
                    !!Number(currentStep) &&
                    <div className="w-full flex items-center justify-between gap-12">
                        <div onClick={handlePrev}>
                            <Button text="previous" bg="bg-main-info" />
                        </div>
                        <div onClick={handleNext}>
                            <Button text="next" bg="bg-main-primary" />
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}
