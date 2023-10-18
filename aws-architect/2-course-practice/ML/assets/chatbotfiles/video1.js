//Initialize the Amazon Cognito credentials provider
AWS.config.region = 'ap-southeast-2'; // Region
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
// Provide your Pool Id here
    IdentityPoolId: 'YOUR_IDENTITY_POOL_ID',
});
    
//Used to convert image to bytes
function getBinary(base64Image) {
    var binaryImg = atob(base64Image);
    var length = binaryImg.length;
    var ab = new ArrayBuffer(length);
    var ua = new Uint8Array(ab);
    for (var i = 0; i < length; i++) {
        ua[i] = binaryImg.charCodeAt(i);
    }

    return ab;
}

//Initialises Rekognition.
var rekognition = new AWS.Rekognition();

//When the capture button is clicked, captures the image as bytes and sends to Rekognition to analyse the images.
captureButton.addEventListener('click', () => {
    // Draw the video frame to the canvas.
    spinnerIcon.style.display ="inline-block";
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    var img  = canvas.toDataURL("image/png");
    var base64Image = img.replace(/^data\:image\/(png|jpeg|jpg);base64,/, '');
    var imageBytes = getBinary(base64Image);

    IdentifyObject(imageBytes)
});

//Calls the Rekognition API to recognise objects
function IdentifyObject(bytes){
        var params = {
            Image: { /* required */
                Bytes: bytes /* Strings will be Base-64 encoded on your behalf */,
            },
                MaxLabels: 5,
                MinConfidence: 70
        };

        //DetectLabels API called to recognise the image bytes.
        rekognition.detectLabels(params, function(err, data) {
                if (err) console.log(err, err.stack); // an error occurred
                else
                    
                console.log(data); 

                pageList = document.getElementById("ResultsList")
                document.getElementById("ElementsFoundHeading").style.visibility = "visible";

                //Removes list on the left hand side.
                removeAllChildNodes(pageList)

                var executeSearch = 0;

                //Adds a list of items detected.
                for( var i = 0; i < data.Labels.length; i++){
                    var element = document.createElement("LI");
                    element.innerHTML = data.Labels[i].Name + " - " + (data.Labels[i].Confidence).toFixed(2) + "%";
                    pageList.appendChild(element)

                }
                spinnerIcon.style.display = "none";
                    
        });
} 

//Clear list of images detected everytime there is a captured image
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
