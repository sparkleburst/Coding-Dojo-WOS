// Max Gilhespy

// See https://aka.ms/new-console-template for more information
// Console.WriteLine("Hello, World!");

// Three Basic Arrays
// Create an integer array with the values 0 through 9 inside.

int[] values = new int[] { 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 };

foreach (int value in values)
{
    Console.WriteLine(value);
}

// Create a string array with the names "Tim", "Martin", "Nikki", and "Sara".

string[] names = new string[] { "Tim", "Martin", "Nikki", "Sara" };

foreach (string name in names)
{
    Console.WriteLine(name);
}

// Create a boolean array of length 10. Then fill it with alternating true/false values, starting with true. (Tip: do this using logic! Do not hard-code the values in!)

bool[] booleanArray = new bool[10];

for (int i = 0; i < booleanArray.Length; i++)
{
    booleanArray[i] = (i % 2 == 0);
}

foreach (bool value in booleanArray)
{
    Console.WriteLine(value);
}

// List of Flavors
// Create a string List of ice cream flavors that holds at least 5 different flavors. (Feel free to add more than 5!)

var iceCreamFlavors = new List<string>()
{
    "Vanilla",
    "Chocolate",
    "Strawberry",
    "Neopolitan",
    "Cookies and Cream",
    "Chocolate Chip"
};

foreach (var flavor in iceCreamFlavors)
{
    Console.WriteLine(flavor);
}

// Output the length of the List after you added the flavors.

Console.WriteLine($"We currently have {iceCreamFlavors.Count} flavors of ice cream.");

// Output the third flavor in the List.

Console.WriteLine($"The third flavor in the list is: {iceCreamFlavors[2]}.");

// Now remove the third flavor using its index location.

iceCreamFlavors.Remove(iceCreamFlavors[2]);

foreach (var flavor in iceCreamFlavors)
{
    Console.WriteLine(flavor);
}

// Output the length of the List again. It should now be one fewer.

Console.WriteLine($"We currently have {iceCreamFlavors.Count} flavors of ice cream.");

// User Dictionary
// Create a dictionary that will store string keys and string values.

Dictionary<string, string> faveIceCream = new();

// Add key/value pairs to the dictionary where:
// Each key is a name from your names array (this can be done by hand or using logic)
// Each value is a randomly selected flavor from your flavors List (remember Random from earlier?)

// create a variable rand to hold a new Random object
Random rand = new();

foreach (var name in names)
{
    faveIceCream.Add(name, iceCreamFlavors[rand.Next(iceCreamFlavors.Count)]);
}

// Loop through the dictionary and print out each user's name and their associated ice cream flavor.

foreach (var person in faveIceCream)
{
    Console.WriteLine($"{person.Key}'s favorite ice cream flavor is {person.Value}.");

}

// Loop through the dictionary and print out each user's name and their associated ice cream flavor.