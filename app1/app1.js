// app1.js

var Developer = function(f, l) {
	var self = this;

	self.firstName = ko.observable(f);
	self.lastName = ko.observable(l);
	self.fullName = ko.pureComputed(function() {
		return self.firstName() + ' ' + self.lastName();
	});
}

var Bug = function(d) {
	var self = this;

	self.description = ko.observable(d);
	self.status = ko.observable();
	self.assignedTo = ko.observable();
	self.dateClosed = ko.observable();
}

var viewModel = function() {
	var self = this;

	self.developer = new Developer('Jon', 'Henderson');
	// this.developer.firstName = ko.observable('Jon');
	// this.developer.lastName = ko.observable('Anderson');
	// this.developer.

	self.developers = ko.observableArray([]);
	self.bugs = ko.observableArray([]);
}

ko.applyBindings(new viewModel());