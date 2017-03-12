function validate(param) {
	// body...
	var monthNames = ["January", "February", "March", "April", "May", "June",
  		"July", "August", "September", "October", "November", "December"
	];
	var unix = null, natural, date = null;
	var frmt_natural = null;

	if(!isNaN(param)) {
		unix = param;
		param = +param;
	}

	date = new Date(param);

	if(date.toString().indexOf("Invalid") == -1) {
		unix = date.getTime();
		natural = date;
		frmt_natural = monthNames[natural.getMonth()] + " " + natural.getDate() +", " + natural.getFullYear();
	}
	
	

	var json = {
		"unix" : unix,
		"natural": frmt_natural
	}

	return JSON.stringify(json);
}

module.exports = validate;