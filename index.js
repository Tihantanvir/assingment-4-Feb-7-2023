// frist problem 

// mindGame
/*mind_game
3 diya gun je 
results ta hobe
 tar sate 10 + korba
 totol jei result hobe tar tehke 5 biyug korba
 over all je sonka hobe take retrun korba

*/







// secend problem

// evenOdd
/*
string input hisabe niba oi 
string er modde koita ceretar ace
jodi zur hoi taile "even" ta retrun korba
ar jodi bizur sonka hoi taile odd diba
phero
input jack dile koita cracter aceh
"jack ma" total 7ta  etar jonne retrun dibbe odd
*/








// 3rd problem 

// isLGSeven

/*
jeikuno sonka niba 
input hisabe ektah sonka ashbe
7 biyug korba byugpol ta
 jodi sater ceye kom hoi
oi jinis ta retrun korba
ar jodi 7 er caithe besi hoi taile
jei sonka ashbe 
jei input sonka ta nicho  seta ke kore retrun korba

*/





// 4th problem


// findingBadData


/*age er number araar ke input hisebe niba
[1, -45, 13, ] --> ai kane kono bad data nai 0 zero
[12, -2, 0, o-25, -11]--> 3 bad sonka tin ta 
[-14, -4, -5, 12, 16, 19, -2, -1 ] aikane bad data pach ta 

*/





// 5 th problem

// gemsToDiamond

/*
3 ta input paremeter

frist paremeter --> 
1st Friend er 
koi ta gems ace seta 
 21 diya gun korba

seceond paremeter --> 2nd friend gems

32 diya gun korba

third paremeter --> 3rd friend er gem

43 diya gun korba

sob gula gun fol ke jok kore total ektah jinish banaba
sei total ta jodi ek hajar er diguun besi hoi taile 
total juk fol jete hoice oi tar caite 2hajar biug kore 
oi biyug pol ta ke  return korba



ar  jodi
sob gula gun fol ke jok kore total ektah jinish banaba
sei total ta jodi ek hajar er kom hoi 
joto ace take retrun kore diba



ar jodi soman  otoba besi hoi oikane teke 2 hagar biyug kore diba
*/ 
// // var use kora jabe na let 
// ar const use korte hobe
// descriptions  
// ai functions er kaj ki english e like ditte hobe
//  descriptions hisabe








//-------------------------------sloved----------------------------------------------






// problem one solve



// function mindGame(number){
//     const calculate1 = number * 3;
//     const calculate2 = calculate1 + 10;
//     const calculate3 = calculate2 / 2;
//     const calculate4 = calculate3 - 5;
//     return calculate4;
// }

// const result = mindGame(5)
// console.log(result)








//------------------>>>>>>>>>>solve
//problem two solve

// function evenOdd(string){
//     const lnth = string.length;
// if(lnth % 2 !== 0){
//     return 'odd'
// } else{
//     return 'even'
// }
// }

// const input = evenOdd('Phero');
// console.log(input);


//------------------>>>>>>>>>>solve



// problem three solve

// function isLGSeven(number){
//     const calculate = number - 7;
//     if(calculate < 7){
//         return calculate;
//     } else if(calculate => 7){
//         return number * 2;
//     }
// }

// const inputNum = isLGSeven(-15)
// console.log(inputNum);




//------------------>>>>>>>>>>solve





// /problem four  solved




// function findingBadData(numbers){
//     let count = 0;
//     for(element of numbers){
//         if(element < 0){
//             count++
//         }
//     }
//     return count;
// }

// const input = findingBadData([ -4, -9, -5, -33, -55 ])
// console.log(input);




//------------------>>>>>>>>>>solve





// problem five  solved


// function gemsToDiamond(gemsQuantity1, gemsQuantity2, gemsQuantity3){
//     const power1 = 21;
//     const power2 = 32;
//     const power3 = 43;
//     const friendGems1 = power1 * gemsQuantity1;
//     const friendGems2 = power2 * gemsQuantity2;
//     const friendGems3 = power3 * gemsQuantity3;
//     const total = friendGems1 + friendGems2 + friendGems3;

//     if(total >= 100 * 2){
//         return total - 2000;
//     }
    
//     return total;
// }

// const input = gemsToDiamond(20, 2, 40)
// console.log(input)








//------------------>>>>>>>>>>solve
























//Problem-1: Let's play a mind game.

// This is function which name is mindGame and it takes number input as parameter. now multipication 3 with the input number, then add 10, then divition by 2, then minus 2, return this calculations.


function mindGame(num){
    return (((num * 3) + 10) / 2) - 5
}

// console.log(mindGame(5));


// -------------------------solved one done--------------------------- //

//Problem-2: Finding Even or Odd.
// This is function which name is evenOdd and it takes string input as parameter. Now check length of the string, if the string's length is odd number so return 'odd', and if the number is even number so return 'even'.



function evenOdd(str){
    if(parseInt(str.length) % 2 === 0 ){
        return 'Even'
    }else{
        return 'Odd'
    }
}

// console.log(evenOdd('chatgpt'));

// -------------------------solved two done--------------------------- //

// Problem - 3 Is  less or Greater than seven.
// This is function which name is isLGSeven and it takes number input as parameter. Now check the difference between input value and 7, if the difference is smaller than 7 so return difference between input value and 7,  and if the difference is larger than 7 so return double of the input.
 

function isLGSeven(num){
    if(num < 7){
        return num - 7
    }else{
        return num * 2
    }
}

// console.log(isLGSeven(15));


// -------------------------solved three done--------------------------- //

// Problem - 4 Finding bad data
// This is function which name is findingBadData and it takes array input as parameter. Now check element of the array, if the array element is less than 0, so count how much array element is less than 0.

 

function findingBadData(arr){
    let badData = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            badData += 1
        }
    }
    return badData
}

// console.log(findingBadData([2, -5, -7, -13]));


// -------------------------solved four done--------------------------- //


// Problem-5: Convert your gems into diamond
// This is function which name is gemsToDiamond and it takes some number input as parameter. Now Calculate three friend's total diamond and calculate total quantity, aslo check if the diamond is grater than two thousand, so return total diamond to minus two thousand. otherwise return total diamond.



function gemsToDiamond(gems1, gems2, gems3){
    let friend1 = gems1 * 21;
    let friend2 = gems2 * 32;
    let friend3 = gems3 * 43;
    let total = friend1 + friend2 + friend3;

    if(1000 * 2 < total){
        total -= 2000;
    }

    return total;
}

// console.log(gemsToDiamond( 100, 5, 1));