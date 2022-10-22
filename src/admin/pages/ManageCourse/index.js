// export { default as AddCourse } from './AddCourse';
// export { default as ListCourse } from './ListCourse';
// export { default as UpdateCourse } from './UpdateCourse';

import { Outlet } from 'react-router-dom';

function ManageCourse()
{
    return (
        <div>
            <Outlet />
        </div>
    );
}

export default ManageCourse;