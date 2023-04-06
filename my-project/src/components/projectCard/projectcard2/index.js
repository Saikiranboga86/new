import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';

export default function ProjectCard2() {
  const theme = useTheme();

  return (
    <Card sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', width:850 }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h4" sx={{marginBottom:"2rem"}}>
          Accident Avoidance system in vehicle
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
          A collision avoidance system is a safety system designed to warn, alert, or assist drivers to avoid imminent collisions and 
          reduce the risk of incidents. Collision avoidance systems use a variety of technologies and sensors, such as radar, lasers, 
          cameras, GPS, and artificial intelligence.Not all collision avoidance systems are created equally—some warn or alert, while 
          others override the driver to assist them in avoiding collisions and mitigating risk.

         <h3>Types of Collision Avoidance Alert Systems:</h3>
          Forward Collision Warning (FCW)
          Blind-spot Warning (BSW)
          Lane Departure Warning (LDW)
          Cross Traffic Warning
          Pedestrian Detection System
         <h3>Types of Collision Avoidance Assist Systems:</h3> 
          Automatic Emergency Braking (AEB)
          Adaptive Cruise Control
          Electronic Stability Control (ESC)
          Parking Assist 
          </Typography>
        </CardContent>
        
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 600 }}
        image="https://assets-global.website-files.com/595d6b420002832258c527cb/602ee0b74ba77981f39da523_collision-avoidance-system-truck-assisting-in-avoiding-accident-1000.jpg"
        alt="Live from space album cover"
      />
    </Card>
  );
}