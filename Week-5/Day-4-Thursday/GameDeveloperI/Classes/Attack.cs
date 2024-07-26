// Max Gilhespy

namespace GameDeveloperI.Classes;

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


}