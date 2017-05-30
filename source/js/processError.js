export default function processError(err) {
    switch(err.status) {
        case 404:
            alert("Page Not Exist");
            break;
        case 500:
            alert("Can't connect to server, please try later");
            break;
        case 403:
            alert("Account not exist, please login again");
            break;
    }
}