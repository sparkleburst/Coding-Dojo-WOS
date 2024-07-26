// Max Gilhespy

using GameDeveloperI.Classes;

public class Program
{
    public static void Main()
    {
        // create attack objects
        Attack squish = new("Squish", 10);
        Attack stomp = new("Stomp", 15);
        Attack smash = new("Smash", 20);

        // create an enemy object 
        Enemy enemy = new Enemy("Giant");

        // add attacks to enemy attack list
        // enemy.AddAttack(squish);
        // enemy.AddAttack(stomp);
        // enemy.AddAttack(smash);

        // Use the new method to add attacks
        enemy.AddAttacks(squish, stomp, smash);

        // perform a random attack and display the result
        Attack? randomAttack = enemy.RandomAttack();
        if (randomAttack != null)
        {
            Console.WriteLine($"{enemy.Name} uses {randomAttack.Name} which deals {randomAttack.DamageAmount} damage!");
        }
        else
        {
            Console.WriteLine($"{enemy.Name} has no attacks!");
        }

        // to see the enemy's health
        Console.WriteLine($"The enemy's health is: {enemy.GetHealth()}");

        // to see the enemies attack list
        enemy.PrintAttackList();

    }
}

