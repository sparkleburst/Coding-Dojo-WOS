// Max Gilhespy
// worked with Elvyn

System.Console.WriteLine("\n1. Given a List of strings, iterate through the List and print out all the values.\n");

static void PrintList(List<string> MyList)
{
    // Your code here
    // iterate through the list
    foreach (var item in MyList)
    {
        // print each item
        Console.WriteLine(item);
    }
}
List<string> TestStringList = new List<string>() { "Harry", "Steve", "Carla", "Jeanne" };
PrintList(TestStringList);

System.Console.WriteLine();
System.Console.WriteLine("2. Given a List of integers, calculate and print the sum of the values.\n");

static void SumOfNumbers(List<int> IntList)
{
    // Your code here
    // create a variable sum for adding a set of numbers
    int sum = 0;
    // iterate through the list
    for (int i = 0; i < IntList.Count; i++)
    {
        // add the current Intlist value to sum 
        sum += IntList[i];
    }

    // print the calculated sum
    System.Console.WriteLine(sum);
}
List<int> TestIntList = new List<int>() { 2, 7, 12, 9, 3 };
// You should get back 33 in this example
SumOfNumbers(TestIntList);

System.Console.WriteLine();
System.Console.WriteLine("3. Given a List of integers, find and return the largest value in the List.\n");

static int FindMax(List<int> IntList)
{
    // Your code here
    // create a variable max that assumes the largest value is at IntList[0]
    var max = IntList[0];

    // iterate through the list
    for (int i = 1; i < IntList.Count; i++)
    {
        // System.Console.WriteLine($"IntList[{i-1}]: {IntList[i-1]}");
        // check if the current IntList value is greater then the variable max 
        if (IntList[i] > max)
        {
            // if so then assign the current IntList value to max
            max = IntList[i];
        }
    }

    // return the variable max which now holds the greatest value
    return max;
}
List<int> TestIntList2 = new List<int>() { -9, 12, 10, 3, 17, 5 };
// You should get back 17 in this example
System.Console.WriteLine(FindMax(TestIntList2));

System.Console.WriteLine();
System.Console.WriteLine("4. Given a List of integers, return the List with all the values squared.\n");

static List<int> SquareValues(List<int> IntList)
{
    // Your code here
    // iterate through the list
    for (int i = 0; i < IntList.Count; i++)
    {
        // multiply the current IntList value by the current IntList value 
        // and assign the value as the current Intlist value
        IntList[i] *= IntList[i];
        // System.Console.WriteLine(IntList[i]);
    }

    // return the modified IntList
    return IntList;
}
List<int> TestIntList3 = new List<int>() { 1, 2, 3, 4, 5 };
// You should get back [1,4,9,16,25], think about how you will show that this worked
var SquaredList = SquareValues(TestIntList3);

// iterate through the list
foreach (var squared in SquaredList)
{
    System.Console.Write($"{squared} ");
}

System.Console.WriteLine("\n");
System.Console.WriteLine("5. Given an array of integers, return the array with all values below 0 replaced with 0.\n");

static int[] NonNegatives(int[] IntArray)
{
    // iterate through the array
    for (int i = 0; i < IntArray.Length; i++)
    {
        // if the current value is less than 0
        if (IntArray[i] < 0)
        {
            // then make the current value 0
            IntArray[i] = 0;
        }
    }

    // return the modified array
    return IntArray;
}
int[] TestIntArray = new int[] { -1, 2, 3, -4, 5 };
// You should get back [0,2,3,0,5], think about how you will show that this worked
NonNegatives(TestIntArray);

System.Console.Write("The modified array: ");

// iterate through the array
foreach (var value in TestIntArray)
{
    // print each value in the array
    System.Console.Write($"{value} ");
}

System.Console.WriteLine("\n");
System.Console.WriteLine("6. Given a dictionary, print the contents of the said dictionary.\n");

static void PrintDictionary(Dictionary<string, string> MyDictionary)
{
    // Your code here
    // iterate through the dictionary
    foreach (var item in MyDictionary)
    {
        // print each key value pair in the dictionary
        Console.WriteLine("Key: " + item.Key + " Value: " + item.Value);
    }
}
Dictionary<string, string> TestDict = new Dictionary<string, string>();
TestDict.Add("HeroName", "Iron Man");
TestDict.Add("RealName", "Tony Stark");
TestDict.Add("Powers", "Money and intelligence");
PrintDictionary(TestDict);

System.Console.WriteLine();
System.Console.WriteLine("7. Given a search term, return true or false whether the given term is a key in a dictionary.\n");

static bool FindKey(Dictionary<string, string> MyDictionary, string SearchTerm)
{
    // Your code here
    // iterate through the dictionary
    foreach (var item in MyDictionary)
    {
        // checked if the key is the same as the given SearchTerm
        if (item.Key == SearchTerm)
        {
            // if so return true
            return true;
        }
    }
    // otherwise return false
    return false;
}
// Use the TestDict from the earlier example or make your own
// This should print true
Console.WriteLine(FindKey(TestDict, "RealName"));
// This should print false
Console.WriteLine(FindKey(TestDict, "Name"));

System.Console.WriteLine();
System.Console.WriteLine("8. Given a List of names and a List of integers, create a dictionary where the key is a name from the List of names and the value is a number from the List of numbers. Assume that the two Lists will be of the same length. Don't forget to print your results to make sure it worked.\n");

static Dictionary<string, int> GenerateDictionary(List<string> Names, List<int> Numbers)
{
    // Your code here
    // Create a new dictionary
    Dictionary<string, int> dictionary = new();

    // Assume the lists are of the same length
    // iterate through the given lists
    for (int i = 0; i < Names.Count; i++)
    {
        // assign the current Name and Number to the dictionary
        dictionary[Names[i]] = Numbers[i];
    }

    // return the dictionary which now has the names and numbers assigned
    return dictionary;

}
// We've shown several examples of how to set your tests up properly, it's your turn to set it up!
// Your test code here

List<string> names = new List<string> { "Julie", "Harold", "James", "Monica" };
List<int> numbers = new List<int> { 6, 12, 7, 10 };

// generate dictionary
Dictionary<string, int> result = GenerateDictionary(names, numbers);

// print results to make sure it worked
foreach (var kvp in result)
{
    Console.WriteLine($"{kvp.Key}: {kvp.Value}");
}

System.Console.WriteLine();
