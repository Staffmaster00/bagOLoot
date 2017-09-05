const { assert: { assert, equal, deepEqual, notEqual, isFunction, isObject } } = require('chai');
const { getChild, addLoot, niceList, removeToy, createChild, childList } = require('../lootbag.js');
console.log(`childList`, childList);
describe('lootbag', ()=>{
    describe('childList Tests', ()=>{
        it('should exist', ()=>{
            isFunction(childList);
        });
    });
    describe('getChild Tests', ()=>{
        it('should exist', ()=>{
            isFunction(getChild);
        });
        it('should get a specified child', ()=>{
            console.log(`get child`, typeof getChild('Jimmy'));
            isObject(getChild('Jimmy'));
        });
    });
    describe('addLoot Tests', ()=>{
        it('should exist', ()=>{
            isFunction(addLoot);
        });
        it('should add toys', ()=>{
            assert(childList.isArray([]),'adds a childs toys');
            console.log(`toys to childList`, childList);
        });
    });
    describe('niceList', ()=>{
        it('should exist', ()=>{
            isFunction(niceList);
        });
    });
    describe('removeToy', ()=>{
        it('should exist', ()=>{
            isFunction(removeToy);
        });
    });
    describe('createChild', ()=>{
        it('should exist', ()=>{
            isFunction(createChild);
        });
        it('should return an Object', ()=>{
            isObject(createChild('Jimmy'));
            console.log(`created childObj`, createChild('Jimmy'));
        });
    });
});