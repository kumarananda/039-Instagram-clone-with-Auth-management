import User from "../models/User.js";
import bcrypt from 'bcryptjs'
import createError from "./createError.js";
import jwt from 'jsonwebtoken'
import { sendEmail } from "../utility/sendEmail.js";
import { sendSms_B, sendSms_V } from "../utility/sendSms.js";
import { createJwtToken } from "../utility/createToken.js";
import { emailHtml, emailHtml_recoverPass } from "../utility/emailHtml.js";
import UserToken from "../models/UserToken.js";
import { getrandCode } from "../utility/codeRandom.js";

/**
 * @access public
 * @route /api/user
 * @method GET 
 */
export const  getAllUser = async (req, res, next) => {

        
    try{
        const user = await User.find();

        // if not found data
        if(!user){
            return next(createError(404, "Single User not found"))
        }
        // if found data
        if(user){
            res.status(200).json(user);
        }



    }catch(error){

        //  directly send server error
        next(error)

        //coustomly send error
        // next(createError(404, "coustomly error"))
        
    }
    
}


/**
 * @access public
 * @route /api/user
 * @method post 
 */
export const  createUser = async (req, res, next) => {

    // make hash password
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(req.body.password, salt)

    try {
        const createUser = await User.create({...req.body, password : hash})
        res.status(200).json(createUser)
    } catch(error){
        
        //  directly send server error
        next(error)

        //coustomly send error
        // next(createError(404, "coustomly error"))
    }
    
}


/**
 * @access public
 * @route /api/user/:id
 * @method GET 
 */
export const  getSingleUser = async (req, res, next) => {
    const { id } = req.params
 
    try {
        const user = await User.findById(id) 

        if(!user){
            return next(createError(404, "Single User not found"));
        }
        if(user){
            res.status(200).json(user)
        }


    } catch(error){
        
        //  directly send server error
        next(error)

        //coustomly send error
        // next(createError(404, "coustomly error"))
    }
    
}


/**
 * @access public
 * @route /api/user/id
 * @method delete 
 */
export const  deleteUser = async (req, res, next) => {
    const { id } = req.params;

    try {
        const datafind = await User.findById(id);
        
        if(!datafind){
            return next(createError(404, "User not found"));
        }
        if(datafind){
            const deleted = await User.findByIdAndDelete(id)
            res.status(200).json({...deleted, msg : "Delete Done"})
            // res.status(200).json("Data found")
        }
        

    } catch(error){
        
        //  directly send server error
        next(error)

        //coustomly send error
        // next(createError(404, "coustomly error"))
    }

}



/**
 * @access public
 * @route /api/user/:id
 * @method put:patch 
 */
export const  editUser = async (req, res, next) => {
    const { id } = req.params;

    try {

        const datafind = await User.findById(id);

        // console.log(datafind);
        // res.status(200).json(datafind)

        if(!datafind){
            return next(createError(404, "User not found"));
        }

        if(datafind){

            const updateUser = await User.findByIdAndUpdate(id, req.body, {new : true} )
            res.status(200).json(updateUser)
        }



    } catch(error){
        
        //  directly send server error
        next(error)

        //coustomly send error
        // next(createError(404, "coustomly error"))
    }


}


/**
 * @access public
 * @route /api/user/login
 * @method post 
 */
 export const  userLogin = async (req, res, next) => {

    // get body data
    const { auth, email, username} = req.body;
    // console.log(req.body);
    // console.log(data);

    try {

        // find user by email , username, cell any type of data 01
        //more standerd from 02 ***

        const login_useremail = await User.findOne({email : auth});
        const login_username = await User.findOne({username : auth});
        const login_usercell = await User.findOne({cell : auth});
        
        const login_user = login_useremail ? login_useremail : (login_username ? login_username : login_usercell );
        

        // apply on user not found
        if(!login_user){

            return next(createError(404, "user not found"))          
        }

        // check password
        const passwordCheck = await bcrypt.compare(req.body.password, login_user.password);
        // handle password
        if( !passwordCheck){
            return next(createError(404, "Password not match"))
        }

        // https://generate.plus/en/base64
        // create json web token ( {user_ID }, our_secret , {expiry/validity})
        const token = jwt.sign( {id : login_user._id, isAdmin : login_user.isAdmin },  process.env.JWT_SECRET , { expiresIn : "1d" });

        // login user info >> skiping _id, password, isAdmin and  "_doc" hare for Extra added data when skiping
        const { _id, password, isAdmin, ...login_info } =login_user._doc;
        
        res.cookie("access_token", token).status(200).json({
        token : token,
        user : login_info
        })

    } catch (error){

        next(error)
    }


}

