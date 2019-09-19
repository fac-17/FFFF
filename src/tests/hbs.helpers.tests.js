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
    t.equals(helpers.labels(4), 'Not sourced locally at all', '4 returns the string Not sourced locally at all');
    t.end();
})
test("Checking another of the labels scores", t=>{
    t.equals(helpers.labels(3), 'Mostly not sourced locally', '3 returns the string: Mostly not sourced locally')
    t.end();
})
test("Checking another of the labels scores", t=>{
    t.equals(helpers.labels(2), 'Mostly sourced locally', '2 returns the string: Mostly sourced locally ')
    t.end();
})
test("Check if labels provides the correct string for score", t=>{
    t.equals(helpers.labels(1), 'Locally sourced', '1 returns the string: Locally sourced');
    t.end();
})
test("Check if scorer number returns a string", t=> {
    t.equals(helpers.scorer(4), 'plane', '4 returns plane');
    t.end();
})
test("Check if scorer number returns a string", t=> {
    t.equals(helpers.scorer(3), 'lorry', '3 returns lorry');
    t.end();
})
test("Check if scorer number returns the correct string", t=> {
    t.equals(helpers.scorer(2), 'car', '2 returns car');
    t.end();
})
test("Check if scorer number returns the correct string", t=> {
    t.equals(helpers.scorer(1), 'bike', '1 returns bike');
    t.end();
})
test('Check color function returns relevant color', t => {
    t.equals(helpers.color(4), "#FA0000", "4 returns #FA0000");
    t.end();
})
test('Check color function returns relevant color', t => {
    t.equals(helpers.color(3), "#FB8800", "3 returns #FB8800");
    t.end();
})
test('Check color function returns relevant color', t => {
    t.equals(helpers.color(2), "#F5FA00", "2 returns #F5FA00");
    t.end();
})
test('Check color function returns relevant color', t => {
    t.equals(helpers.color(1), "#38F706", "1 returns #38F706");
    t.end();
})
test('Check score_label_individual function returns a string', t => {
    t.equals(typeof helpers.score_label_individual(1),"string", "Should be a string");
    t.end();
})
test('Check score_label_individual function returns a correct string for 1', t => {
    t.equals(helpers.score_label_individual(1),"Locally sourced","Returns relevant string");
    t.end();
})