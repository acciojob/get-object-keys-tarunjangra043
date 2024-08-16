const student = {
    name: "Tarun"
};

Object.prototype.getKeys = function() {
    return Object.keys(this);
};

console.log(student.getKeys()); 
