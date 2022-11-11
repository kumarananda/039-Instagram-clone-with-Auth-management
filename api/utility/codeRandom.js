  
  // update by me >> get random code in javaScript 
  export const getrandCode = (length = 6 ) => {

    // const rand = () =>  JSON.stringify(Math.floor(Math.random() * 10)) 
    const rand = () => Math.floor(Math.random() * 10)
    let code = []
    for (let i = 0; i < length; i++) {
      code.push(rand())
    }
  
    let codeString = code.toString().replace(/,/g, '')
  
    return codeString;
  }
  



export const getrandCode_OLD = (length) => {
    const rand = () =>  JSON.stringify(Math.floor(Math.random() * 10)) 
    if(length == 4){
      const result = rand() + rand() + rand() + rand();
      return result
    }else if(length == 5){
      const result = rand() + rand() + rand() + rand() + rand();
      return result
    }else
    if(length == 6){
      const result = rand() + rand() + rand() + rand() + rand() + rand();
      return result
    }else
    if(length == 7){
      const result = rand() + rand() + rand() + rand() + rand()+ rand() + rand();
      return result
    }else
    if(length == 8){
      const result = rand() + rand() + rand() + rand() + rand() + rand() + rand()+ rand();
      return result
    }

  }



