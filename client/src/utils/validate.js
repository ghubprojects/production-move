export const errorText = {
    emptyFullname: 'Please enter your full name.',
    emptyRole: 'Please enter your role.',
    emptyEmail: 'Please enter your email address.',
    emptyPassword: 'Please enter your password.',
    emptyAddress: 'Please enter your address.',

    blankSpacePassword: 'Your password cannot start or end with a blank space.',
    blankSpaceFullname: 'Your fullname cannot start or end with a blank space.',
    blankSpaceRole: 'Your role cannot start or end with a blank space.',
    blankSpaceAddress: 'Your address cannot start or end with a blank space.',

    invalidEmail: 'Only letters (a-z), numbers (0-9), at(@) and periods (.) are allowed.',
    invalidName: 'Only letters (a-z, A-Z) and blank spaces are allowed.',
    invalidFullname:
        'Your fullname must consists of at least two words, each word consists of at least two letters',
    incorrectEmail: 'No account found with that email. Try another.',
    incorrectPassword: 'The password you entered is incorrect. Please try again.',
    alreadyExistEmail: 'The email address you entered already exists.',
};

export const validateEmail = (email) => {
    if (!email.length) {
        return errorText.emptyEmail;
    } else if (!/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+$/.test(email)) {
        return errorText.invalidEmail;
    } else return true;
};

export const validatePassword = (password) => {
    if (!password.length) {
        return errorText.emptyPassword;
    } else if (password.startsWith(' ') || password.endsWith(' ')) {
        return errorText.blankSpacePassword;
    } else return true;
};

export const validateFullname = (fullname) => {
    if (!fullname.length) {
        return errorText.emptyFullname;
    } else if (!/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+$/.test(fullname)) {
        return errorText.invalidFullname;
    } else return true;
};

export const validateRole = (role) => {
    if (!role.length) {
        return errorText.emptyRole;
    } else if (!/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+$/.test(role)) {
        return errorText.invalidRole;
    } else return true;
};

export const validateAddress = (address) => {
    if (!address.length) {
        return errorText.emptyAddress;
    } else if (!/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+$/.test(address)) {
        return errorText.invalidAddress;
    } else return true;
};
