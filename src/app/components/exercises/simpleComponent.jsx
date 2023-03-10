import React from "react";
import PropTypes from "prop-types";

function SimpleComponent({ onLogin, onLogOut, isAuth }) {
    if (isAuth) {
        return (
            <button className="btn btn-primary" onClick={onLogOut}>
                Выйти
            </button>
        );
    }
    return (
        <button className="btn btn-primary" onClick={onLogin}>
            Войти
        </button>
    );
}

SimpleComponent.propTypes = {
    onLogin: PropTypes.func.isRequired,
    onLogOut: PropTypes.func.isRequired,
    isAuth: PropTypes.bool.isRequired
};

export default SimpleComponent;
