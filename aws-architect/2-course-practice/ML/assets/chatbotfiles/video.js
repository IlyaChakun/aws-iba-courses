
//Controls the video element
 var video = document.querySelector("#videoElement");
 const canvas = document.getElementById('canvas');
 const context = canvas.getContext('2d');
 const switchButton = document.getElementById("switchButton")
 const chatbotButton = document.getElementById("chatbotButton")
 const spinnerIcon = document.getElementById("spinner")

 //Flips the camera window
 video.setAttribute("style", 'transform\:scaleX(-1);')
 context.translate(320, 0);
 context.scale(-1, 1);

 //Creates the capture button
 const captureButton = document.getElementById('capture');

 // Hide the canvas
 canvas.style.display="none";

 //Used to detect the amount of cameras on the device accessing the page and add the switch button.
 function gotDevices(mediaDevices) {
     let count = 0;
     mediaDevices.forEach(mediaDevice => {
     if (mediaDevice.kind === 'videoinput') {
         count++;
     }
     });
 
     if(count>1){
         switchButton.style.display= "inline-block";
     }
 }

 //Displays the switch camera button if there is more than 1 device.
 navigator.mediaDevices.enumerateDevices().then(gotDevices);

 //Defines default as the camera facing the user.
 var videoConstraints = {
     facingMode: 'user'
 };

 var constraints = {
     video: videoConstraints,
     audio: false
 };

 //Get Initial Camera Feed
 getCameraFeed(constraints)

 //Event when the switch button is clicked.
 switchButton.addEventListener('click', event => {

     if (videoConstraints.facingMode == 'user'){
         video.setAttribute("style", 'transform\:scaleX(1);')
         videoConstraints.facingMode = 'environment';
     }else{
         video.setAttribute("style", 'transform\:scaleX(-1);')
         videoConstraints.facingMode = 'user';
         
     }

     constraints = {
         video: videoConstraints,
         audio: false
     };

     getCameraFeed(constraints)

 });

 //Getting the camera stream.
 function getCameraFeed(constraints){
     //Gets the camera video
     if (navigator.mediaDevices.getUserMedia) {
         navigator.mediaDevices.getUserMedia(constraints)
             .then(function (stream) {
             video.srcObject = stream;
             })
             .catch(function (err0r) {
             console.log("Something went wrong!");
             });
     }
 }




