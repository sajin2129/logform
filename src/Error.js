export default function Error(values) {
    const errors = {}

    const email_pattern = /^[^\s@]+@[^\s@+[^\s@]{2,6}]$/;
    const password_pattern = /^(?=.*\d)(?=.*[a-z ])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;



    if(values.email ===""){
        errors.email = "email is required"
    }
    else if(!email_pattern.test(values.email)){
        errors.email = "email is not correct"

    }

    if(values.password ===""){
    errors.password = "password required";
    }else if(!password_pattern.test(values.password)){
        errors.password = "password is not correct"
    }
      return errors
}