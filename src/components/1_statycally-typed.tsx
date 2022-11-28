//like Java, C#, C++
//podczas kompilacji kodu wykrywamy błędy
//type checking!
//check the types at compile-time
//type script is java script with type checking
//code completion
//typescript zmieniany jest na js w procesie transpilacji (ts -> ts compiler -> js)
//wymusza dyscypline codowania
//polecany dla średnich i duych aplikacji, dla małych wystarczy vanilla js
//szybki refactor
//code suggestions
//info popups
//3. More primitive types

// There is already a small set of primitive types available in JavaScript: boolean, bigint, null, number, string, symbol, and undefined. TypeScript extends this list with a few more, such as:

// any (allows anything — you can loosely type and opt-out of type checking)
// unknown (ensure someone using this type declares what the type is)
// never (it’s not possible that this type could happen)
// void (a function that returns undefined or has no return value).

import React, { FC } from "react";

interface SomeTextProps {
    number: number;
}

const SomeText: FC<SomeTextProps> = ({ number }): JSX.Element => {
    const roundedNumber = Math.round(number);
    console.log("dd");
    return <p>dzień dobry! twój szczęśliwy numer to {roundedNumber}</p>;
};

export default SomeText;
