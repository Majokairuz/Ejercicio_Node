var fs=require('fs')

// fs.mkdirSync('Holi',(error)=>{
//     if(error){
//          throw error;
// }
// console.log('La carpeta se creo')
//  })


// fs.writeFileSync('./Holi/Majo.txt','Menas',(error)=>{
//     if(error){
//         throw error;
// }
// console.log('El archivo se creo')
// })

// fs.unlinkSync('./Holi/Majo.txt')

fs.rmdir('./Holi', (err) => {
    if (err) {
     console.error(err);
   } else {
     console.log('La carpeta se elimino');
   }
})