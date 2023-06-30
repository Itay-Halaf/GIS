let x = 34.775203;
let y = 31.915394;

// Get the map container element
const mapContainer = document.getElementById('map');

// Create a new map object
const map = new google.maps.Map(mapContainer, {
  center: { lat: latitude, lng: longitude },
  zoom: 5 // Adjust the initial zoom level as needed
});

// Make a request to the government API to retrieve the locations
fetch('https://www.govmap.gov.il/?bb=1&zb=1&in=1&c=${latitude},${longitude}&z=5')
  .then(response => response.json())
  .then(data => {
    // Assuming the data is an array of location objects
    data.forEach(item => {
      const { name, latitude, longitude } = item;

      // Create a marker for each location
      const marker = new google.maps.Marker({
        position: { lat: latitude, lng: longitude },
        map: map,
        title: name
      });
    });
  })
  .catch(error => {
    console.error('Error loading locations from the government API:', error);
  });
