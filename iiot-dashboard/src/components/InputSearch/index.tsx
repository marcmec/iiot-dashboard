import { Input } from "antd";

const { Search } = Input;

export const InputSearch = () => {
    return (
        <Search
            style={{ padding: 8 }}
            placeholder="input search text"
            enterButton="Search"
            size="large"
            loading
        />
    );
};
