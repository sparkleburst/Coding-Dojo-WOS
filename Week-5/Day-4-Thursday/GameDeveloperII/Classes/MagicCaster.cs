// Max Gilhespy

namespace GameDeveloperII.Classes;

public class MagicCaster : Enemy
{
    // magic caster max health (80)is passed to the base class as a default value
    public MagicCaster(string name) : base(name, 80)
    {
        // initialze the name of the melee fighter using the argument passed in
        Name = name;
        // add the melee fighter's attacks to the AttackList in Enemy class
        AddAttacks(
            new Attack("Fireball", 25),
            new Attack("Lightning Bolt", 20),
            new Attack("Staff Strike", 10)
        );
    }

    // this method increases the heath amount of the enemy target
    public void Heal(Enemy Target)
    {
        // initialize a variable to hold new health and make it equal to current health + 40
        int newHealth = Target.GetHealth() + 40;
        // initialize a variable to hold the max health of the given target
        int maxHealth = Target.MaxHealth;
        // use setter to update health
        Target.SetHealth(newHealth);

        // first check if the healer is alive
        if (Health <= 0)
        {
            Console.WriteLine($"{Name} has died and is unable to heal");
        }
        else
        {    // print heal details
            Console.Write($"{Name} casts Heal on {Target.Name} and increases their health to ");
            // check if health exceeds maxhealth 
            if (Target.Health >= maxHealth)
            {
                // if so use maxHealth
                Console.Write($"the maximum: {maxHealth}\n");
            }

            else
            {
                // otherwise use the set health
                Console.WriteLine($": {Target.Health}\n");
            }
        }

    }

    // this method provides attack information that can be made specific to attack done
    public override void PrintAttackInformation(Enemy Target, Attack ChosenAttack)
    {
        // check the attack is a fireball or a lightning bolt
        if (ChosenAttack.Name == "Fireball" || ChosenAttack.Name == "Lightning Bolt")
            // print attack information for fireball or lightning bolt
            Console.WriteLine($"{Name} sends a {ChosenAttack.Name} hurtling at {Target.Name}, dealing {ChosenAttack.DamageAmount} damage and reducing {Target.Name}'s health to {Target.Health}!!");
        else
        {
            // print attack information for staff strike
            Console.WriteLine($"{Name} smacks {Target.Name} with {ChosenAttack.Name}, dealing {ChosenAttack.DamageAmount} damage and reducing {Target.Name}'s health to {Target.Health}!!");
        }
    }
}
