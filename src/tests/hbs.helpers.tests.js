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
