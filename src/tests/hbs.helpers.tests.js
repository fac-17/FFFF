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
test("Check if labels provides a string for a score", t=>{
    t.equals(helpers.labels(1), 'Not sourced locally at all', '1 returns the string Not sourced locally at all');
    t.end();
})
test("Check if labels provides the correct string for score", t=>{
    t.equals(helpers.labels(4), 'Locally sourced', '4 returns the string: Locally sourced');
    t.end();
})
test("Checking another of the labels scores", t=>{
    t.equals(helpers.labels(3), 'Mostly sourced locally', '3 returns the string: Mostly sourced locally ')
    t.end();
})
test("Check if scorer number returns a string", t=> {
    t.equals(helpers.scorer(1), 'plane', '1 returns plane');
    t.end();
})
test("Check if scorer number returns the correct string", t=> {
    t.equals(helpers.scorer(3), 'car', '3 returns car');
    t.end();
})
test('Check color function returns relevant color', t => {
    t.equals(helpers.color(1), "#FA0000", "1 returns #FA0000");
    t.end();
})
test('Check color function returns relevant color', t => {
    t.equals(helpers.color(2), "#FB8800", "2 returns #FB8800");
    t.end();
})
test('Check color function returns relevant color', t => {
    t.equals(helpers.color(3), "#F5FA00", "3 returns #F5FA00");
    t.end();
})
test('Check color function returns relevant color', t => {
    t.equals(helpers.color(4), "#38F706", "4 returns #38F706");
    t.end();
})