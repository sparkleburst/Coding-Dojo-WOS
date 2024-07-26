// Max Gilhespy

namespace GameDeveloperII.Classes;

public class MeleeFighter : Enemy
{
    public MeleeFighter(string name) : base(name)
    {
        Name = name;
        SetHealth(120);
        AddAttacks(
            new Attack("Punch", 20),
            new Attack("Kick", 15),
            new Attack("Tackle", 25)
        );
    }

    public void Rage()
    {

    }

}