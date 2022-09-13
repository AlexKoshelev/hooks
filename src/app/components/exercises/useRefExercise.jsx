import React, { useRef } from "react";
import CollapseWrapper from "../common/collapse";
import Divider from "../common/divider";
const UseRefExercise = () => {
    const btnRef = useRef();

    const handleClick = () => {
        btnRef.current.innerText === "Блок"
            ? (btnRef.current.innerText = "text")
            : (btnRef.current.innerText = "Блок");
        btnRef.current.style.height === "40px"
            ? (btnRef.current.style.height = "150px")
            : (btnRef.current.style.height = "40px");
        btnRef.current.style.width === "60px"
            ? (btnRef.current.style.width = "80px")
            : (btnRef.current.style.width = "60px");
    };

    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть блок, у которого заданы ширина и высота. Добавьте
                кнопку, при нажатии которой изменятся следующие свойства:
            </p>
            <ul>
                <li>Изменится содержимое блока на &quot;text&quot;</li>
                <li>высота и ширина станут равны 150 и 80 соответственно</li>
            </ul>
            <div
                ref={btnRef}
                className="bg-primary d-flex flex-row justify-content-center align-items-center rounded"
                style={{
                    height: 40,
                    width: 60,
                    color: "white"
                }}
            >
                <small>Блок</small>
            </div>
            <Divider />
            <button className="btn btn-secondary" onClick={handleClick}>
                Изменить блок
            </button>
        </CollapseWrapper>
    );
};

export default UseRefExercise;
