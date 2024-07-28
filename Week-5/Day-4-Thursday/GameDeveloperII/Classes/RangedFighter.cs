// Max Gilhespy

namespace GameDeveloperII.Classes;

public class RangedFighter : Enemy
{
    public int Distance { get; set; }

    // ranged fighter max health (100) is passed to the base class as a default value
    public RangedFighter(string name) : base(name, 100)
    {
        // initialze the name of the melee fighter using the argument passed in
        Name = name;
        // initialze the distance with a default value of 5
        Distance = 5;
        // add the ranged fighter's attacks to the AttackList in Enemy class
        AddAttacks(
            new Attack("Shoot Arrow", 20),
            new Attack("Throw Knife", 15)
        );
    }

    public void Dash()
    {
        Distance = 20;
        Console.WriteLine($"{Name} quickly dashes away!");

    }

    // this method has been created to avoid repetative code in program.cs
    // this method checks the distance is far enough for attack to happen
    public void RangedFighterAttack(Enemy Target, Attack? ChosenAttack)
    {
        if (Distance > 9)
        {
            // checks if shootArrow is not null, meaning the Kick attack was found in the list
            if (ChosenAttack != null)
            {
                // calls PerformAttack on the meleeFighter object, passing in rangedFighter and kickAttack.
                PerformAttack(Target, ChosenAttack);
            }
            else
            {
                // this happens when the Kick Attack is not found
                Console.WriteLine("Shoot Arrow attack not found.");
            }

        }
        else
        {
            // this happens when the distance is not far enough for the attack to happen
            System.Console.WriteLine($"{Name} attempted to shoot an arrow at {Target.Name} but missed!");
        }

    }

    // this method provides attack information that can be made specific to attack done
    public override void PrintAttackInformation(Enemy Target, Attack ChosenAttack)
    {
        // check for the attack used and print the appropriate message
        if (ChosenAttack.Name == "Shoot Arrow")
            // print attack information 
            Console.WriteLine($"{Name} shoots an arrow at {Target.Name}, dealing {ChosenAttack.DamageAmount} damage and reducing {Target.Name}'s health to {Target.Health}!!");

        else
        {
            Console.WriteLine($"{Name} throws a knife at {Target.Name}, dealing {ChosenAttack.DamageAmount} damage and reducing {Target.Name}'s health to {Target.Health}!!");
        }
    }
}
