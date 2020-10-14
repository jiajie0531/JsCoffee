let user = {
    name: "John",
    hi(){console.log(this.name);},
    bye(){console.log("Bye");}
};

user.hi();

(user.name == "John" ? user.hi : user.bye)();