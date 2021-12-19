import { useState } from "react";
import Categoria from "./Categoria";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { faqFunctions } from "../../functions/faq";
 
export default function Conteudo( { theme,dados } = props ){
   
  faqFunctions.dados = dados
  
  const categorias = faqFunctions.categorias().map((el,index)=>{
      return <MenuItem   theme={theme} key={'menuitem_'+index} value={el}>{el}</MenuItem>
  });

  const [categoriaSelecionada, setCategoriaSelecionada] = useState('');
 
  const handleChange = (event) => {
    setCategoriaSelecionada(event.target.value);
  };

  const sx = { bgcolor: 'background.default',color: 'text.primary' }
  return (<>
  
    <Box         
        theme={theme} sx={{ minWidth: 120, bgcolor: 'background.default',color: 'text.primary' }}>
          
      <FormControl  theme={theme} fullWidth sx={{ bgcolor: 'background.default',color: 'text.primary' }}> 
        <InputLabel  sx={{ bgcolor: 'background.default',color: 'text.primary' }} theme={theme} id="demo-simple-select-label">Selecione uma categoria</InputLabel>
        <Select sx ={ sx }
          theme={theme}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={categoriaSelecionada}
          label="Selecione uma Caregoria"
          onChange={handleChange}>
        {categorias}
        </Select>
      </FormControl>
    </Box>
    <Categoria  dados={dados} theme={theme} key="cat" categoria={categoriaSelecionada} />
    </>  
    
  ); 
        
        
}