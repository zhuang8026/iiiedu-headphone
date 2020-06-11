import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { AutoComplete } from 'antd';

const { Option } = AutoComplete;


const Complete = () => {
    const [result, setResult] = useState([]);

    const handleSearch = value => {
        let res = [];

        if (!value || value.indexOf('@') >= 0) {
        res = [];
        } else {
        res = ['gmail.com', 'yahoo.com','iCloud.com','outlook.com', 'qq.com', 'msn.com'].map(domain => `${value}@${domain}`);
        }

        setResult(res);
    };

    return (
        <AutoComplete
        style={{
            width: 200,
        }}
        onSearch={handleSearch}
        placeholder="your email please"
        >
        {result.map(email => (
            <Option key={email} value={email}>
            {email}
            </Option>
        ))}
        </AutoComplete>
    );
};

export default Complete;