import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import MuiDrawer from '@mui/material/Drawer';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import { mainListItems, secondaryListItems } from './listItems';
import Typography from '@mui/material/Typography';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Stocks from './Stocks.js';

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
	easing: theme.transitions.easing.sharp,
	duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
	marginLeft: drawerWidth,
	width: `calc(100% - ${drawerWidth}px)`,
	transition: theme.transitions.create(['width', 'margin'], {
	    easing: theme.transitions.easing.sharp,
	    duration: theme.transitions.duration.enteringScreen,
	}),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

const mdTheme = createTheme();

function DashboardContent() {

    const [open, setOpen] = React.useState(true);
    const toggleDrawer = () => {
	setOpen(!open);
    };
    
    return (
	<ThemeProvider theme={mdTheme}>
	    <Box sx={{ display: 'flex' }}>
		<CssBaseline />
		<AppBar position="absolute" open={open}>
		    <Toolbar
			sx={{
			    pr: '24px', // keep right padding when drawer closed
			}}
		    >
			<IconButton
			    edge="start"
			    color="inherit"
			    aria-label="open drawer"
			    onClick={toggleDrawer}
			    sx={{
				marginRight: '36px',
				...(open && { display: 'none' }),
			    }}
			>
			    <MenuIcon />
			</IconButton>
			<Typography
			    component="h1"
			    variant="h6"
			    color="inherit"
			    noWrap
			    sx={{ flexGrow: 1 }}
			>
			    Dashboard
			</Typography>
		    </Toolbar>
		</AppBar>
		<Drawer variant="permanent" open={open}>
		     <Toolbar
			 sx={{
			     display: 'flex',
			     alignItems: 'center',
			     justifyContent: 'flex-end',
			     px: [1],
			 }}
		     >
			 <IconButton onClick={toggleDrawer}>
			     <ChevronLeftIcon />
			 </IconButton>
		     </Toolbar>
		    <Divider />
		    <List component="nav">
			{mainListItems}
			<Divider sx={{ my: 1 }} />
			{secondaryListItems}
		    </List>
		</Drawer>
		{/* Add Main Content */}
		<Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
              <Grid container spacing={3}>
		  {/* Chart */}
		  <Grid item xs={12} md={8} lg={6}>
                      <Paper
			  sx={{
			      p: 2,
			      display: 'flex',
			      flexDirection: 'column',
			      height: 240,
			      backgroundColor: 'rgb(16, 24, 40)',
			      color: 'white',
			  }}
			  elevation={4}
                      >
			  <Typography variant="h5" component="h2">
			      Welcome, AtoZee! 
			  </Typography>
                      </Paper>
		  </Grid>

		  <Grid item xs={12} md={8} lg={6}>
                      <Paper
			  sx={{
			      p: 2,
			      display: 'flex',
			      flexDirection: 'column',
			      height: 240,
			     
			  }}
			  elevation={4}
                      >
			  <Typography variant="subtitle2" component="h2">
			     Chart goes here. 
			  </Typography>
                      </Paper>
		  </Grid>
              {/* Yesterday's Stock Report */}
              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                  <Stocks />
                </Paper>
              </Grid>
            </Grid>

          </Container>
        </Box>
		
	    </Box>
	</ThemeProvider>
    );
}
	    
export default function Dashboard() {
    return <DashboardContent />
}
