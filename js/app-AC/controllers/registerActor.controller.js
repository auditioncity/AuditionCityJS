let registerActorController = function($scope) {
  
  let vm = this;
  vm.title = 'Register as an actor';

  $scope.actor = {
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

  $scope.unions= ['Equity', 'AFTRA', 'SAG', 'IATSE', 'SSDC', 'DGA', 'AGMA'];

  $scope.skills= ['Accompanist', 'Acting Instructor', 'Actor', 'Administrator', 
                  'Artistic Director', 'Board Operator', 'Bookkeeper/Accounting',
                  'Carpenter', 'Choreographer', 'Composer', 'Costume Designer',
                  'Dance Instructor', 'Dancer', 'Development/Fundraising', 
                  'Dialect Coach', 'Director', 'Dramaturg', 'Educator', 
                  'Fight Choreographer', 'Front of House/Box Office', 'Graphic Designer',
                  'Hair/Makeup/Wig Artist', 'Improv Artist', 'Lighting Designer',
                  'Literary Manager', 'Managing Director', 'Marketing', 'Model',
                  'Multimedia Specialist', 'Music Director', 'Musician',
                  'Painter/Scenic Artist', 'Photographer', 'Playwright', 
                  'Producer', 'Production Manager', 'Prop Artisan', 'Public Relations',
                  'Puppeteer', 'Scenic Designer', 'Screenwriter', 'Sign Interpreter',
                  'Singer', 'Sound Designer', 'Sound Technician', 
                  'Special Effects/Pyrotechnics', 'Stage Combatant', 'Stage Manager',
                  'Student', 'Technical Director', 'Translator', 'Video/Film Editor',
                  'Videographer', 'Vocal Coach', 'Voice Talent', 'Volunteer or Board',
                  'Web Designer', 'Writer'];

  $scope.toggleUnion = function(union) {
    var idx = $scope.actor.union.indexOf(union);
    if (idx > -1) {
      $scope.actor.union.splice(idx, 1);
    } else {
      $scope.actor.union.push(union);
    }
  };

  $scope.toggleSkill = function(skill) {
    var idx = $scope.actor.skills.indexOf(skill);
    if (idx > -1) {
      $scope.actor.skills.splice(idx, 1);
    } else {
      $scope.actor.skills.push(skill);
    }
  };

};


registerActorController.$inject = ['$scope'];

export default registerActorController;