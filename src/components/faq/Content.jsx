
import Categoria from "./Categoria";
import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import classFaq from "../../model/classFaq.ts";

export default function Content(){

const Faq = new classFaq();

const categorias = Faq.categorias.map((el,index)=>{
    return <MenuItem key={'menuitem_'+index} value={el}>{el}</MenuItem>
});

const [categoriaSelecionada, setCategoriaSelecionada] = React.useState('');

//const listaCategoria

  const handleChange = (event) => {
    setCategoriaSelecionada(event.target.value);
  };

  const age =0
  return (<>
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Selecione uma categoria</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={categoriaSelecionada}
          label="Selecione uma Caregoria"
          onChange={handleChange}
        >
        {categorias}
        </Select>
      </FormControl>
    </Box>
    <Categoria  key="cat" categoria={categoriaSelecionada} />
    </>
  ); 
        
        
}