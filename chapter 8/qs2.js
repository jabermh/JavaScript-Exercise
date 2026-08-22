// Using let
for (let i = 1; i <= 5; i++) {
    setTimeout(() => {
        console.log("let:", i);
    }, 1000);
}

// Using var
for (var j = 1; j <= 5; j++) {
    setTimeout(() => {
        console.log("var:", j);
    }, 1000);
}