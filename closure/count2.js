'use strict';

function create_counter(initial){
    var x = initial || 0;
    return {
        inc: function(){
            x += 1;
            return x;
        }
    }
}