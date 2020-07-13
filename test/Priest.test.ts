import chai = require('chai');

export const assert = chai.assert;
export const expect = chai.expect;
import Warrior from "../main/Warrior";
import Character from '../main/Character';
import Priest from '../main/Priest';

describe('Priest Combat Tests', () => {
    describe('A Priest...', () => {

        let warrior : Warrior;
        let character : Character;
        let priest : Priest;

        beforeEach(() => {
            warrior = new Warrior("Warrior1", 100, true, 1, "Warrior", 1, 1, []);
            character = new Character("Character", 100, true, 1, "Character", 1, 1, []);
            priest = new Priest("Priest", 100, true, 1, "Warrior", 1, 1, []);
        })

        it('cannot inflict damage to anyone', () => {
            expect(() => priest.attack(character)).to.throw("Priest cannot attack");
        });
    });
});

describe('Priest Healing Tests', () => {
    describe('A Priest...', () => {

        let warrior : Warrior;
        let character : Character;
        let priest : Priest;

        beforeEach(() => {
            warrior = new Warrior("Warrior1", 100, true, 1, "Warrior", 1, 1, []);
            character = new Character("Character", 100, true, 1, "Character", 1, 1, []);
            priest = new Priest("Priest", 100, true, 1, "Priest", 1, 1, []);
        })

        it('can heal more than an basic character', () => {
            character.setHealth(50);
            priest.heal(character);
            var healingPV =priest.getHealing();
            console.log(character.getHealth());
            
            expect(character.getHealth()).to.be.greaterThan(5);
        });
    });
});