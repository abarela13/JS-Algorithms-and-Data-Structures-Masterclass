function takeShower() {
    console.log("Showering!");
    return "Showering!";
}

function eatBreakfast() {
    let meal = cookFood();
    console.log(`Eating ${meal} today.`);
    return `Eating ${meal} today.`;
}

function cookFood() {
    let items = ["Oatmeal", "Eggs", "Protein Shake"];
    return items[Math.floor(Math.random() * items.length)];
}

function wakeUp() {
    takeShower();
    eatBreakfast();
    console.log("Ok ready to go to work!");
}

wakeUp();