var fuzzyTime = function(timeString) {
	var time = getTimeObject(timeString);

	function getTimeObject(timeString) {
		var split = timeString.split(':');
		return {
			hour: split[0],
			minute: split[0],
			second: split[0]
		};
	}

	function numberToString(number) {
		var numbers = {
			1: 'one',
			2: 'two'
		};
		return numbers[number];
	}

	return numberToString(time.hour) + " o'clock";
};

module.exports = fuzzyTime;
