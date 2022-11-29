//Add types to component:

// import { useState } from "react";

// const setValue = (number) => {
//     if (number > 15) {
//         return;
//     }
//     return number + 1;
// };

// export const TypesExample = ({ number }) => {
//     const [counterValue, setCounterValue] = useState(number);
//     const handleClick = () => setCounterValue(setValue(counterValue));

//     if (number <= 5) {
//         return;
//     }

//     return (
//         <div>
//             <button onClick={handleClick}>Add Number</button>
//             <p>{counterValue}</p>
//         </div>
//     );
// };

//How it should work

// import React, { useState } from "react";

// interface TypesExampleProps {
//     number: number;
// }

// const setValue = (number: number): number => {
//     if (number > 15) {
//         return 0;
//     }
//     return number + 1;
// };

// export const TypesExample = ({ number }: TypesExampleProps): JSX.Element => {
//     const [counterValue, setCounterValue] = useState<number>(number);

//     const handleClick = (): void => setCounterValue(setValue(counterValue));

//     if (number <= 5) {
//         return <p>text</p>;
//     }

//     return (
//         <div>
//             <button onClick={handleClick}>Add Number</button>
//             <p>{counterValue}</p>
//         </div>
//     );
// };
