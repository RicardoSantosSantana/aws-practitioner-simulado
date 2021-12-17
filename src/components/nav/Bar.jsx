import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import NavBarItens from  './Items'
 
 
const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
      shouldForwardProp: (prop) => prop !== 'open',})(({ theme, open }) => ({
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
      }),
    })
);

const Modos = (mode, setMode,theme) =>{  
  
  function toggleColorMode(){
   
    const modo = theme.palette.mode === 'dark' ? 'light':'dark'
    localStorage.setItem('USER_THEME', modo )
    setMode(modo)  
    
  }

  return (<>
      
      <IconButton sx={{ ml: 1, bgcolor: 'background.default',
      color: 'text.primary' }} onClick={toggleColorMode}  theme={theme}>
        {theme.palette.mode === 'dark' ? <Brightness7Icon theme={theme}/> : <Brightness4Icon theme={theme}/>}
      </IconButton>
  </>
     
     )

}


const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function Bar({theme, mode, setMode, children, titleLeft, titleRight}) {

   
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box  sx={{ display: 'flex'   }}  >
      <CssBaseline />
      <AppBar position="fixed" open={open} >
        
          <Toolbar theme={theme}>           
          <IconButton color="inherit" aria-label="open drawer" onClick={handleDrawerOpen} edge="start" sx={{ mr: 2, ...(open && { display: 'none' }) }} >              
            <MenuIcon  />
          </IconButton>

          <Typography variant="h6" noWrap component="div" sx={{flexGrow:1}}>
            {titleLeft ?? 'no title'}           
          </Typography>    
          {titleRight} <Divider theme = { theme } orientation="vertical" flexItem /> 
          { Modos (mode, setMode,theme)}
        </Toolbar>
      </AppBar>
      <Drawer        
        sx={{  width: drawerWidth, flexShrink: 0,
              '& .MuiDrawer-paper': { width: drawerWidth, boxSizing: 'border-box' },
        }}
        variant="persistent"  anchor="left"  open={open} theme={theme} >
        <DrawerHeader  sx={{ bgcolor: 'primary.dark',  color: 'white' }}> Menu
          <IconButton  onClick={handleDrawerClose}
            sx={{ bgcolor: 'primary.dark',  color: 'white'}} >
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        
        <Divider  theme={ theme}  sx={{ bgcolor: 'background.default', color: 'text.primary' }} />     
        <List theme={theme}   sx={{ bgcolor: 'background.default', color: 'text.primary',flexGrow:1 }}>
            <NavBarItens theme={theme}/>
        </List>        
      </Drawer>
      <Main open={open} theme={theme}   sx={{ bgcolor: 'background.default', color: 'text.primary' }}>
      <DrawerHeader theme={ theme}   sx={{ bgcolor: 'background.default', color: 'text.primary' }} />
            {children}            
      </Main>
    </Box>
  );
}
