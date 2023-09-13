import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import styles from "./css/NoticeSection.module.css"
const NoticeCard = (props) => {
    return (
        <>
            <Card style={{backgroundColor:"#3584FC"}}  className={styles.card_item}>
                <CardActionArea sx={{height:"100%"}} >
                    <CardContent>
                        <Typography className={styles.card_text} sx={{textAlign:"center",color:"white"}} gutterBottom variant="h5" component="div">
                           {props.notice_name}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </>
    )
}

export default NoticeCard