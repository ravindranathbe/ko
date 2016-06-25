// app2.js

var viewModel = function(users) {
	var self = this;
	self.id = 0;
	self.name = 'Mark Kenelly';
	self.getName = function() {
		return 'Hello ' + self.name;
	};
	self.isNew = function() {
		return self.id == 0;
	}
	self.users = users;
	/*
	self.users = [
		{
			uId: 1,
			name: 'Mark',
			job: 'Senior developer',
			image: 'http://ecx.images-amazon.com/images/I/51AkFkNeUxL._AA160_.jpg'
		},
		{
			uId: 2,
			name: 'Mike',
			job: 'Senior developer',
			image: 'http://ecx.images-amazon.com/images/I/51AkFkNeUxL._AA160_.jpg'
		},
		{
			uId: 3,
			name: 'Aria',
			job: 'Junior developer',
			image: 'http://ecx.images-amazon.com/images/I/51AkFkNeUxL._AA160_.jpg'
		}
	];
	*/
	self.loadImage = function(element, index, data) {
		$('#image_'+index.uId).attr('src', index.image);
	};

	self.firstName = ko.observable('Mitchel');
	self.lastName = ko.observable('Hendry');
	self.fullName = ko.pureComputed(function() {
		return self.firstName() + ' ' + self.lastName();
	});

	self.doShow = ko.observable(false);
	self.handleShow = function() {
		self.doShow(!self.doShow());
	};

	self.myText = ko.observable('');
	self.txtLimit = ko.observable(40);
	self.calcText = ko.computed(function() {
		// self.txtLimit(self.txtLimit() - self.myText().length);
		var lmt = self.txtLimit() - self.myText().length;
		lmt = (lmt < 0) ? 0 : lmt;
		return lmt;
	});

	self.loadImage2 = function(data, event) {
		$('#bookImg').attr('src', data.image);
	};

	self.selectedCountry = ko.observable();
	self.selectedState = ko.observable();
	self.states = ko.observableArray([]);
	self.countries = ko.observableArray([
		{
			id: 1,
			name: 'Ctry 1',
			states: [
				{
					id: 1,
					name: 'Ctry 1 - State 1'
				},
				{
					id: 2,
					name: 'Ctry 1 - State 2'
				},
				{
					id: 3,
					name: 'Ctry 1 - State 3'
				}
			]
		},
		{
			id: 2,
			name: 'Ctry 2',
			states: [
				{
					id: 1,
					name: 'Ctry 2 - State 1'
				},
				{
					id: 2,
					name: 'Ctry 2 - State 2'
				},
				{
					id: 3,
					name: 'Ctry 2 - State 3'
				}
			]
		},
		{
			id: 3,
			name: 'Ctry 3',
			states: [
				{
					id: 1,
					name: 'Ctry 3 - State 1'
				},
				{
					id: 2,
					name: 'Ctry 3 - State 2'
				},
				{
					id: 3,
					name: 'Ctry 3 - State 3'
				},
				{
					id: 4,
					name: 'Ctry 3 - State 4'
				},
				{
					id: 5,
					name: 'Ctry 3 - State 5'
				}
			]
		}
	]);
	self.selectedCountry.subscribe(function() {
		self.states([]);
		for (var i = 0; i < self.countries().length; i++) {
			if (self.countries()[i].id == self.selectedCountry()) {
				self.states(self.countries()[i].states);
				break;
			}
		}
	});
	self.selectedCountryName = function() {
		if(self.selectedCountry() != undefined) {
			return self.countries()[self.selectedCountry()].name;
		} else {
			return '';
		}
	}
	self.selectedStateName = function() {
		if(self.selectedState() != undefined) {
			return self.countries()[self.selectedCountry()].states[self.selectedState()].name;
		} else {
			return '';
		}
	}

	self.validate = function(form) {
		return $(form).validate();
	}
	self.email = ko.observable();

}

var users = [
	{
		uId: 1,
		name: 'Mark',
		job: 'Senior developer',
		image: 'http://ecx.images-amazon.com/images/I/41JC54HEroL._AA160_.jpg'
	},
	{
		uId: 2,
		name: 'Mike',
		job: 'Senior developer',
		image: 'http://ecx.images-amazon.com/images/I/51LpqnDq8-L._AA160_.jpg'
	},
	{
		uId: 3,
		name: 'Aria',
		job: 'Junior developer',
		image: 'http://ecx.images-amazon.com/images/I/51AkFkNeUxL._AA160_.jpg'
	}
];

ko.applyBindings(new viewModel(users), document.getElementById('part0'));

var vM1 = function(name) {
	var self = this;
	self.name = name;
}

ko.applyBindings(new vM1('Part1'), document.getElementById('part1'));
ko.applyBindings(new vM1('Part2'), document.getElementById('part2'));