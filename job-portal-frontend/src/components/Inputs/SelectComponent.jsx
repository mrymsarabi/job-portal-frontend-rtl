import React, { useState, useEffect } from 'react';
import { Select, Spin, Alert, ConfigProvider } from 'antd';

const SelectComponent = ({ options, handleChange, defaultOption, width, height, status }) => {
    const [selectKey, setSelectKey] = useState(0); // Key to force re-render
    const [selectedOption, setSelectedOption] = useState(defaultOption);

    // Update the selected option when the defaultOption prop changes
    useEffect(() => {
        setSelectedOption(defaultOption);
        // Increment the key to force re-render
        setSelectKey(key => key + 1);
    }, [defaultOption]);

    const notFoundContent = () => {
        if (status === "pending") return <Spin size="small" />;
        if (status === "ERR_NETWORK") return <Alert message="The Internet connection is weak." status="error" showIcon />;
        if(status === "notFound") return "The item doesn't exist.";
        return "The item wasn't found.";
    };
    
    return (
        <div className={`mt-3`}>
            <ConfigProvider 
                theme={{
                    token: {
                        // Seed Token
                        colorPrimary: '#DDDDDC',
                        borderRadius: 10,
                        // Alias Token
                        colorBgContainer: '#ffffff',
                    },
                }}
            >
                <Select  notFoundContent={notFoundContent()}
                    key={selectKey} // Add key to force re-render
                    style={{
                        width: width ? width :'349px',
                        height: height ? height :'46px',
                    }}
                    placeholder=""
                    onChange={handleChange}
                    options={options}
                    defaultValue={selectedOption}
                    showSearch
                    optionFilterProp="children"
                    filterOption={(input, option) => (option?.label ?? '').includes(input)}
                />
            </ConfigProvider>
        </div>

    );
};

export default SelectComponent;