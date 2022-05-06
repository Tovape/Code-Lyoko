function start() {
	const contact = document.getElementById("contact");
	let inputnumber = document.getElementById("input-number").value;
	let boxnumber = document.getElementById("number");	

	if (inputnumber.length > 11) {
		inputnumber = inputnumber.slice(0,11); 
	}
	
	/* Number Formatting */
	
	inputtext = inputnumber.toString();
	
	inputtextfirst = inputtext.slice(2, 999999)
	inputtextfirst = inputtextfirst.match(/.{1,3}/g);
	inputtextfirst = inputtextfirst.join("-");	
	
	/* Marker Selector */
	
	let marker = [];
	let numbercall = document.getElementById("number-call");
	let status = document.getElementById("footer-banner");

	for (let i = 0; i < inputnumber.length; i++) {
		marker[i] = document.getElementById("number"+"-"+inputnumber[i]);

		setTimeout(function timer() {
			marker[i].className += " dial-number-each-active";
			
			setTimeout(() => {  
				marker[i].className = "dial-number-each";
			}, 160);
			
						
			if (i == inputnumber.length-1) {
				setTimeout(() => {  
					numbercall.className += " dial-number-each-active";
				}, 200);
				
				setTimeout(() => {  
					numbercall.className = "dial-number-each";
				}, 300);
				
				status.className += " status-color";
				
			}
			
		}, i * 300);

	}

	/* Set Number */
	
	boxnumber.innerHTML = "(" + inputtext.slice(0, 2) + ") " + inputtextfirst;
	
	/* Open Animation */
	
	if (contact.className === 'contact') {
		contact.className += " open-contact";
	}
}

function stop() {
	const contact = document.getElementById("contact");
	let numberhang = document.getElementById("number-hang");
	let status = document.getElementById("footer-banner");
	
	/* Add Classes */
	
	numberhang.className += " dial-number-each-active";

	setTimeout(() => {  
		numberhang.className = "dial-number-each";
	}, 100);

	status.className = "footer-banner";
	
	/* Reset Number Field */
	
	let boxnumber = document.getElementById("number");	
	boxnumber.innerHTML = "";
	
	/* Close Animation */

	if (contact.className === 'contact open-contact') {
		contact.className += " close-contact";
		
		setTimeout(() => {  
			contact.className = "contact";
		}, 200);
	}
}

