// note file 

let user = {
    first_name : "y",
    sur_name : "Saha",
    email : "ananda@gmail.com",
    password : "ananda",
    birth_date : "kkkk"
}


const userCreateValidatior = () => {
    const error = {};
  
    if(!user.first_name){
      error.first_name = "Name field empty!";
    }
  
    if(!user.sur_name){
      error.sur_name = "Sur-Name field empty!";
    }
    if (!user.email) {
      error.email = "Email field empty!";
       
    }
    if (!user.password) {
      error.password = "Password field empty !";
    }
    if (!user.birth_date) {
      error.birth_date = "Birthdate field empty!";
    }

    return {
      error,
      isValid: Object.keys(error).length === 0,
    };
};

console.log(userCreateValidatior());

