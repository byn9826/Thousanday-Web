export default function noGetType(value) {
    value = parseInt(value);
    switch (value) {
        case 0:
            return "dog";
        case 1:
            return "cat";
        case 2:
            return "bird";
        case 3:
            return "fish";
        case 4:
            return "other";
    }
}