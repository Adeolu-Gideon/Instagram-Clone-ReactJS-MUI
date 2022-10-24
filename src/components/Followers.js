import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import fashion from '../assets/fashion.png';
import office from '../assets/office.png';
import health from '../assets/health.png';
import phones from '../assets/phones.png';
import accessories from '../assets/accessories.jpg';
import Link from '@mui/material/Link';

export default function Followers() {
  return (
    <List sx={{ width: '100%', maxWidth: 400, bgcolor: 'inherit', display: {xs: 'none', md: 'block'} }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src={health} style={{ width: '50px', height: '50px' }}/>
        </ListItemAvatar>
        <ListItemText
          primary="Novatifytech"
          primaryTypographyProps={{
                  fontSize: 14,
                  fontWeight: 'bold',
                 letterSpacing: 0,
                  color: 'text.secondary'
                }}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline', fontSize: 12 }}
                component="span"
                variant="body2"
                color="text.secondary"
              >
                Novatify Technologies
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      
          <React.Fragment>
              <Typography
                  sx={{ display: 'inline-flex', fontWeight: 'bold', marginLeft: '15px', marginRight: '40px', fontSize: 12 }}
                  component="span"
                  variant="body2"
                  color="text.secondary"
              >
                  Suggestions For You
              </Typography>
              <Link href="#" underline="none" sx={{ display: 'inline-flex', color: '#00000099', fontWeight: 'bold', fontSize: 12, marginLeft: '45px' }}>
                  {'See All'}
              </Link>
          </React.Fragment>      
     
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
                  <Avatar alt="Travis Howard" src={fashion} style={{ width: '30px', height: '30px' }}/>
        </ListItemAvatar>
        <ListItemText
          primary="Gideonhardey"
           primaryTypographyProps={{
                  fontSize: 14,
                  fontWeight: 'bold',
                 letterSpacing: 0,
                  color: 'text.secondary'
                }}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline-flex', marginRight: '45px', fontSize: 12 }}
                component="span"
                variant="body2"
                color="text.secondary"
              >
                Follows you
              </Typography>
                  <Link href="#" underline="none" sx={{ display: 'inline-flex', fontWeight: 'bold', fontSize: 12, marginLeft: '45px'}}>
                      {'Follow'}
                  </Link>
            </React.Fragment>
          }
        />
      </ListItem>
      
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
                  <Avatar alt="Cindy Baker" src={office} style={{ width: '30px', height: '30px' }}/>
        </ListItemAvatar>
        <ListItemText
          primary="Mickie"
           primaryTypographyProps={{
                  fontSize: 14,
                  fontWeight: 'bold',
                 letterSpacing: 0,
                  color: 'text.secondary'
                }}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline-flex', marginRight: '12px', fontSize: 12 }}
                component="span"
                variant="body2"
                      color="text.secondary"
              >
                Followed by dking
              </Typography>
              <Link href="#" underline="none" sx={{ display: 'inline-flex', fontWeight: 'bold', fontSize: 12, marginLeft: '45px'}}>
                      {'Follow'}
                </Link>
            </React.Fragment>
          }
        />
      </ListItem>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
                  <Avatar alt="Cindy Baker" src={accessories} style={{ width: '30px', height: '30px' }}/>
        </ListItemAvatar>
        <ListItemText
          primary="Cynthia"
           primaryTypographyProps={{
                  fontSize: 14,
                  fontWeight: 'bold',
                 letterSpacing: 0,
                  color: 'text.secondary'
                }}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline-flex', fontSize: 12 }}
                component="span"
                variant="body2"
                color="text.secondary"
              >
                Followed by derrr.aa
              </Typography>
              <Link href="#" underline="none" sx={{ display: 'inline-flex', fontWeight: 'bold', fontSize: 12, marginLeft: '45px'}}>
                      {'Follow'}
                </Link>
            </React.Fragment>
          }
        />
      </ListItem>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
                  <Avatar alt="Cindy Baker" src={phones} style={{ width: '30px', height: '30px' }}/>
        </ListItemAvatar>
        <ListItemText
          primary="Raphian"
           primaryTypographyProps={{
                  fontSize: 14,
                  fontWeight: 'bold',
                 letterSpacing: 0,
                  color: 'text.secondary'
                }}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline-flex', marginRight: '4px', fontSize: 12 }}
                component="span"
                variant="body2"
                color="text.secondary"
              >
                Followed by cynthia
              </Typography>
              <Link href="#" underline="none" sx={{ display: 'inline-flex', fontWeight: 'bold', fontSize: 12, marginLeft: '45px'}}>
                      {'Follow'}
                </Link>
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
}
