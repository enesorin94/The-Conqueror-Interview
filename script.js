
const cards = [
	{
	    "id": 1,
	    "title": "Mount Kilimanjaro",
	    "subheader": "60 mi / 97 km",
	    "footer": "5 Virtual Postcards",
	    "image": "74f4e7fdb268a8f1f9b824fa2b38f8fd.png"
	},
	{
	    "id": 2,
	    "title": "Angkor Wat",
	    "subheader": "20 mi / 32 km",
	    "footer": "4 Virtual Postcards",
	    "image": "b75a7024678542ed3ec1264d567fa9c6.png"
	},
	{
	    "id": 3,
	    "title": "Inca Trail",
	    "subheader": "26 mi / 42 km",
	    "footer": "4 Virtual Postcards",
	    "image": "b4835de20f0fa168378e3b9a839aad4f.png"
	},
	{
	    "id": 4,
	    "title": "Berlin Wall",
	    "subheader": "30 mi / 48 km",
	    "footer": "4 Virtual Postcards",
	    "image": "debee28a68c0e847fdb1ec9ccf3cdd81.png"
	},
	{
	    "id": 5,
	    "title": "Flower Route",
	    "subheader": "41 mi / 66 km",
	    "footer": "5 Virtual Postcards",
	    "image": "31546b6e1958d88393fc86e5ef5cb3b8.png"
	}
]

document.addEventListener("DOMContentLoaded", function() {
    var buttons = document.getElementsByClassName("card-button");

    var cardRow = document.querySelector('.card-row');
    for (var i = 0 ; i < cards.length; i++) {
	  	// Create HTML structure using template literals
	  	var cardHtml = `
		    <div class="column">
		      <div class="card">
		        <img class="card-image" src="images/${cards[i].image}" alt="Avatar" style="width:100%">
		        <div class="container">
		          <p class="card-header">${cards[i].title}</p>
		          <p class="card-subheader">${cards[i].subheader}</p>
		          <p class="card-footer">${cards[i].footer}</p>
		          <p>No streetview</p>
		          <button class="card-button" card-object="${encodeURIComponent(JSON.stringify(cards[i]))}">Add challenge</button>
		        </div>
		      </div>
		    </div>
	 	`;

	  	// Append card HTML to the container
	  	cardRow.insertAdjacentHTML('beforeend', cardHtml);
	}

    for (var i = 0 ; i < buttons.length; i++) {
   		buttons[i].addEventListener('click' , addToOrder , false ) ; 
	}	


	function addToOrder () {
		var cardInfo = JSON.parse(decodeURIComponent(this.getAttribute('card-object')));
    	sessionStorage.setItem(cardInfo.id, encodeURIComponent(JSON.stringify(cardInfo)))
    	window.location.reload()
	}
    
});