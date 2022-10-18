// export { default as AddNotifications } from './AddNotifications';
// export { default as ListNotifications } from './ListNotifications';
// export { default as UpdateNotifications } from './UpdateNotifications';
import { Outlet } from 'react-router-dom';

function ManageNotifications()
{
    return (
        <div>
            <Outlet />
        </div>
    );
}

export default ManageNotifications;
