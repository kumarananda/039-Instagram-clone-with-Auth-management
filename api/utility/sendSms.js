import Vonage from '@vonage/server-sdk';
import axios from 'axios';


// for bulksmsbd.net SMS service
export const sendSms_B = async (number_to, message ) => {
    const apikey = "emL6aUC91aMYNR8fQ0d2";
    const approvedSenderID = "8809612443880";

    try{
        console.log('sms test');
        // console.log('sms test');

        await axios.post(`https://bulksmsbd.net/api/smsapi?api_key=${apikey}&type=text&number=${number_to}&senderid=${approvedSenderID}&message=${message}`)
        console.log('sms test');
    }catch(error){
        console.log(error);
    }
}








// for Vonage SMS service
const vonage = new Vonage({
  apiKey: "0dc01058",
  apiSecret: "Hnex6wYC8waVNemY"
})


// when we use paid plan from vonage than we use prams on "sendSms = (from, to, text)"
export const sendSms_V = () => {
    const from = "Vonage APIs"
    const to = "8801647544959"
    const text = 'Instagram clone project testing'

    vonage.message.sendSms(from, to, text, (err, responseData) => {
        if (err) {
            console.log(err);
        } else {
            if(responseData.messages[0]['status'] === "0") {
                console.log("Message sent successfully.");
            } else {
                console.log(`Message failed with error: ${responseData.messages[0]['error-text']}`);
            }
        }
    })
}