// Max Gilhespy

namespace GameDeveloperII.Classes;

public class MeleeFighter : Enemy
{
    // melee fighter max health (120) is passed to the base class as a default value
    public MeleeFighter(string name) : base(name, 120)
    {
        // initialze the name of the melee fighter using the argument passed in
        Name = name;
        // add the melee fighter's attacks to the AttackList in Enemy class
        AddAttacks(
            new Attack("Punch", 20),
            new Attack("Kick", 15),
            new Attack("Tackle", 25)
        );
    }

    // this method adds 10 to damage ammount then performs attack
    public void Rage(Enemy Target)
    {
        /* 
           The fighter performs a random attack from its AttackList, but the attack deals 
           10 extra damage Hint: How will you handle updating the DamageAmount of your attack 
           when you perform the attack?
        */

        // initialize a variable to store the random attack
        var randomChosen = RandomAttack();

        // checks if randomChosen is not null, meaning a random attack was chosen
        if (randomChosen != null)
        {
            // add 10 the the damage amount of the attack
            randomChosen.DamageAmount += 10;

            // explain the melee fighter is in rage mode
            Console.WriteLine($"{Name} goes into a fit of rage, increasing their attack power by 10 for the next attack");

            // perform the attack on the target
            PerformAttack(Target, randomChosen);

            // reduce 10 points from randomChosen.damageAmount to reset to original value
            randomChosen.DamageAmount -= 10;
        }
        else
        {
            // this happens if no attack was chosen
            Console.WriteLine("No attack was chosen.");
        }
    }

    // this method provides attack information that can be made specific to attack done
    public override void PrintAttackInformation(Enemy Target, Attack ChosenAttack)
    {
        // check for the attack used and print the appropriate message
        if (ChosenAttack.Name == "Punch")
            // print attack information 
            Console.WriteLine($"{Name} lands a {ChosenAttack.Name} on {Target.Name}, dealing {ChosenAttack.DamageAmount} damage and reducing {Target.Name}'s health to {Target.Health}!!");

        else if (ChosenAttack.Name == "Kick")
            Console.WriteLine($"{Name} launches a {ChosenAttack.Name} at {Target.Name}, dealing {ChosenAttack.DamageAmount} damage and reducing {Target.Name}'s health to {Target.Health}!!");

        else
        {
            Console.WriteLine($"{Name} takes {Target.Name} down with {ChosenAttack.Name}, dealing {ChosenAttack.DamageAmount} damage and reducing {Target.Name}'s health to {Target.Health}!!");
        }
    }
}