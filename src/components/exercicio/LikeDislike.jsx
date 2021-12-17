import {useContext, useState}  from 'react';
import { ContextSimulacao } from '../../context/Index';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOffAltOutlinedIcon from '@mui/icons-material/ThumbDownOffAltOutlined';

export default function LikeDislike({show}){
    
    const apContext = useContext(ContextSimulacao);   
    const acertos = apContext['acertos'] ;
    const erros = apContext['erros'] ;
    
    if(show=="false") return ""

    return  ( <>
        <IconButton color='inherit'>
          <Badge badgeContent={erros} color="secondary">
            <ThumbDownOffAltOutlinedIcon />
          </Badge>
        </IconButton>
        <IconButton color='inherit'>
            <Badge badgeContent={acertos} color="secondary" >
              <ThumbUpOutlinedIcon />
            </Badge>
        </IconButton>    
      </>
    )
    
}