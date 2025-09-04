
let formCounter=0;
let inputCounter=0;
let r=0;
$(`#input-${inputCounter}`).focus();


function handleCommand(x){
    console.log("Command Handling",x);
    if (x=="command=show aboutme"){
        $(`#cR-${r}`).append(`<div>This is about Ayush</div>`);
        
    }
    else if (x=="command=open contactme"){
        $(`#cR-${r}`).append(`<div class="ps-5"><p class="mb-0"><span class="text-white">Name:<span><span style="color:#63706C"> Kumar Ayush<span></p><p class="mb-0"><span class="text-white">Location:<span><span style="color:#63706C">Punjab, India<span></p><p class="mb-0"><span class="text-white">Call:<span><span style="color:#63706C">+91 9365566209<span></p><p class="mb-0"><span class="text-white">Email:<span><span style="color:#63706C">kumarayush2024@outlook.com<span></p></div>`);
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
    r++;
    formCounter++;
    inputCounter++;
    $("#typeCommands").append(`<div id="cR-${r}">
                        <span class="text-white">kumar@ayush: ~$&nbsp;&nbsp;<form id="form-${formCounter}" class="d-inline"><input id="input-${inputCounter}" type="text" style="border: none;background-color: #5BF0BE;color:#63706C;outline: none;" name="command"></form></span>
                    </div>`);
    $(`#input-${inputCounter}`).focus();
});

