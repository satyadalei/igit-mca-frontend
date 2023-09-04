const validate = (loginCredentials)=>{
    if (loginCredentials.email === "") {
        return {
            error : true,
            message : "Enter email"
        }
    }
    if (loginCredentials.password === "") {
        return {
            error : true,
            message : "Enter password"
        }
    }
    else{
        return {
            error : false,
            message : "Everything given"
        }   
    }
}

module.exports = validate;