// Max Gilhespy

namespace GameDeveloperII.Classes;

public class Enemy
{
    private int _health; // private backing field for health
    // properties
    public string Name { get; set; }

    public int MaxHealth { get; private set; }

    public List<Attack> AttackList { get; private set; }

    public int Health
    {
        get { return _health; }
        private set
        {
            // make sure health doesn't exceed MaxHealth 
            // also that health doesn't drop below 0
            if (value > MaxHealth)
                _health = MaxHealth;
            else if (value < 0)
                _health = 0;
            else
                _health = value;
        }
    }

    // constructor to initialize properties
    // the enemy Health starts MaxHealth which is different for each enemy
    // and the attack list starts empty
    public Enemy(string name, int maxHealth)
    {
        Name = name;
        MaxHealth = maxHealth;
        Health = MaxHealth;
        AttackList = new List<Attack>();
    }

    public int GetHealth()
    {
        return Health;
    }

    // this method sets the value of private Health
    public void SetHealth(int health)
    {
        Health = health; // This will use the custom setter logic
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
    public void PerformAttack(Enemy Target, Attack? ChosenAttack)
    {
        // Write some logic here to reduce the Targets health by your Attack's DamageAmount
        // reduce the target's health by the attack's damage amount 

        // first check if the attacker is alive
        if (Health <= 0)
        {
            Console.WriteLine($"{Name} has died and is unable to attack");
        }

        // then check if the target is alive
        else if (Target.Health > 0)
        {
            // check if ChosenAttack is not null
            if (ChosenAttack != null)
            {
                // reduce the target's health by the attack's damage amount
                Target.Health -= ChosenAttack.DamageAmount;

                // print what happened in the attack
                PrintAttackInformation(Target, ChosenAttack);
            }
            else
            {
                // this happens if ChosenAttack is null
                Console.WriteLine("No attack was chosen.");
            }
        }

        else
        {
            // print why the target cannot be attacked
            Console.WriteLine($"{Target.Name} has {Target.Health} health");
            Console.WriteLine($"{Name} was going to attack {Target.Name} but {Target.Name} is already dead! ");
        }
    }

    // this method provides attack information that can be made specific to attack done
    public virtual void PrintAttackInformation(Enemy Target, Attack ChosenAttack)
    {
        // print attack information 
        Console.WriteLine($"{Name} attacks {Target.Name} with {ChosenAttack.Name}, dealing {ChosenAttack.DamageAmount} damage and reducing {Target.Name}'s health to {Target.Health}!!");
    }

    // this method prints out the enemy stats
    public void PrintEnemyStats()
    {
        // print the health of the enemy
        Console.Write($"{Name} (Health: {Health})\n");

        // send a message if there are no attacks
        if (AttackList.Count == 0)
        {
            Console.WriteLine($"{Name} has no attacks.");
            return;
        }

        Console.WriteLine($"Attacks:");
        // iterate through the attacks
        foreach (var attack in AttackList)
        {
            Console.WriteLine($"- {attack.Name} (Damage: {attack.DamageAmount})");
        }
    }
}