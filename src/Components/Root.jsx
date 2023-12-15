 
import { Outlet } from 'react-router-dom';
import Hedaer from './Hedaer';

const Root = () => {
    return (
        <div>
            <Hedaer></Hedaer>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;