document.addEventListener("DOMContentLoaded", function() {
	var cardRow = document.querySelector('.text_content');
	if(sessionStorage.length > 0) {
		for (var i = 0 ; i < sessionStorage.length; i++) {
			var key = sessionStorage.key(i)
			const cardInfo = JSON.parse(decodeURIComponent(sessionStorage[key]));
			var html = `
			<div class="plan">
		        <img src="images/${cardInfo.image}" class="order-image" alt="music icon" />
		        <div>
		          <h6>${cardInfo.title}</h6>
		        </div>
	        	<button class="delete-cart-item" key-id="${key}">Delete</button>
	     	 </div>
     	 	`

     	 	cardRow.insertAdjacentHTML('beforeend', html);
		}
	}

	// Add event listener programmatically
    var deleteButtons = document.querySelectorAll('.delete-cart-item');
    deleteButtons.forEach(function(button) {
        button.addEventListener('click', deleteCartItem);
    });

    function deleteCartItem() {
        sessionStorage.removeItem(this.getAttribute('key-id'))
        windiw.location.reload()
    }
});

function deleteSession() {
	sessionStorage.clear()
	window.location.reload()
}