"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var Character_1 = require("../main/Character");
chai_1.should();
describe('Hello World test suite', function () {
    it('Can say Hello World', function () {
        var result = new Character_1.HelloWorld().helloWorld();
        result.should.equals('Hello World', "Should return: Hello World, but returned: " + result);
    });
});
