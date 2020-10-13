var name = "The window";

var object = {
    name: "My Object",

    getNameFunc: function(){
        var that = this;
        return function(){
            return that.name;
        };
    }
};

console.log(object.getNameFunc()());