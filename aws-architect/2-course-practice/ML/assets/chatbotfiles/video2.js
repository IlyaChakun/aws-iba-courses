//If labels are not face, person or human and it's the first time search is occurring, search for the detected object in Google.
    if((data.Labels[i].Name !== "Face") && (data.Labels[i].Name !== "Person") && (data.Labels[i].Name !== "Human") && executeSearch == 0){
        URL = "https://www.google.com/search?q=" + data.Labels[i].Name
        window.open(URL, '_blank');
        executeSearch = 1;
    }  

