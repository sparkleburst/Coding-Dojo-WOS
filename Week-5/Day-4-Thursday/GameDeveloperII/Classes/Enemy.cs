// Max Gilhespy

namespace GameDeveloperII.Classes;

public class Enemy
{
    // properties
    public string Name { get; set; }

    public int Health { get; private set; }

    public List<Attack> AttackList { get; private set; }

    // constructor to initialize properties
    // the enemy health starts at 100 and the attack list starts empty
    public Enemy(string name)
    {
        Name = name;
        Health = 100;
        AttackList = new List<Attack>();
    }

    // This method adds one or more attacks to the attack list
    public void AddAttacks(params Attack[] attacks)
    {
        foreach (var attack in attacks)
        {
            AttackList.Add(attack);
        }
    }

    // this method generates a random number which is used to determine which attack happens
    public Attack? RandomAttack()
    {
        // if there are no attacks in the attck list, return null
        if (AttackList.Count == 0)
        {
            return null;
        }

        // initiate the random number generator
        var rand = new Random();

        // the index number will be from 0 to (the amount in the attack list) - 1
        int index = rand.Next(AttackList.Count);

        // return the attack at the given index
        return AttackList[index]!;
    }

    // Inside of the Enemy class
    public void PerformAttack(Enemy Target, Attack ChosenAttack)
    {
        // Write some logic here to reduce the Targets health by your Attack's DamageAmount
        // Target is a property of Enemy class, Chosen Attack is a property of 
        Console.WriteLine($"{Name} attacks {Target.Name}, dealing {ChosenAttack.DamageAmount} damage and reducing {Target.Name}'s health to {Target.Health}!!");
    }

    // this method gets the value of private Health
    public int GetHealth()
    {
        return Health;
    }

    // this method sets the value of private Health
    public void SetHealth(int health)
    {
        // check that health is not negative
        if (health >= 0)
        {
            Health = health;
        }
    }

    // this method prints out the attack list
    public void PrintAttackList()
    {
        // send a message if there are no attacks
        if (AttackList.Count == 0)
        {
            Console.WriteLine($"{Name} has no attacks.");
            return;
        }

        Console.WriteLine($"{Name}'s Attack List:");
        // iterate through the attacks
        foreach (var attack in AttackList)
        {
            Console.WriteLine($"{attack.Name} (Damage: {attack.DamageAmount})");
        }
    }
}