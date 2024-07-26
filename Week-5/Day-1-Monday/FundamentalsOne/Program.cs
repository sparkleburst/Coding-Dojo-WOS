// Max Gilhespy

// See https://aka.ms/new-console-template for more information
// Console.WriteLine("Hello, World!");

// print the question
Console.WriteLine($"Create a (for) loop that prints all values from 1-255.");

// iterate through the index from 1 - 255
for (int i = 1; i < 256; i++)
{
    // this prints a list of numbers from 1 - 255
    Console.WriteLine($"{i}");
}

// this is to create a line space for readability
Console.WriteLine();

// this ensures the next output is on a new line
Console.WriteLine($"or");

// this is to create a line space for readability
Console.WriteLine();

// iterate through the index from 1 - 255
for (int i = 1; i < 256; i++)
{
    // this prints a single line of numbers from 1 - 255
    Console.Write($"{i}, ");
}

// this ensures the next output is on a new line 
Console.WriteLine();

// this is to create a line space for readability
Console.WriteLine();

// print the question
Console.WriteLine($"Create a new (for) loop that generates 5 random numbers between 10 and 20.");

// create a variable rand to hold a new Random object
var rand = new Random();

// iterate through the index from 1 - 4 (5 times)
for (int i = 0; i < 5; i++)
{
    // every time the loop executes we will get a NEW random value between 10 and 20
    Console.WriteLine(rand.Next(10, 21));
}

// this is to create a line space for readability
Console.WriteLine();

// print the question
Console.WriteLine($"Modify the previous (for) loop to add the random values together and print the sum after the loop finishes.");

// no need to create new random object as it has already been created

// create variable randAdded and initialize it to zero for keeping track of the
// accumulated sum
var randAdded = 0;

// iterate through the index from 1 - 4 (5 times)
for (int i = 0; i < 5; i++)
{
    // create variable randomValue and assign current random value to the variable
    var randomValue = rand.Next(10, 21);

    // add the current random value in randomValue to randAdded
    randAdded += randomValue;

    // print the generated random value for debugging
    Console.WriteLine($"Random value {i + 1}: {randomValue}");
}

// print out the accumulated sum
Console.WriteLine($"The total sum of 5 random values between 10 and 20 is: {randAdded}");

// this is to create a line space for readability
Console.WriteLine();

// print the question
Console.WriteLine($"Create a new (for) loop that prints all values from 1 to 100 that are divisible by 3 OR 5, but NOT both.");

// iterate through the index from 1 - 100
for (int i = 1; i < 101; i++)
{
    // this gets all the numbers that are divisible by 3 or divisible by 5 or divisible by both
    // if (i % 3 == 0 || i % 5 == 0)
    // this gets all the numbers that are divisible by 3 and divisible by 5.
    // if (i % 3 == 0 && i % 5 == 0)

    // this gets all the numbers that are divisible by 3 or divisible by 5 but are not divisible
    // by both
    if ((i % 3 == 0 || i % 5 == 0) && !(i % 3 == 0 && i % 5 == 0))
    {
        // this prints the requested numbers
        Console.Write($"{i}, ");
    }
}

// this ensures the next output is on a new line 
Console.WriteLine();

// this is to create a line space for readability
Console.WriteLine();

// print the question
Console.WriteLine($"Modify the previous (for) loop to print 'Fizz' for multiples of 3 and 'Buzz' for multiples of 5.");

// iterate through the index from 1 - 100
for (int i = 1; i < 101; i++)
{
    // this gets the numbers divisble by 3 but not divisible by 3 and 5 together
    if ((i % 3 == 0) && !(i % 3 == 0 && i % 5 == 0))
    {
        // this prints the requested word with the respective numbers
        Console.Write($"{i}: Fizz, ");
    }

    // this gets the numbers divisble by 5 but not divisible by 3 and 5 together
    if ((i % 5 == 0) && !(i % 3 == 0 && i % 5 == 0))
    {
        // this prints the requested word with the respective numbers
        Console.Write($"{i}: Buzz, ");
    }
}

// this ensures the next output is on a new line 
Console.WriteLine();

// this is to create a line space for readability
Console.WriteLine();

// print the question
Console.WriteLine($" Modify the previous (for) loop once more to now also print 'FizzBuzz' for numbers that are multiples of both 3 and 5.");

// iterate through the index from 1 - 100
for (int i = 1; i < 101; i++)
{
    // this gets the numbers divisible by both 3 and 5
    if (i % 3 == 0 && i % 5 == 0)
    {
        // this prints the requested word with the respective numbers
        Console.Write($"{i}: FizzBuzz, ");
    }

    // this gets the numbers divisble by 3 but not divisible by 3 and 5 together
    if ((i % 3 == 0) && !(i % 3 == 0 && i % 5 == 0))
    {
        // this prints the requested word with the respective numbers
        Console.Write($"{i}: Fizz, ");
    }

    // this gets the numbers divisble by 5 but not divisible by 3 and 5 together
    if ((i % 5 == 0) && !(i % 3 == 0 && i % 5 == 0))
    {
        // this prints the requested word with the respective numbers
        Console.Write($"{i}: Buzz, ");
    }
}

