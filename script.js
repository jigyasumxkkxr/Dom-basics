function populateDiv(){
    let first_number= document.getElementById("int_first").value
    let second_number=document.getElementById("int_second").value
    let sum=document.getElementById("text")
    fetch(`https://sum-server.100xdevs.com/sum?a=${first_number}&b=${second_number}`).then((response)=>{
        response.text().then((ans1)=>{
            sum.innerHTML=ans1
        })
    })
}
function populateDivInterest(){
    let principle=document.getElementById("principle").value
    let rate=document.getElementById("rate").value
    let time=document.getElementById("time").value
    let interest=document.getElementById("interest")
    fetch(`https://sum-server.100xdevs.com/interest?principal=${principle}&rate=${rate}&time=${time}`).then((response)=>{
        response.json().then((ans)=>{
           interest.innerHTML=`you have to pay a total of ${ans.total} bucks with total interest of ${ans.interest}`
        })
    })
}