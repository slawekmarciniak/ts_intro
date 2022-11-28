import React from "react";
// import { TypesExample } from "./Task";

interface WelcomeProps {
    number: any;
}

export const Welcome = ({ number }: WelcomeProps): JSX.Element => {
    const roundedNumber = Math.round(number);

    return (
        <>
            <p>dzień dobry! twój szczęśliwy numer to {roundedNumber}</p>
            {/* <TypesExample number={number} /> */}
        </>
    );
};
