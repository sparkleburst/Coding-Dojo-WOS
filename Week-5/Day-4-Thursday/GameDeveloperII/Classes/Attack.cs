// Max Gilhespy

namespace GameDeveloperII.Classes;

public class Attack
{
    // properties
    public string Name { get; set; }

    public int DamageAmount { get; set; }

    // constructor to initialize properties
    public Attack(string name, int damageAmount)
    {
        Name = name;
        DamageAmount = damageAmount;
    }
        
    public override string ToString()
    {
        return $"{Name} (Damage: {DamageAmount})";
    }

}