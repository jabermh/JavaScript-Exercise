let month = 4;

switch (month) {
    case 12:
    case 1:
    case 2:
        console.log("Winter");
        break;

    case 3:
    case 4:
    case 5:
        console.log("Summer");
        break;

    case 6:
    case 7:
        console.log("Rainy Season");
        break;

    case 8:
    case 9:
    case 10:
    case 11:
        console.log("Autumn");
        break;

    default:
        console.log("Invalid month number");
}