import React, { useState, useMemo, useEffect } from "react";
import CardWrapper from "../../common/Card";
import Divider from "../../common/divider";
import SmallTitle from "../../common/typografy/smallTitle";
function factorial(n) {
    if (n >= 0) {
        return n ? n * factorial(n - 1) : 1;
    } else {
        return "Введите положительное число";
    }
}
function runFactorial(n) {
    console.log("runFactorial");
    return factorial(n);
}

const ComplexCalculateExample = () => {
    const [value, setValue] = useState(10);
    const [otherState, setOtherState] = useState(false);
    const btnColor = otherState ? "primary" : "secondary";
    useEffect(() => {
        console.log("render");
    });
    const fact = useMemo(() => runFactorial(value), [value]);
    return (
        <>
            <CardWrapper>
                <SmallTitle>Кэширование сложных вычислений</SmallTitle>
                <Divider />
                <p>{value}</p>
                <p>{fact}</p>
                <button
                    className="btn btn-primary"
                    onClick={() => {
                        setValue((e) => e + 10);
                    }}
                >
                    Increment
                </button>
                <button
                    className="btn btn-primary"
                    onClick={() => {
                        setValue((e) => e - 10);
                    }}
                >
                    Decrement
                </button>
            </CardWrapper>
            <CardWrapper>
                <SmallTitle>Зависимость от сторонних setState</SmallTitle>
                <Divider />
                <button
                    className={"btn btn-" + btnColor}
                    onClick={() => setOtherState((e) => !e)}
                >
                    Кнопка
                </button>
            </CardWrapper>
        </>
    );
};

export default ComplexCalculateExample;
