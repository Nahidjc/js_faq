function callback_all(name, home, work) {
    console.log(`This is ${name} and i am from ${home}`);
    work();

}

function Engineer() {
    console.log("I am working as a fullstack Software engineer");
}

function Developer() {
    console.log("I am working as a fullstack Web Developer");
}
callback_all("Nahid hasan", "Munshiganj", Engineer);

callback_all("Sabbir Al azim", "Bagerhat", Developer);