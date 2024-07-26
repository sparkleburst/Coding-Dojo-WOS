// Max Gilhespy

using GameDeveloperII.Classes;

public class Program
{
    public static void Main()
    {
        // // create attack objects
        // Attack squish = new("Squish", 10);
        // Attack stomp = new("Stomp", 15);
        // Attack smash = new("Smash", 20);

        // create an enemy object 
        Enemy enemy = new Enemy("Giant");

        // // add attacks to enemy attack list
        // // enemy.AddAttack(squish);
        // // enemy.AddAttack(stomp);
        // // enemy.AddAttack(smash);

        // // Use the new method to add attacks
        // enemy.AddAttacks(squish, stomp, smash);

        // // perform a random attack and display the result
        // Attack? randomAttack = enemy.RandomAttack();
        // if (randomAttack != null)
        // {
        //     Console.WriteLine($"{enemy.Name} uses {randomAttack.Name} which deals {randomAttack.DamageAmount} damage!");
        // }
        // else
        // {
        //     Console.WriteLine($"{enemy.Name} has no attacks!");
        // }

        // // to see the enemy's health
        // Console.WriteLine($"The enemy's health is: {enemy.GetHealth()}");

        // // to see the enemies attack list
        // enemy.PrintAttackList();

        // create instances of each subclass
        MeleeFighter meleeFighter = new("Wrestler");
        RangedFighter rangedFighter = new("Archer");
        MagicCaster magicCaster = new("Sorcerer");

        // display the health of each instance
        // Console.WriteLine($"MeleeFighter Health: {meleeFighter.GetHealth()}");
        // Console.WriteLine($"RangedFighter Health: {rangedFighter.GetHealth()}");
        // Console.WriteLine($"MagicCaster Health: {magicCaster.GetHealth()}");

        // display health and attacks for MeleeFighter
        Console.WriteLine($"MeleeFighter Name: {meleeFighter.Name}, Health: {meleeFighter.Health}");
        Console.WriteLine("Attacks:");
        foreach (var attack in meleeFighter.AttackList)
        {
            Console.WriteLine($"- {attack.Name}: {attack.DamageAmount} damage");
        }

        // to see the attack and damage of all enemies:
        enemy.PrintAttackList();

    }
}

