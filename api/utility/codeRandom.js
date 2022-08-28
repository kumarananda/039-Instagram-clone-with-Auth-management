

export const getrandCode = (length) => {
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

