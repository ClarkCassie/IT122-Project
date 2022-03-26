//get all the images of the dogs in an array
dogImages = [
    'gsDog.jpeg',
    'ldDog.jpeg',
    'pbDog.jpeg'
]

function randomDog()
{
    //get random index from dogImages
    randomIndex = Math.floor(Math.random() * dogImages.length);
    //get the image from the random index
    selectedDog = dogImages[randomIndex];
    //display the selected random dog image
    document.getElementById('dogPic').src = `./images/${selectedDog}`
    return selectedDog;
}

if (randomIndex === 'gsDog')
{
    document.getElementById('dogBreed') = "German Shepard";
}
else if (randomIndex === 'ldDog')
{
    document.getElementById('dogBreed') = "Labradoodle";
}
else
{
    document.getElementById('dogBreed') = "Pit Bull";
}