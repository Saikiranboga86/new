import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
export default function Card7() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="data:image/jpeg;base64,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"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
          python
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Python is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation via the off-side rule.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    
  );

}