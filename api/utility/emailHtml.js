
export const emailHtml = (name, verify_link) => {

    return(
        `<div style=" padding: 5px 20px; height: 300px; width: 100%;background-color: rgb(186, 233, 164); text-align: center;">
            <h3 style="color: rgb(226, 43, 211);">Hi ${name} Welcome to our clone site</h3>
            <h5 style="color: green;  ">Please verify your account for explore our site</h5>
            <span><a href="${verify_link}">Click</a> for verify or bellow</span>
            <span><a  href="${verify_link}">${verify_link}</a></span>
        </div>`

    )
}
export const emailHtml_recoverPass = (name, verify_link) => {

    return(
        `<div style=" padding: 5px 20px; height: 300px; width: 100%;background-color: rgb(186, 233, 164); text-align: center;">
            <h3 style="color: rgb(226, 43, 211);">Hi ${name} if you want to recover your account password use bellow link.</h3>
            <span><a href="${verify_link}">Click</a> for recover password or bellow</span>
            <span><a  href="${verify_link}">${verify_link}</a></span>
        </div>`

    )
}