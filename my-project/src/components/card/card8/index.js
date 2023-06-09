import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
export default function Card8() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="data:image/png;base64,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"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
          Material UI
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Material UI is an open-source React component library that implements Google's Material Design. It includes a comprehensive collection of prebuilt components that are ready for use in production right out of the box.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    
  );

}