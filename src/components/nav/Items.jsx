import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard'; 
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';
import Link from '@mui/material/Link';
 
export default function Items({theme}) {
  return (<>
 
        <ListItem theme={ theme}  sx={{ 
                    bgcolor: 'background.default',
                    color: 'text.primary' }} button>
            <ListItemIcon theme={ theme} >
                <DashboardIcon  theme={ theme}  />
            </ListItemIcon>
            <Link theme={ theme}   underline="none" href="/" >
                <ListItemText theme={ theme}  primary="Exercício" />
            </Link>
        </ListItem>

        <ListItem theme={ theme}  sx={{ 
                    bgcolor: 'background.default',
                    color: 'text.primary' }} button>
            <ListItemIcon theme={ theme} >
                <QuestionAnswerOutlinedIcon  theme={ theme}  />
            </ListItemIcon>
            <Link theme={ theme}   underline="none" href="/perguntas" >
                <ListItemText theme={ theme}  primary="Perguntas" />
            </Link>
        </ListItem>
        </>
 
  )

}
 
 