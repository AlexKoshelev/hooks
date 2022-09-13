import React, { useState, useRef, useEffect, useCallback } from "react";
import CardWrapper from "../../common/Card";
import Divider from "../../common/divider";
import SmallTitle from "../../common/typografy/smallTitle";

const UseCallBackExample = () => {
    const [data, setData] = useState({});
    const handleChenge = ({ target }) => {
        setData((prevState) => ({ ...prevState, [target.name]: target.value }));
    };
    const withOutCallback = useRef(0);
    const withCallback = useRef(0);

    const validateWithCallback = useCallback((data) => {
        console.log(data);
    }, []);
    const validate = (data) => {
        console.log(data);
    };
    useEffect(() => {
        validate(data);
        validateWithCallback(data);
    }, [data]);
    useEffect(() => {
        withCallback.current++;
    }, [validateWithCallback]);
    useEffect(() => {
        withOutCallback.current++;
    }, [validate]);
    return (
        <CardWrapper>
            <SmallTitle>Example</SmallTitle>
            <Divider />
            <p>withOutCallback{withOutCallback.current}</p>
            <p>withCallback{withCallback.current}</p>

            <label htmlFor="email" className="form-label">
                email
            </label>
            <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={data.email || ""}
                onChange={handleChenge}
            />
        </CardWrapper>
    );
};

export default UseCallBackExample;
