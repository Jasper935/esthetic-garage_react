export const createId=(arr)=>{
    return arr.map((el, i)=>{
     return {...el, id:i+1 } 
    })
 
   }