const billAmount = document.querySelector("#billAmount")
const cashGiven = document.querySelector("#cashGiven")
const btncheck = document.querySelector("#btncheck")
const noOfNotes = document.querySelectorAll(".noofnotes")
const notes =[2000, 500, 100,20, 10,5,1]
const errorMsg= document.querySelector("#errorMsg")
const btnNext = document.querySelector("#btnNext")
const afterNext =document.querySelector("#afterNext")
const billAmtErrorMsg = document.querySelector("#billAmountErrorMsg")
afterNext.style.display="none"
billAmtErrorMsg.style.display="none"


btnNext.addEventListener("click",
function nextBtnClicked()
{ 
    billAmtErrorMsg.style.display="none";
    let billAmountValue = Number(billAmount.value);
    if (billAmountValue > 0)
    {
        afterNext.style.display="block"
        btnNext.style.display="none"
    }
    else
    {
        billAmtErrorMsg.style.display="block"
        
    }
})

btncheck.addEventListener("click", function CheckButtonClicked()
{
    console.log("clicked")
    billAmtErrorMsg.style.display="none"
    errorMsg.style.display="none";
    let billAmountValue = Number(billAmount.value);
    let cashGivenValue = Number(cashGiven.value);
 
    if(billAmountValue > 0)
    {
        console.log("Entered If1")
        if(cashGivenValue >= billAmountValue)
        {
            console.log("Entered If2")
            let change = cashGivenValue - billAmountValue;
            console.log(change);
            Validate(change)
        }
        else{
            DisplayErrorMessage("Cash Given should be greater than or equal to bill Amount")
        }
    }
    else
    {
        DisplayErrorMessage("Enter Valid Bill Amount")
    }
})

function Validate(change)
{
    console.log("Validate")
    for(let i=0;i<notes.length;i++)
    {
        let numberOfNotes =Math.trunc(change/ notes[i])
        change = change % notes[i];
        noOfNotes[i].innerHTML = numberOfNotes;
        
    }
    
}
function DisplayErrorMessage(msg)
{
    console.log(msg);
    errorMsg.style.display="block";
    errorMsg.innerHTML = msg;
}