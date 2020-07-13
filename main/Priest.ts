import './const';
import { MAX_HEALTH, INITIAL_LEVEL } from './const';
import Character from './Character';
import Faction from './Faction';

export default class Priest extends Character {

    constructor(name: string, health: number, alive: boolean,level: number, type: string, attackForce: number, healingPv: number, faction: Array<Faction>) {
        super(name, health, alive,level, type, attackForce, healingPv, faction);
        this.setType("Priest");
    }

    attack(target: Character){
        throw new Error("Priest cannot attack");
    } 

    private getHealingPower(){
        this.setHealing(Math.round((Math.random() * 5) + 5));
    }

    heal(target: Character) {

        if(!target.isAlive()){
            throw new Error("Dead character attempted to be healed.");
        }

        if(!this.isAlive()){
            throw new Error("Dead character trying to heal.");
        }

        this.getHealingPower();

        if(this == target) this.setHealth(target.getHealth()+ this.healingPV);

        if(this != target) target.setHealth(target.getHealth()+ this.healingPV);

        target.setHealth((target.getHealth() + this.healingPV));
    }

}