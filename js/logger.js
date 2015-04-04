function Logger() {
	function getDebugState() {
		var state = false;

		if (typeof(debugIdicator) !== 'undefined') {
			state = debugIdicator;
		}

		return state;
	}

	function log(text) {
		if (getDebugState()) {
			console.log(text);
		}
	}

	function error(text) {
		if (getDebugState()) {
			console.error(text);
		}
	}

	this.log = log;
	this.error = error;

	return this;
}

var logger = new Logger();