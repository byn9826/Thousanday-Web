export default function noGetAbility(value) {
    value = parseInt(value);
    switch (value) {
        case 0:
            return 'attack';
        case 1:
            return 'defend';
        case 2:
            return 'health';
        case 3:
            return 'swift';
        case 4:
            return 'lucky';
    }
}