import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material';

const Admin = () => {
    return (
        <div>
            <div>
                <h3>Create new admin</h3>
                <p>
                    <Button variant='contained' > 
                      <AddIcon/> Create New Admin
                    </Button>
                </p>
            </div>
            <div>
                <h5>Supreme Admin</h5>
                <div>
                    <p>Supreme Admin 1</p>
                    <p>Supreme Admin 2</p>
                </div>
            </div>
            <div>
                <h5>Batch Admin</h5>
                <div>
                    <p>Batch Admin 1</p>
                    <p>Batch Admin 2</p>
                    <p>Batch Admin 3</p>
                </div>
            </div>
        </div>
    )
}

export default Admin