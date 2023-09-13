
// FIZZ BUZZ
// 1. Skaičius nuo 1 iki 100.
// 2. Skaičiai, kurie dalinasi iš 3 turi būti pakeisti į žodį „Fizz";
// 3. Skaičiai, kurie dalinasi iš 5 turi būti pakeisti į žodį „Buzz";
// 4. Skaičiai, kurie dalinasi iš 3 ir 5 turi būti pakeisti į žodį „FizzBuzz";

// 1
// 2
// Fizz
// 4
// Buzz
// Fizz
// 7
// 8
// Fizz
// Buzz
// 11
// Fizz
// 13
// 14
// FizzBuzz
// 16
// 17
// Fizz
// 19
// Buzz

// 5. Skaičiai, kurie dalinasi iš 7, turi būti pakeisti į žodį „Biff".
// 5.1. Skaičiai, kurie dalinasi iš 7 ir 3 turi būti pakeisti į žodį „FizzBiff";
// 5.2. Skaičiai, kurie dalinasi iš 7 ir 5 turi būti pakeisti į žodį „BuzzBiff";
// 5.3. Skaičiai, kurie dalinasi iš 7, iš 5 ir iš 3 turi būti pakeisti į žodį „FizzBuzzBiff";

// 6. Skaičiai, kurie dalinasi iš 9, turi būti pakeisti į žodį „Fuzz".
// 7. Skaičiai, kurie dalinasi iš 11, turi būti pakeisti į žodį „Bizz".






// + 3 5 7 9
// + 3 5 9
// + 5 7 9
// + 3 5 7
// + 3 5 
// + 3 7
// + 5 7
// + 3 9
// + 5 9
// + 7 9
// + 3
// + 5
// + 7
// + 9


function task1() {

    for (let i = 1; i <=1000; i++ ){
        let output = ''

        if (i % 3 === 0) {
          output += 'Fizz'
        }
    
        if (i % 5 === 0) {
          output += 'Buzz'
        }
    
        if (i % 7 === 0) {
          output += 'Biff'
        }
    
        if (i % 9 === 0) {
          output += 'Fuzz'
        }
    
        if (i % 11 === 0) {
          output += 'Bizz'
        } 
    
        if (i % 13 === 0) {
          output += 'Labas'
        } 
    
        if (!output) {
          output = i
        }
    
        console.log(output)
      }
    }
 



task1()



  




