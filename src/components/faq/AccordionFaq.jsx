import { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Stack from '@mui/material/Stack';
import Badge from '@mui/material/Badge';
 
import ContactSupportTwoToneIcon from '@mui/icons-material/ContactSupportTwoTone';

export default function AccordionFaq( { name, title, children,totalPerguntas } = props ){
    
    const [expanded, setExpanded] =  useState(false);
    
    const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

    return(
        <Accordion  TransitionProps={{ unmountOnExit: true }} expanded={expanded === name} onChange={handleChange(name)}>
          <AccordionSummary    expandIcon={<ExpandMoreIcon />}>
                         
          <Stack spacing={10} direction="row">       
                <Badge color="primary" badgeContent={totalPerguntas} showZero >                
                <ContactSupportTwoToneIcon/>
                </Badge>
          </Stack>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <Typography variant="h5"   sx={{  }}>{ title } </Typography>          
       
        </AccordionSummary>
        <AccordionDetails>
          {children}
        </AccordionDetails>
      </Accordion>
    )
}