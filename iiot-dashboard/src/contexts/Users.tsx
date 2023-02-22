import { createContext, useState } from "react";
import { IUsers } from "../interfaces/User";

interface IUsersContextProps {
    usersInfo: IUsers[] | null;
    setUsersInfo: Function;
}

const UsersContext = createContext({} as IUsersContextProps);

export const UsersContextProvider = ({ children }: any) => {
    const [usersInfo, setUsersInfo] = useState<IUsers[] | null>(null);
    return (
        <UsersContext.Provider value={{ usersInfo, setUsersInfo }}>
            {children}
        </UsersContext.Provider>
    );
};

export default UsersContext;
