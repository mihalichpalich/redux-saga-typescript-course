import React from 'react';
import { Spin } from 'antd';

import './styles.scss';

const Fallback = () => {
    return (
        <div className="router-lazy-spin">
            <Spin tip="Loading..." />
        </div>
    )
};

export default Fallback