export function spaceTounderscore(textValue){
    
    return textValue.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,"").replace(/\s/g, '_').replace("?","").replace(".", "").replace(".","");
    
}