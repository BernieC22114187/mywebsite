import * as React from 'react';
// Refactor: 可以試試看
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


import "./card.css"



export default function OutlinedCard( {title}) {
  return (
    <Box sx={{ maxWidth: 300, minWidth: 300}}>
      <Card variant="outlined">
        <React.Fragment>
          <CardContent className = "cardcontent" sx={{minHeight: 150, maxHeight: 150}} style={{backgroundColor: "#f2f2f2"}}>
            <div>
              <Typography className = "cardtitle" sx={{ fontSize: 15 }} color="text.secondary" gutterBottom>
                {title}
              </Typography>
            </div>
            
            
            <Typography className = "description" sx={{ mb: 1.5 }} color="text.secondary">
              Description
            </Typography>
            
          </CardContent>
          <CardActions style={{backgroundColor: "#f2f2f2"}}>
            <Button className = "learnMore" size="small">Learn More</Button>
          </CardActions>
        </React.Fragment>
      </Card>
    </Box>
  );
}
