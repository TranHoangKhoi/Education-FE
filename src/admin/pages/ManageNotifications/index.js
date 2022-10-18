// export { default as AddNotifications } from './AddNotifications';
// export { default as ListNotifications } from './ListNotifications';

import { Outlet } from 'react-router-dom';

// export { default as UpdateNotifications } from './UpdateNotifications';
function ManageNotifications() {
    return (
        <div>
            <Outlet />
        </div>
    );
}

export default ManageNotifications;
