// export { default as AddCategoryNotifications } from './AddCategoryNotifications'
// export { default as ListCategoryNotifications } from './ListCategoryNotifications'
// export { default as UpdateCategoryNotifications } from './UpdateCategoryNotifications'
import { Outlet } from 'react-router-dom';
function ManageCategoryNotifications()
{
    return (
        <div>
            <Outlet />
        </div>
    );
}

export default ManageCategoryNotifications;

