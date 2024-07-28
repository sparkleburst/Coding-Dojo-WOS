// Max Gilhespy

using System.Runtime.CompilerServices;
using GameDeveloperII.Classes;

public class Program
{
    public static void Main()
    {
        System.Console.WriteLine();
        System.Console.WriteLine("Enemies fighting this round:");

        // create instances of each subclass
        MeleeFighter meleeFighter = new("Wrestler");
        RangedFighter rangedFighter = new("Archer");
        MagicCaster magicCaster = new("Sorcerer");

        System.Console.WriteLine();

        // to see the health attack and attack damage of melee fighter
        Console.Write($"Melee Fighter: ");
        meleeFighter.PrintEnemyStats();

        System.Console.WriteLine();

        // to see the health attack and attack damage of ranged fighter
        Console.Write($"Ranged Fighter: ");
        rangedFighter.PrintEnemyStats();

        System.Console.WriteLine();

        // to see the health attack and attack damage of magic caster
        Console.Write($"Magic Caster: ");
        magicCaster.PrintEnemyStats();

        System.Console.WriteLine();
        System.Console.WriteLine("Let the fight begin!");
        System.Console.WriteLine();

        // uses a linq method (FirstOrDefault) with a lambda expression (a => a.Name == "Kick")
        // to look for the Kick attack in AttackList and then assigns attack name and damage amount
        // to kickAttack
        var kick = meleeFighter.AttackList.FirstOrDefault(a => a.Name == "Kick");

        // calls PerformAttack on the MeleeFighter object, passing in rangedFighter and kick.
        meleeFighter.PerformAttack(rangedFighter, kick);

        // calls Rage on the MeleeFighter object, passing in magicCaster
        meleeFighter.Rage(magicCaster);

        // using the linq method with the lambda expression
        var shootArrow = rangedFighter.AttackList.FirstOrDefault(a => a.Name == "Shoot Arrow");

        // calls RangedFighterAttack on the RangedFighter class passing in meleeFighter and shootArrow 
        rangedFighter.RangedFighterAttack(meleeFighter, shootArrow);

        // calls Dash on the RangedFighter class
        rangedFighter.Dash();

        // calls RangedFighterAttack again
        rangedFighter.RangedFighterAttack(meleeFighter, shootArrow);

        // using the linq method with the lambda expression
        var fireball = magicCaster.AttackList.FirstOrDefault(a => a.Name == "Fireball");

        // calls PerformAttack on the MagicCaster object, passing in meleeFighter and fireball.
        magicCaster.PerformAttack(meleeFighter, fireball);

        // calls Heal on the MagicCaster class passing in rangedFighter
        magicCaster.Heal(rangedFighter);

        // calls Heal on the MagicCaster class passing in magicCaster
        magicCaster.Heal(magicCaster);

        // using the linq method with the lambda expression
        var tackle = meleeFighter.AttackList.FirstOrDefault(a => a.Name == "Tackle");

        // calls PerformAttack on the MeleeFighter object, passing in rangedFighter and tackle.
        meleeFighter.PerformAttack(rangedFighter, tackle);

        // calls Rage on the MeleeFighter object, passing in magicCaster
        meleeFighter.Rage(magicCaster);

        // using the linq method with the lambda expression
        var lightningBolt = magicCaster.AttackList.FirstOrDefault(a => a.Name == "Lightning Bolt");

        // calls PerformAttack on the MagicCaster object, passing in meleeFighter and lightning bolt.
        magicCaster.PerformAttack(meleeFighter, lightningBolt);

        // using the linq method with the lambda expression
        var staffStrike = magicCaster.AttackList.FirstOrDefault(a => a.Name == "Staff Strike");

        // calls PerformAttack on the MagicCaster object, passing in meleeFighter and staff strike.
        magicCaster.PerformAttack(meleeFighter, staffStrike);

        // using the linq method with the lambda expression
        var throwKnife = rangedFighter.AttackList.FirstOrDefault(a => a.Name == "Throw Knife");

        // calls RangedFighterAttack on the RangedFighter class passing in meleeFighter and throwKnife 
        rangedFighter.RangedFighterAttack(meleeFighter, throwKnife);

        // using the linq method with the lambda expression
        var punch = meleeFighter.AttackList.FirstOrDefault(a => a.Name == "Punch");

        // calls PerformAttack on the MeleeFighter object, passing in rangedFighter and tackle.
        meleeFighter.PerformAttack(rangedFighter, punch);

        Console.WriteLine($"{meleeFighter} is irate from being picked on and goes on a rampage");

        meleeFighter.Rage(rangedFighter);

        meleeFighter.Rage(magicCaster);

        meleeFighter.Rage(rangedFighter);

        meleeFighter.Rage(magicCaster);

        meleeFighter.Rage(rangedFighter);

        meleeFighter.Rage(magicCaster);

        rangedFighter.RangedFighterAttack(meleeFighter, throwKnife);

        magicCaster.PerformAttack(meleeFighter, staffStrike);

        magicCaster.Heal(rangedFighter);

        System.Console.WriteLine();
    }
}

