import { Card, CardContent, Skeleton } from '@mui/material';
import React from 'react'

const BatchSkeleton = () => {
  return (
    <Card style={{
        width:"280px",
        margin :"0.5rem"
    }} >
        <CardContent>
        <Skeleton variant="text" style={{height:"60px", width:"100px", marginBottom:"0.5rem"}} />
        <Skeleton variant="text" style={{height:"15px", width:"150px",marginBottom:"0.5rem"}} />
        <Skeleton variant="text" style={{height:"15px", width:"150px",marginBottom:"0.5rem"}}  />
        <Skeleton variant="text" style={{height:"15px", width:"150px",marginBottom:"0.5rem"}}  />
        </CardContent>
    </Card>
  );
}

export default BatchSkeleton