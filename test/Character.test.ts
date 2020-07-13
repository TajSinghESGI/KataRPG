import chai = require('chai');

export const assert = chai.assert;
export const expect = chai.expect;
import Character from "../main/Character";

describe('Combat Tests', () => {
    describe('A character...', () => {

        let character = new Character("Character", 100, true, 1, "Character", 10, 1, []);
        let target = new Character("Target", 100, true, 1, "Character", 1, 1, []);

        it('should be able to hit a target', () => {
            character.attack(target);
        });

        it('the target should have lost 1 PV', () => {
            expect(target.getHealth()).to.be.equals(90);
        });

        it('if damage is bigger than or equals to target\'s health, target should die', () => {
            character.setHealth(1);
            character.attack(target);
            expect(target.isAlive()).to.be.equals(true);
        });

        it('can kill his target', () => {
            target.setHealth(1);
            character.attack(target);
            expect(target.isAlive()).to.be.equals(false);
        });

        it('cannot hurt itself', () => {
            character.setHealth(100);
            expect(() => character.attack(character)).to.throw("ERROR DO NOT ATTEMPT TO KILL YOURSELF");
        });
    });
});

describe('Healing test', () => {
    describe('A character...', () => {

        let character = new Character("Character", 100, true, 1, "Character", 1, 1, []);
        let target = new Character("Character", 100, true, 1, "Character", 1, 1, []);

        beforeEach(() => {
            target = new Character("Character", 100, true, 1, "Character", 1, 1, []);
            character = new Character("Character", 100, true, 1, "Character", 1, 1, []);
        });

        it('should be able to heal another character', () => {
            target.setHealth(50);
            character.heal(target);
            expect(target.getHealth()).to.be.equals(51);
        });

        it('should be able to heal himself', () => {
            character.setHealth(50);
            character.heal(character);
            expect(character.getHealth()).to.be.equals(51);
        });

        it('cannot heal over the maximum health level', () => {
            character.heal(target);
            expect(character.cannotHealMore(character)).to.be.equals(true);
        });
    });
});