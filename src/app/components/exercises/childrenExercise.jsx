import React from "react";
import PropTypes from "prop-types";

import CollapseWrapper from "../common/collapse";

const Wraper = ({ children }) => {
    return React.Children.map(children, (child, i) => {
        return (
            <div key={i} className="d-flex">
                <div className="me-2">{i + 1}</div> {child}
            </div>
        );
    });
};
Wraper.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};
const Wraperv2 = ({ children }) => {
    return React.Children.map(children, (child, i) => {
        return React.cloneElement(child, { order: i + 1 });
    });
};
Wraperv2.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};
const ChildrenExercise = () => {
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть компоненты Списка. Вам необходимо к каждому из них
                добавить порядковый номер, относительно того, как они
                располагаются на странице. Вы можете использовать как{" "}
                <code>React.Children.map</code> так и{" "}
                <code>React.Children.toArray</code>
            </p>
            <h5>Первый вариант</h5>
            <Wraper>
                <Component />
                <Component />
                <Component />
            </Wraper>
            <h5>Втрой вариант</h5>
            <Wraperv2>
                <Componentv2 />
                <Componentv2 />
                <Componentv2 />
            </Wraperv2>
        </CollapseWrapper>
    );
};

const Component = () => {
    return <div>Компонент списка</div>;
};

const Componentv2 = ({ order }) => {
    return <div>{order} Компонент списка</div>;
};
Componentv2.propTypes = {
    order: PropTypes.number
};

export default ChildrenExercise;
