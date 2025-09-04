
let formCounter=0;
let inputCounter=0;
let r=0;
$(`#input-${inputCounter}`).focus();


function handleCommand(x){
    console.log("Command Handling",x);
    if (x=="command=show aboutme"){
        $(`#cR-${r}`).append(`<div class="ps-5"><h3 class="text-white">Hi, I'm Kumar Ayush.</h3><p class="text-white mb-0">A Full Stack Developer and DevOps enthusiast.</p></div>`);
        
    }
    else if (x=="command=open contactme"){
        $(`#cR-${r}`).append(`<div class="ps-5"><p class="mb-0"><span class="text-white">Name:<span><span style="color:#63706C"> Kumar Ayush<span></p><p class="mb-0"><span class="text-white">Location:<span><span style="color:#63706C">Punjab, India<span></p><p class="mb-0"><span class="text-white">Call:<span><span style="color:#63706C">+91 9365566209<span></p><p class="mb-0"><span class="text-white">Email:<span><span style="color:#63706C">kumarayush2024@outlook.com<span></p></div>`);
        }
    else if(x=="command=show cv"){
        $(`#cR-${r}`).append(`<div class="ps-5"><p style="color:#63706C">CV: <a target="_blank" href="https://drive.google.com/file/d/1qUthGH_bEvMfgN93LWyDug4VDQ329tLk/view?usp=sharing" class="text-white">Google Drive <i class="fa fa-external-link" style="font-size:13px"></i></a></p></div>`);
    }
    else if (x=="command=show skills"){
        $(`#cR-${r}`).append(`<div class="ps-5">
<p class="mb-0"><span class="text-white">Frameworks:<span><span style="color:#63706C"> MERN and Flask<span></p>
<p class="mb-0"><span class="text-white">Programming Languages: <span><span style="color:#63706C">C++, Python and Javascript<span></p>
<p class="mb-0"><span class="text-white">Devops Tools: <span><span style="color:#63706C">Git, Github, Github Actions, Docker and Jenkins<span></p>
</div>`);
        }
        else if (x=="command=show certifications"){
        $(`#cR-${r}`).append(`<div class="ps-5">
<p class="mb-0"><span class="text-white">AWS Academy Cloud Foundations: <span><span style="color:#63706C"><a target="_blank" href="https://www.credly.com/badges/9c3b210f-4ba7-465a-8cde-fc15907fa1d5/public_url">Link</a><span></p>
<p class="mb-0"><span class="text-white">Docker Foundations Professional Certificate: <span><span style="color:#63706C"><a target="_blank" href="https://www.linkedin.com/learning/certificates/52aa745d6704e3f0fd75e60a401a085f9ca825a44d2835eee24ca8318447fbc7?trk=share_certificate">Link</a><span></p>
<p class="mb-0"><span class="text-white">GitHub Actions: <span><span style="color:#63706C"><a target="_blank" href="https://www.linkedin.com/learning/certificates/e46a5f3f338b63300ec25fcd65261caf4653c139c79478d6996dd7fcab824639?trk=share_certificate">Link</a><span></p>
</div>`);
        }
    else{
        $(`#cR-${r}`).append(`<div class="ps-5 mb-0 pb-0"><p class="text-danger">Unknown Command!!<p></div>`);
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

