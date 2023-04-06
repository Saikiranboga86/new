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

export default function ProjectCard1() {
  const theme = useTheme();

  return (
    <Card sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', width:850 }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h4">
          SMART AGRICUTURE MONITORING SYSTEM USING IOT
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
          Agriculture is done in every country from ages. Agriculture is the science and art of cultivating plants.
         Agriculture was the key development in the rise of sedentary human civilization. Agriculture is done manually from ages. 
         As the world is trending into new technologies and implementations it is a necessary goal to trend up with agriculture also.
         IOT plays a very important role in smart agriculture. IOT sensors are capable of providing information about agriculture fields. we have proposed an IOT and smart agriculture system using automation. This IOT based Agriculture monitoring system makes use of wireless sensor networks that collects data from different sensors deployed at various nodes and sends it through the wireless protocol. This smart agriculture using IOT system is powered by Arduino, it consists of Temperature sensor, Moisture sensor,water level sensor, DC motor and GPRS module. When the IOT based agriculture monitoring system starts it checks the water level, humidity and moisture level. It sends SMS alert on the phone about the levels. Sensors sense the level of water if it goes down,it automatically starts the water pump. If the temperature goes above the level, fan starts. This all is displayed on the LCD display module. This all is also seen in IOT where it shows information of Humidity, Moisture and water level with date and time, based on per minute. Temperature can be set on a particular level, it is based on the type crops cultivated. If we want to close the water forcefully on IOT there is button given from where water pump can be forcefully stopped.
          </Typography>
        </CardContent>
        
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 600 }}
        image="https://nevonprojects.com/wp-content/uploads/2022/07/iot-agriculture-monitor-web-main.jpg"
        alt="Live from space album cover"
      />
    </Card>
  );
}


