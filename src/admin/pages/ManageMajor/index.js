// export { default as AddMajor } from './AddMajor';
// export { default as ListMajor } from './ListMajor';
// export { default as UpdateMajor } from './UpdateMajor';

import { Outlet } from 'react-router-dom';

function ManageMajor()
{
    return (
        <div>
            <Outlet />
        </div>
    );
}

export default ManageMajor;