
let formCounter=0;
let inputCounter=0;
let r=0;
$(`#input-${inputCounter}`).focus();


function handleCommand(x){
    console.log("Command Handling",x);
    if (x=="command=show aboutme"){
        $(`#cR-${r}`).append(`<div>This is about Ayush</div>`);
        
    }
    return
    
}



$("#typeCommands").on("submit","form",function(event){
    
    event.preventDefault();
    var x=decodeURI($(this).serialize());
    console.log(x);
    console.log("submitted");
    $(this).find("input").prop("readonly",true);
    //Command Results
    handleCommand(x);
    formCounter++;
    inputCounter++;
    $("#typeCommands").append(`<div>
                        <span class="text-white">kumar@ayush: ~$&nbsp;&nbsp;<form id="form-${formCounter}" class="d-inline"><input id="input-${inputCounter}" type="text" style="border: none;background-color: #5BF0BE;color:#63706C;outline: none;" name="command"></form></span>
                    </div>`);
    $(`#input-${inputCounter}`).focus();
});

