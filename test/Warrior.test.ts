import chai = require('chai');

export const assert = chai.assert;
export const expect = chai.expect;
import Warrior from "../main/Warrior";
import Character from '../main/Character';

describe('Warrior Combat Tests', () => {
    describe('A Warrior...', () => {

        let warrior : Warrior;
        let target : Warrior;
        let character : Character;

        beforeEach(() => {
            warrior = new Warrior("Warrior1", 100, true, 1, "Warrior", 1, 1, []);
            target = new Warrior("Target", 100, true, 1, "Warrior", 1, 1, []);
            character = new Character("Character", 100, true, 1, "Character", 1, 1, []);
        })

        it('can inflict more damage to his target', () => {
            
            warrior.attack(target);
            expect(target.getHealth()).to.not.equals(99);
            console.log(target.getHealth());
        });

        it('cannot inflict more than 9 damages', () => {
            
            warrior.attack(target);
            expect(target.getHealth()).to.not.equals(90);
            console.log(target.getHealth());
        });

        it('can damage himself', () => {
            warrior.attack(warrior);
            expect(warrior.getHealth()).to.not.equals(100);
        })

    });
});

describe('Warrior healing test', () => {
    describe('A Warrior...', () => {

        let warrior : Warrior;
        let target : Warrior;
        let character : Character;

        beforeEach(() => {
            warrior = new Warrior("Warrior1", 100, true, 1, "Warrior", 1, 1, []);
            target = new Warrior("Target", 100, true, 1, "Warrior", 1, 1, []);
            character = new Character("Character", 100, true, 1, "Character", 1, 1, []);
        })

        it('cannot heal another character', () => {
            character.setHealth(50);
            expect(() => warrior.heal(character)).to.throw("Cannot heal someone else");
        });

        it('should only be able to heal himself', () => {
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