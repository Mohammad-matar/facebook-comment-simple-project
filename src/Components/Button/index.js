import React from 'react';
import './style.css';

const Button = ({ children, onClick, startBgColor, startColor, className, ...props }) => {
    return (
        <button
            style={{
                backgroundColor: `${startBgColor}`,
                color: `${startColor}`,
            }}
            onClick={onClick}
            className={`btn-component ${className}`}
            {...props}
        >
            {children}
        </button>
    )
}

export default Button;