/**
 * @access public
 * @route /api/user/register
 * @method post 
 */
 export const  userRegister = async (req, res, next) => {

    // make hash password
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(req.body.password, salt)

    try {
        // send new user on db
        const createUser = await User.create({...req.body, password : hash})

        // create token for user account verify
        const token =  createJwtToken({id : createUser._id});
   
        // get random code
        const randCode = getrandCode(6)
        console.log(randCode);
        // token update on db
        const updateTkn = await UserToken.create({userId : createUser._id, verifyToken : token, verifyCode : randCode});

        //create link with _id & token for send emil, sms, etc
        const verify_link = `http://localhost:3000/user/${createUser._id}/verify/${token}`;


        sendEmail(createUser.email, "Instagram Verification", `Hi ${createUser.name} please verify your account.`, emailHtml(createUser.name, verify_link));
        
        // sendSms_B(createUser.cell, `Hi ${createUser.name}, Your account is created, Please Verify now. your code is ${randCode}`)

        const phone_no = createUser.cell ? true : false
        res.status(200).json({name : createUser.name, reqPhoneCode : phone_no} )
    } catch(error){
        
        //  directly send server error
        next(error)

        //coustomly send error
        // next(createError(404, "coustomly error"))
    }
    
}


/**
 * @access public
 * @route /api/user/me
 * @method get 
 */
export const getLogedInUser = async (req, res, next) => {

    try{

        // Bearer Token check
        const bearer_token = req.headers.authorization;

        //get token
        let token = '';
        if(bearer_token){
            token = req.headers.authorization.split(' ')[1];

            // get token user
            const logedInUser = jwt.verify(token, process.env.JWT_SECRET);

            // if token not veriffy
            if(!logedInUser){
                // next(createError(404, 'Token Not Valid'));
                res.send('Token Not Valid')
            }
            // if token veriffy
            if(logedInUser){
                const user= await User.findById(logedInUser.id)
                res.status(200).json(user)
            }

            
        }
        

        // check token
        if(!bearer_token){
            next(createError(404, 'Token Not Found'));
            
        }


        // res.send(bearer_token)
        

    }catch(error){
        // next(createError(400, {msg : "faild", error}))
        next(error)
    }


}

/**
 * @access public
 * @route /api/user/verify
 * @method post 
 */
export const verifyUserAccount = async (req, res, next) => {

    try{ 
        const {id , token} = req.body;

        

        // check token
        // const verify = await UserToken.findOne({userId : id, verifyToken : token });
        const verify = await UserToken.findOne({id : id, verifyToken : token });

        console.log(verify);

        // check data verify of not
        if(!verify){
            next(createError(404, 'Invalid Verify url'));
        }
        if( verify){
            await User.findByIdAndUpdate(id, {
                isVerified : true
            })
            res.status(200).json({message : "User Account verified successful."});
            verify.remove()
        }
        
        

    }catch(error){
        next(error)
    }


}

/**
 * @access public
 * @route /api/user/forgot-password
 * @method post 
 */
export const ForgotPassword = async (req, res, next) => {
    
    try{ 
        const { auth } = req.body
        console.log(auth);
        let regexmail = /^[a-z]+[a-z0-9\.]+@[a-z0-9]+\.[a-z]{2,3}$/
        let phonevalid_bd = /^(01|\+8801|8801)[0-9]{9}$/;

        // test data type email, phone_bd or not
        const validphone = phonevalid_bd.test(auth);
        const validMail = regexmail.test(auth)
        // console.log(validphone);

        // if valid phone no
        if(validphone){
            const recovery_user = await User.findOne({cell : auth});

            // apply on user not found
            if(!recovery_user){
                console.log(`Phone no dosn't exixts`);
                res.status(404).json({
                    message : `Phone no dosn't exixts`,
                    action : 'error'
                })
            }
    
            // check previous token
            const prev_token = await UserToken.findOne({userId : recovery_user.id});
            if(prev_token){
                await UserToken.findByIdAndDelete(prev_token.id)
            }
    
            if(recovery_user){
                // 5min minute= 300000 millisecond expire time
                const token = createJwtToken({id : recovery_user.id}, '1d') 
    
                // create verify code
                const verifyCode = getrandCode(6)

                console.log(verifyCode);
                // TOKEN CREATED for time validation
                await UserToken.create({userId : recovery_user.id, verifyToken : token, verifyCode })
                console.log(`Verify Code sent`);
                sendSms_B(recovery_user.cell, `Hi ${recovery_user.name}, Your Verify  code is ${verifyCode}`)

                res.status(202).json({message : "Verify Code sent", action : 'code', })
    
            }
        
          // if valid email address  
        }else if(validMail){

            const recovery_user = await User.findOne({email : auth});

            // apply on user not found
            if(!recovery_user){
                console.log(`Email dosn't exixts`);
                res.status(404).json({
                    message : `Email dosn't exixts`,
                    action : 'error'
                })
            }
    
            // check previous token
            const prev_token = await UserToken.findOne({userId : recovery_user.id});
            if(prev_token){
                await UserToken.findByIdAndDelete(prev_token.id)
            }
    
            if(recovery_user){
                const token = createJwtToken({id : recovery_user.id}, "1d")
    
                //create link with _id & token for send emil, sms, etc
                const verify_link = `http://localhost:3000/password-reset/${token}`;
                // console.log(verify_link);
                sendEmail(recovery_user.email, "Instagram Password Reset", `Hi ${recovery_user.name} hare is your password recoverey Link.`, emailHtml_recoverPass(recovery_user.name, verify_link));
    
                // TOKEN CREATED EXTRA
                await UserToken.create({userId : recovery_user.id, verifyToken : token})
                console.log(`"Recovery Link sent"`);
                res.status(202).json({message : "Recovery Link sent", action : 'mail'})
            }

        }else{
            console.log(`Phone or Email format error`);
            res.status(404).json({
                message : `Phone or Email format error`,
                action : 'error'
            })
        }


    }catch(error){
        next(error)
    }


}

