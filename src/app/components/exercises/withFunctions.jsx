import React from "react";
import CardWrapper from "../common/Card";
const withFunctions = (Component) => () => {
    const onLogin = () => {
        localStorage.setItem("auth", "token");
        window.location.reload();
    };
    const onLogOut = () => {
        localStorage.removeItem("auth");
        window.location.reload();
    };

    const isAuth = localStorage.getItem("auth");

    return (
        <>
            <CardWrapper>
                <Component
                    onLogin={onLogin}
                    onLogOut={onLogOut}
                    isAuth={isAuth}
                />
            </CardWrapper>
        </>
    );
};
export default withFunctions;
