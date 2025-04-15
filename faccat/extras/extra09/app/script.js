let hora, minuto, segundo;

do {
  hora = parseInt(prompt("Informe a hora:"));
  minuto = parseInt(prompt("Informe o minuto:"));
  segundo = parseInt(prompt("Informe o segundo:"));

  if (hora < 0 || hora > 23 || minuto < 0 || minuto > 59 || segundo < 0 || segundo > 59) {
    alert("Valores inválidos! Hora deve ser entre 0 e 23, minutos e segundos entre 0 e 59.");
  }
} while (hora < 0 || hora > 23 || minuto < 0 || minuto > 59 || segundo < 0 || segundo > 59);

for(hora; hora >= 0; hora--){
  for(minuto; minuto >= 0; minuto--){
    for(segundo; segundo >= 0; segundo--){
      console.log(`${hora}:${minuto}:${segundo}`);
    } segundo = 59;
  } minuto = 59;
}
// for(let h = hora; h >= 0; h--){
//   for(let m = (hora === h ? minuto : 59); m >= 0; m--){
//     for(let s = (hora === h && minuto == m ? minuto : 59); s > -1; s--){
//       console.log(`${h}:${m}:${s}`);
//     } 
//   } 
// }