/**
 * @access public
 * @route /api/user/reset-password
 * @method post 
 */
export const ResetPassword = async (req, res, next) => {
    
    try{ 
        // get token body data
        const { token, password } = req.body

        // get user id from token
        const {id} = jwt.verify(token, process.env.JWT_SECRET);
        // make hash password
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(req.body.password, salt)

        // match DB server and linkToken
        const checktokenS_L = await UserToken.findOne({userId : id , verifyToken : token})
        // console.log(checktokenS_L);

        if(!checktokenS_L){
            res.status(404).json({
                action : false
            })

        }else{

            const  user_data = await User.findByIdAndUpdate(id, {
                password : hash
            });
            await UserToken.findOneAndDelete({userId : id})
            res.status(200).json("Password Change successfull")
        }

        

    }catch(error){
        next(createError(error))
    }


}

/**
 * @access public
 * @route /api/user/pass-recovery-code
 * @method post 
 */
export const PassRrecoveryCode = async (req, res, next) => {

    try{ 
        // get submited body data
        const { cell, verifyCode } = req.body;
        // console.log(cell);
        // console.log(verifyCode + 'hhh');

        const userdata = await User.findOne({cell :cell});
        // console.log(userdata.id);

        if(!userdata){
            req.status(404).json({
                message : 'user not found or time expire'
            })
        }
        // console.log(userdata.id);

        if(userdata){
            const tokenData = await UserToken.findOne({userId : userdata.id})
            // token verify 
            const jwt_verify =  jwt.verify(tokenData.verifyToken, process.env.JWT_SECRET);

            // console.log(jwt_verify.id);
            if(!jwt_verify.id){
                res.status(404).json({action: false, message: "Time Expire"})
            }

            if(tokenData.verifyCode !== verifyCode){
                res.status(404).json({
                    action: "error",
                    message : "Your code not match"
                })
            }

            if(tokenData.verifyCode == verifyCode){

                const verify_link = `http://localhost:3000/password-reset/${tokenData.verifyToken}`;
                console.log(verify_link);
                res.status(200).json({go: verify_link})
            }
   

        }



        

    }catch(error){
        // res.status(400).json({error : error.message})
        next(createError(error))

    }


}

/**
 * @access public
 * @route /api/user/phone-code-sent
 * @method post 
 */
export const phoneVerifyCodeSent = async (req, res, next) => {

    try{ 
        // get submited body data
        const { auth } = req.body;
        // console.log(auth);

        const userdata = await User.findOne({cell : auth});
        // console.log(userdata);

        if(!userdata){
            req.status(404).json({
                message : 'Phone No not found',
                action : 'dataNotFound'
            })
        }
        if(userdata){
            //create token 
            const token = createJwtToken({id : userdata.id}, "1d");

            // check previous token
            const prev_token = await UserToken.findOne({userId : userdata.id});
            if(prev_token){
                await UserToken.findByIdAndDelete(prev_token.id)
            }

            // create verify code
            const verifyCode = getrandCode(6)

            console.log(verifyCode);
            // TOKEN CREATED for time validation
            await UserToken.create({userId : userdata.id, verifyToken : token, verifyCode })

            sendSms_B(userdata.cell, `Hi ${userdata.name}, Your Verify  code is ${verifyCode}`)


            res.status(200).json({
                message : "Verify code sent",
                action : 'vCode'
            })
        }



        

    }catch(error){
        // res.status(400).json({error : error.message})
        next(createError(error))

    }


}


/**
 * @access public
 * @route /api/user/phone-code-verify
 * @method post 
 */
export const phoneCodeVerify = async (req, res, next) => {

    try{ 
        // get submited body data
        const { auth, code } = req.body;


        // get user data
        const userdata = await User.findOne({cell : auth});
        
        // get code data
        const tokenCodedata = await UserToken.findOne({userId : userdata.id});


        // data error
        if(!userdata || !tokenCodedata){
            res.status(404).json({
                message : "Data Error, try again",
                action : 'dataError'
            })
        }
        if(tokenCodedata.verifyCode !== code ){
            res.status(200).json({
                message : "Code not match",
                action : 'codeError'
            })
        }

        if(tokenCodedata.verifyCode === code ){

            // user verify update
            const userUpdt = await User.findByIdAndUpdate(userdata.id, {isVerified : true});

            // remove token
            await UserToken.findOneAndDelete({userId : userUpdt.id})

            res.status(200).json({
                message : "Code is match",
                action : 'codeMatch'
            })
        }


        

    }catch(error){
        // res.status(400).json({error : error.message})
        next(createError(error))

    }


}