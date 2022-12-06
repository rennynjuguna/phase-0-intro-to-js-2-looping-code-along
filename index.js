const names = ["Guadalupe", "Ollie", "Aki"];
function writeCards(names, gift = "suprise"){
 let array = [];
  for(let i = 0; i<names.length;i++){
        array.push(`Thank you, ${names[i]}, for the wonderful ${gift} gift!`);    
}
return array; 
}
const countDown = (num) => {
    while( num >= 0){
        console.log(num);
        num --;
    }
}