// this ensures the next output is on a new line 
Console.WriteLine();

// this is to create a line space for readability
Console.WriteLine();

// print switching to while loops
Console.WriteLine($"Now the same questions using while loops");

// this is to create a line space for readability
Console.WriteLine();

// print the question
Console.WriteLine($"Create a (while) loop that prints all values from 1-255.");

// create a variable number and instantiate to 0;
var number = 1;

// loop until i = 256
while (number < 256)
{
    // this prints a list of numbers from 1 - 255
    Console.Write($"{number}, ");
    number++;
}

// this ensures the next output is on a new line 
Console.WriteLine();

// this is to create a line space for readability
Console.WriteLine();

// print the question
Console.WriteLine($"Create a new (while) loop that generates 5 random numbers between 10 and 20.");

// no need to create new random object as it has already been created

// create a variable number and instantiate to 0;
var count = 0;

// loop 5 times
while (count < 5)
{
    // every time the loop executes we will get a NEW random value between 10 and 20
    Console.WriteLine(rand.Next(10, 21));
    count++;
}

// this is to create a line space for readability
Console.WriteLine();

// print the question
Console.WriteLine($"Modify the previous (while) loop to add the random values together and print the sum after the loop finishes.");

// no need to create new random object as it has already been created

// use variable randAdded and assign it to zero for keeping track of the
// accumulated sum
randAdded = 0;
// use variable count and assign it to zero for keeping track of the
// accumulated sum
count = 0;

// loop 5 times
while (count < 5)
{
    // create variable randomValue and assign current random value to the variable
    var randomValue = rand.Next(10, 21);

    // add the current random value in randomValue to randAdded
    randAdded += randomValue;

    // print the generated random value for debugging
    Console.WriteLine($"Random value {count + 1}: {randomValue}");

    count++;
}

// print out the accumulated sum
Console.WriteLine($"The total sum of 5 random values between 10 and 20 is: {randAdded}");

// this is to create a line space for readability
Console.WriteLine();

// print the question
Console.WriteLine($"Create a new (while) loop that prints all values from 1 to 100 that are divisible by 3 OR 5, but NOT both.");

// use variable number and assign it to one for keeping track of numbers from 1 to 100
number = 1;

// loop 100 times
while (number < 101)
{
    // this gets all the numbers that are divisible by 3 or divisible by 5 but are not divisible
    // by both
    if ((number % 3 == 0 || number % 5 == 0) && !(number % 3 == 0 && number % 5 == 0))
    {
        // this prints the requested numbers
        Console.Write($"{number}, ");
    }
    number++;
}

// this ensures the next output is on a new line 
Console.WriteLine();

// this is to create a line space for readability
Console.WriteLine();

// print the question
Console.WriteLine($"Modify the previous (while) loop to print 'Fizz' for multiples of 3 and 'Buzz' for multiples of 5.");

// use variable number and assign it to one for keeping track of numbers from 1 to 100
number = 1;

// iterate through the index from 1 - 100
while (number < 101)
{
    // this gets the numbers divisble by 3 but not divisible by 3 and 5 together
    if ((number % 3 == 0) && !(number % 3 == 0 && number % 5 == 0))
    {
        // this prints the requested word with the respective numbers
        Console.Write($"{number}: Fizz, ");
    }

    // this gets the numbers divisble by 5 but not divisible by 3 and 5 together
    if ((number % 5 == 0) && !(number % 3 == 0 && number % 5 == 0))
    {
        // this prints the requested word with the respective numbers
        Console.Write($"{number}: Buzz, ");
    }
    number++;
}

// this ensures the next output is on a new line 
Console.WriteLine();

// this is to create a line space for readability
Console.WriteLine();

// print the question
Console.WriteLine($" Modify the previous (while) loop once more to now also print 'FizzBuzz' for numbers that are multiples of both 3 and 5.");

// use variable number and assign it to one for keeping track of numbers from 1 to 100
number = 1;

// iterate through the index from 1 - 100
while (number < 101)
{
    // this gets the numbers divisible by both 3 and 5
    if (number % 3 == 0 && number % 5 == 0)
    {
        // this prints the requested word with the respective numbers
        Console.Write($"{number}: FizzBuzz, ");
    }

    // this gets the numbers divisble by 3 but not divisible by 3 and 5 together
    if ((number % 3 == 0) && !(number % 3 == 0 && number % 5 == 0))
    {
        // this prints the requested word with the respective numbers
        Console.Write($"{number}: Fizz, ");
    }

    // this gets the numbers divisble by 5 but not divisible by 3 and 5 together
    if ((number % 5 == 0) && !(number % 3 == 0 && number % 5 == 0))
    {
        // this prints the requested word with the respective numbers
        Console.Write($"{number}: Buzz, ");
    }
    number++;
}

// this ensures the next output is on a new line 
Console.WriteLine();

// this is to create a line space for readability
Console.WriteLine();



