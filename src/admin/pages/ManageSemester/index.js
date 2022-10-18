// export { default as AddSemester } from './AddSemester';
// export { default as ListSemester } from './ListSemester';
// export { default as UpdateSemester } from './UpdateSemester';
import { Outlet } from 'react-router-dom';
function ManagerSemester()
{
    return (
        <div>
            <Outlet />
        </div>
    );
}

export default ManagerSemester;