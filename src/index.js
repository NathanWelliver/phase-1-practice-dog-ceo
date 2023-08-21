console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", function () {
    // Fetch and display dog images
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    const dogImageContainer = document.querySelector("#dog-image-container");
  
    fetch(imgUrl)
      .then(response => response.json())
      .then(data => {
        const dogImages = data.message;
  
        dogImages.forEach(imageUrl => {
          const img = document.createElement("img");
          img.src = imageUrl;
          dogImageContainer.appendChild(img);
        });
      })
      .catch(error => console.error("Error fetching dog images:", error));
  
    // Fetch and display dog breeds
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
    const breedList = document.querySelector("#dog-breeds");
    const breedDropdown = document.querySelector("#breed-dropdown");
  
    fetch(breedUrl)
      .then(response => response.json())
      .then(data => {
        const dogBreeds = Object.keys(data.message);
  
        dogBreeds.forEach(breed => {
          const li = document.createElement("li");
          li.textContent = breed;
          breedList.appendChild(li);
  
          // Add event listener to change font color on click
          li.addEventListener("click", function () {
            li.style.color = "blue"; // Change to your preferred color
          });
        });
      })
      .catch(error => console.error("Error fetching dog breeds:", error));
  
    // Add event listener to the breed dropdown
    breedDropdown.addEventListener("change", function () {
      const selectedLetter = breedDropdown.value;
      const breedItems = breedList.querySelectorAll("li");
  
      // Hide all breed items
      breedItems.forEach(item => {
        item.style.display = "none";
      });
  
      // Show breed items that match the selected letter
      breedItems.forEach(item => {
        if (selectedLetter === "all" || item.textContent.startsWith(selectedLetter)) {
          item.style.display = "block";
        }
      });
    });
  });
  