const max=prompt("Enter a maximum number");//String
const random=Math.floor(Math.random()*max)+1// 1 to max (Number format)
let guess=prompt("Guess a number");//String
while(guess!=random)
{
    
    if(guess=="quit") //5=="5"=>true(only value); but 5==="5" false(value+type)
    {
        console.log("You Quit");
        break;
    }
    else if(guess<random){
        guess=prompt("Hint:Your guess was too small.. Please try again");
    }
    else{
        guess=prompt("Hint:Your guess was too large.. Please try again");
    }
}
if(guess==random){
    console.log("Congratulations,Right Guess!!! random number was",random);
}
