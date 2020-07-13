import './const';
import { MAX_HEALTH, INITIAL_LEVEL } from './const';
import Character from './Character';
import Faction from './Faction';

export default class Warrior extends Character {

    constructor(
        name: string, 
        health: number, 
        alive: boolean,
        level: number, 
        type: string,
        attackForce: number, 
        healingPV: number, 
        faction: Array<Faction>) 
        {
            super(name, health, alive,level, type, attackForce, healingPV, faction);
            this.setType("Warrior");
        }

    attack(target: Character){
        if(!target.isAlive()){
            throw new Error("CANNOT ATTACK A DEAD PERSON");
        } else if (!this.isAlive()) {
            throw new Error("YOU CANNOT ATTACK BECAUSE YOU'RE DEAD")
        }

        this.getForce();
        
        if(this == target && this.isAlive()){
            this.beingHit(this.attackForce);
        } else {
            target.beingHit(this.attackForce);
        }
        if(target.getHealth() == 0) target.dead;
    } 

    getForce(){
        this.setAttack(Math.round(Math.random() * 9))
    }

    heal(target: Character){
        if(this != target) throw new Error("Cannot heal someone else");
        if(!this.isAlive()) throw new Error("ERROR CANNOT HEAL YOURSELF BECAUSE YOU'RE DEAD");

        target.setHealth(target.getHealth()+1);
    }
}