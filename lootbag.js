const sqlite3  = require('sqlite3');
const db = new sqlite3.Database('bagOLoot.sqlite3', (err)=>{
    console.log(`connection?`, err);
});
let childList = (identifier) => {
    return new Promise( (resolve,reject)=>{
        db.get(`SELECT name FROM children WHERE name = "${identifier}"`, (err, child)=>{
            if(err){
                console.log(err.toString())
                reject(err);
            }
            console.log(`child`, child);
            resolve(child);
        });
    });
};//TODO: Make this a database get
let getChild = (child) => {
    childList.forEach((childObj)=>{
        if(childObj.name === child){
            return childObj
        } else {
            console.log(`Child not found.`);
        };
    });
};
let createChild = (childName)=>{
    let newChild = {};
    newChild.name = childName;
    newChild.toys = [];
    childList.push(newChild);
    return newChild;
};
let addLoot = (child, toy) => {
    childList.forEach((childObj)=>{
        if(childObj.name === child){
            childObj.toys.push(toy);
        };
    });
};
let niceList = () => {

};
let removeToy = () => {

};

module.exports = {getChild, addLoot, niceList, removeToy, createChild, childList}
// let addLoot = (child, toy) => {
//     if (child === false){
//         let child = Object.create();
//         child.toys = [];
//         child.toys.unshift(toy);
//         childList.unshift(child);
//     } else {
//         child.toys.unshift(toy);
//     };
// };