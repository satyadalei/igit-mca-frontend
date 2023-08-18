import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import DescriptionIcon from '@mui/icons-material/Description';

import styles from "./css/notes.module.css"
const EachSemNoteCards = (props) => {
    return (
        <>
            <Card className={styles.card_item}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image="/static/images/cards/contemplative-reptile.jpg"
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                           {props.sem_no} 
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {
                            !props.sem_subjects && "|| Lizards are a widespread group of squamate reptiles, with over 6,000species, ranging across all continents except Antarctica" 
                            }
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button style={{cursor:"pointer"}} className={styles.sem_btn} variant="contained" size="small"><DescriptionIcon/>Notes</Button>
                    <Button variant="outlined" size="small">Instructors</Button>
                </CardActions>
            </Card>
        </>
    )
}

export default EachSemNoteCards