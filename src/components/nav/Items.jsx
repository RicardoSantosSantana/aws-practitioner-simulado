import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard'; 
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';
import Link from '@mui/material/Link';
 
export default function Items() {
  return (
      <div>
        <ListItem button>
            <ListItemIcon>
                <DashboardIcon />
            </ListItemIcon>
            <Link   underline="none" href="/" color="inherit">
                <ListItemText primary="Exercício" />
            </Link>
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <QuestionAnswerOutlinedIcon />
            </ListItemIcon>
            <Link   underline="none" href="/perguntas" color="inherit">
                <ListItemText primary="Perguntas" />
            </Link>
        </ListItem>     
      </div>
  )

}
 
 