const test = require('tape');
const helpers =require('../views/helpers')

test("Check if rounder rounds a number",t=>{
    t.equal(helpers.rounder(1.12345),'1.12',"rounds correct")
    t.end();
})
test("Check if rounder rounds a string",t=>{
    t.equal(helpers.rounder('1.12345'),'1.12',"rounds correct")
    t.end();
})
test("Check if imagenamer provides good filename for Apple",t=>{
    t.equal(helpers.imagenamer('Apple'),'apple','Apple becomes apple');
    t.end();
})
test("Check if imagenamer provides good filename for White Cabbage",t=>{
    t.equal(helpers.imagenamer('White Cabbage'),'white_cabbage','White Cabbage becomes white_cabbage');
    t.end();
})