var mergeOverlappingIntervals = function() {
	var intervals = Array.prototype.slice.call(arguments);
	var numberOfArrays = arguments.length;

	if (numberOfArrays === 1) {
		return arguments[0];
	}
	var compare = function(a, b) {
		if (a[0] < b[0]) {
			return -1;
		} else {
			return 1;
		}
	};

	intervals.sort(compare);
};

module.exports = mergeOverlappingIntervals;
