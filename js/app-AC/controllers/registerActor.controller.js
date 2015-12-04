let registerActorController = function() {
  
  let vm = this;
  vm.title = 'Register as an actor';

  vm.unions= ['Equity', 'AFTRA', 'SAG', 'IATSE', 'SSDC', 'DGA', 'AGMA'];

  vm.selection= [];

  vm.toggleSelection = function(union) {
    var idx = vm.selection.indexOf(union);
    if (idx > -1) {
      vm.selection.splice(idx, 1);
    } else {
      vm.selection.push(union);
    }
  };

  vm.actor = {
    name: null,
    address: null,
    phone: null,
    email: null,
    Website: null,
    bio: null,
    age: null,
    height_feet: null,
    height_inches: null,
    hair_color: null,
    eye_color: null,
    gender: null,
    ethnicity: null,
    talent_agency: null,
    union: [],
    skills: [],
    headshot: null,
    resume: null
  };

  vm.sendData = function(actor) {
    console.log(actor);
  };
};

registerActorController.$inject = [];

export default registerActorController;