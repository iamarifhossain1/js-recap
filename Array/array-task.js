/**
 * 1. Declare an array
    Declare an array with 5 elements containing fruits
    console log the 3rd index element
    change the value of the 2nd index element to jambura
    console log the final array
 */


const fruits = ['apple', 'mango', 'watermelon', 'orange', 'pipneapple'];
console.log(fruits[3]);
fruits[2] = 'jambura';
console.log(fruits);


/**
 * 2. Add or remove elements
    Declare an array of 3 tourist destinations
    Add a new tourist destination to your tourist array
    Add two more to your array
    Remove the last tourist destination you have added
    display the final array as output
 */


    const tourPlace = ['Bandarban', 'Saint Martin', 'Sajek Valley'];
    tourPlace.push('Cox Bazar');
    tourPlace.push('Kuakata', 'Sylhet');
    tourPlace.pop();
    console.log(tourPlace);
    

    /**
     * 3. Checking Array Membership with ‘includes’
        Instructions:
        Create an array of books containing different book.
        Use the includes method to check if the array contains a javascript book.
        Print a message to the console indicating whether the element is present in the array or not.
     */

        const books = ['Rich Dad, Poor Dad', 'Javascript', 'C Programming', 'Python'];
        if (books.includes('javascript') || books.includes('Javascript')){
            console.log('Result Found');
        }

        else {
            console.log('Sorry! No result found');
        }


    /**
     * 4. Checking if it's an Array
        Instructions:
        Create different variables, each containing either an array or a non-array value.
        Now use isArray to check if each variable is an array.
        Print a message to the console indicating whether each variable is an array or not.
     */

        const names = ['Arif', 'Sporsho', 'Abrar', 'Nirjhor', 'Hasan', 'Shykat'];
        const numbers = [];
        const address = '123/1, Dhaka, Bangladesh';
        const result = 100;
        const isPassed = true;
        console.log(Array.isArray(names));
        console.log(Array.isArray(numbers));
        console.log(Array.isArray(address));
        console.log(Array.isArray(result));       
        console.log(Array.isArray(isPassed));       

    
    /**
     * 5. Combining Arrays
        Instructions:
        Create two arrays of your choice.
        Use the concat method to combine the two arrays into a new array.
        Print both the original arrays and the combined array using console.log().
     */

        const fam = ['Arif', 'Hanif', 'Mousumi'];
        const extraFam = ['Abdan', 'Hafsa', 'Muyaz', 'Ayra'];
        const concat = fam.concat(extraFam)
        console.log(fam);
        console.log(extraFam);
        console.log(concat);
        