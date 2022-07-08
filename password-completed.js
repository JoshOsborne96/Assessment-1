let password = 'codingisfun007'

if (password.length < 20 && password.length >= 10 && /\d/.test(password)){
    console.log('Acceptable password')
}    else if (password.length > 20){
    console.log('Password contains too many characters')
} else {
    console.log('Password does not meet requirments')
}

// The combination of these two lines of code: (password.length < 20 && password.length >= 10 and (password.length > 20) will give an error for any password with over 20 characters.
