function generateCalendar(){
    //empty container div
    let container = $("#container");
    container.empty();
    //generate rows
    for (let i=0;i<9;i++){
    let newRow = $("<div>").attr("class", "row").attr("id", (i+9)).attr("style", "height: 200px");
    //start of row
        let TimeCard = $("<div>").attr("class", "card w-25 h-100");
            let cardBody1= $("<div>").attr("class", "card-body");
                let cardContent1= $("<h5>").attr("card-title");
                cardBody1.append(cardContent1);
                TimeCard.append(cardBody1);
        let UserInputCard = $("<div>").attr("class", "card w-50 h-100")
            let cardBody2= $("<div>").attr("class", "card-body").attr("id", (i+9));
                let cardContent2= $("<input>").attr("class", "form-control form-control-sm").attr("type", "text").attr("placeholder", "enter your plans here!");
                    cardBody2.append(cardContent2);
                    UserInputCard.append(cardBody2);
        let Submit = $("<div>").attr("class", "card w-25 h-100");
            let cardBody3= $("<div>").attr("class", "card-body");
                let cardContent3= $("<button>").attr("class","btn btn-primary").attr("type", "button");
                cardContent3.text("Submit");   
            cardBody3.append(cardContent3);
            Submit.append(cardBody3);
    //row conditional for setting am or pm
    if (i>3){
        cardBody1.text(i-3 + "pm");
    }else{
        cardBody1.text(i+9 + "am");
    }//special condition set for 12pm
    if ((i+9)===12){
        cardBody1.text(i+9 + "pm");
    }
    //setting backgrounds bsaed on current time
    let a = new Date();
    let currentMilHours = a.getHours();
    if(currentMilHours === i+9){
        UserInputCard.attr("class", "card text-white bg-danger w-50 h-150")
    }
    if(currentMilHours > i+9){
        UserInputCard.attr("class", "card text-white bg-secondary w-50 h-150")
    }
    if(currentMilHours < i+9){
        UserInputCard.attr("class", "card text-white bg-success w-50 h-150")
    }

        newRow.append(TimeCard, UserInputCard,Submit);    
    container.append(newRow);//end of row
    }
}
generateCalendar();


function callPreviousEvents (){
    let eventCalled= $(this.cardBody2).attr("id"); 
    let eventCalling= localStorage.getItem(eventCalled);
    if(eventCalling !== undefined){
        let eventToBeAdded = JSON.parse(eventCalling);
        let Event = $("<p>").text(eventToBeAdded);
        $(this.cardBody2).append(Event);
    }
}
// $("button").on("click", function(event) {
//     event.preventDefault();
//     let UserInput = $(this.cardContent2).text();
//     console.log(UserInput);    


//==========================================================================

//      can't make this return the value of the text entered when the submit button is pressed
//      I commented the rest of the functions in and laid them out for when I can get help with it

//==========================================================================


        // let UserInput = "#"//given input from above
        // let EventPlacement = $(this.cardBody2).attr("id");
        // JSON.stringify(UserInput);
        // let newText = $("<p>").text(UserInput);
        // EventPlacement.append(UserInput);
        // localStorage.setItem(EventPlacement, UserInput);
        

// });