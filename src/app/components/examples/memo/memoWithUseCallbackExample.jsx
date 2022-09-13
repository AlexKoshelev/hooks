import React, { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";
const LogOutButton = ({ onLogOut }) => {
    useEffect(() => {
        console.log("render btn");
    });

    return (
        <button className="btn btn-primary" onClick={onLogOut}>
            onLogOut
        </button>
    );
};
const MemoizedLogOutButton = React.memo(LogOutButton);
LogOutButton.propTypes = {
    onLogOut: PropTypes.func.isRequired
};

const MemoWithUseCallbackExample = (props) => {
    const [state, setState] = useState(false);
    const hahdleLogAut = useCallback(() => {
        localStorage.removeItem("auth");
    }, [props]);

    return (
        <>
            <button
                className="btn btn-primary"
                onClick={() => setState(!state)}
            >
                render
            </button>
            <MemoizedLogOutButton onLogOut={hahdleLogAut} />
        </>
    );
};

export default MemoWithUseCallbackExample;
