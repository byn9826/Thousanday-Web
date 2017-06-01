export default function processError(err) {
    switch(err.status) {
        case 404:
            window.location.replace("/error/page404");
            break;
        case 500:
            window.location.replace("/error/page500");
            break;
        case 403:
            window.location.replace("/error/page403");
            break;
    }
}