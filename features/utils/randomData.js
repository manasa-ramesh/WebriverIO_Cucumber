module.exports = function randomData(){
    var random = '';
    random = 100 + (Math.random() * ((10000 - 100) + 1));
    console.log("number", random);
    let ranEmail = "signuptest" + random + "@test.com";
    console.log("random email",ranEmail);
    return ranEmail;
}
