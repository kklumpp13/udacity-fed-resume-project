var bio = {
  name: 'Jane Smith',
  role: 'Front End Developer',
  contacts: {
    mobile: '123-123-1234',
    email: 'jsmith@gmail.com',
    github: 'jsmith',
    twitter: '@jsmith',
    location: 'Fort Lauderdale, FL'
  },
  welcomeMessage: 'Bacon ipsum dolor amet picanha rump short ribs spare ribs.',
  skills: ['Responsive Design', 'React', 'JavaScript', 'UI/UX', 'Accessibility'],
  biopic: 'http://placeskull.com/100/100/000000/4',
};

var education = {
  schools: [
    {
      name: 'Random School I',
      location: 'Raleigh, NC',
      degree: 'MA',
      majors: ['Journalism'],
      dates: '2017'
    },
    {
      name: 'Random School II',
      location: 'Atlanta, GA',
      degree: 'BA',
      majors: ['Web Design', 'Literature'],
      dates: '2014'
    }
  ],
  onlineCourses: [
    {
      title: 'Front-End Web Developer Nanodegree',
      school: 'Udacity',
      dates: '6/25/2017 - present',
      url: 'https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001',
    }
  ]
};

var work = {
  jobs: [
    {
      employer: 'Fake Company I',
      title: 'Web Developer',
      location: 'Fort Lauderdale, FL',
      dates: 'July 2015 - present',
      description: 'Rump pork chop brisket, tail corned beef turkey filet mignon jowl leberkas biltong salami burgdoggen short loin. Ribeye filet mignon sausage frankfurter, shank picanha brisket rump burgdoggen pork loin.'
    },
    {
      employer: 'Fake Company II',
      title: 'UI Developer',
      location: 'Tokyo, Japan',
      dates: 'July 2013 - 2015',
      description: 'Meatloaf pork drumstick, prosciutto bresaola tri-tip kevin alcatra ham hock turkey meatball pastrami. Ball tip kielbasa strip steak flank. Shank doner salami kevin, cupim kielbasa tongue meatball shoulder pork burgdoggen frankfurter.'
    }
  ]
};

var projects = {
  projects: [
    {
      title: 'First project',
      dates: 'June 2017',
      description: 'Frankfurter pork loin short loin flank, beef ribs pig salami burgdoggen kevin jerky ham hock t-bone. Beef corned beef jowl, sausage pork belly kielbasa ground round cupim burgdoggen pork biltong meatball fatback flank.',
      images: ['http://placeskull.com/200/200/000000/27'],
    },
    {
      title: 'Second Project',
      dates: 'June 2017',
      description: 'Biltong pastrami tenderloin doner tail pork belly porchetta cupim kielbasa. Bacon brisket swine meatball ribeye ham meatloaf. Shank chuck pork loin alcatra rump tenderloin.',
      images: ['http://placeskull.com/200/200/000000/28', 'http://placeskull.com/200/200/000000/33'],
    }
  ]
};

bio.display = function displayBio() {
  var formattedName = HTMLheaderName.replace('%data%', bio.name),
      formattedRole = HTMLheaderRole.replace('%data%', bio.role),
      formattedBioPic = HTMLbioPic.replace('%data%', bio.biopic),
      formattedWelcomeMessage = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage),
      header = $('#header');

  header
    .prepend(formattedRole)
    .prepend(formattedName);
  header
    .append(formattedWelcomeMessage)
    .append(formattedBioPic);

  if (bio.contacts) {
    Object.keys(bio.contacts).forEach(function(contact) {
      var formattedContacts = HTMLcontactGeneric
        .replace('%contact%', contact)
        .replace('%data%', bio.contacts[contact]);

      //Add social links to both header and footer
      $('#topContacts, #footerContacts').append(formattedContacts);
    });
  }

  if (bio.skills) {
    header.append(HTMLskillsStart);

    bio.skills.forEach(function(skill) {
      var formattedSkill = HTMLskills.replace('%data%', skill);
      $('#skills').append(formattedSkill);
    });
  }
};

education.display = function displayEducation() {
  var educationSection = $('#education');

  if (education.schools) {
    education.schools.forEach(function(school) {
      var formattedSchoolName = HTMLschoolName.replace('%data%', school.name),
          formattedSchoolDegree = HTMLschoolDegree.replace('%data%', school.degree),
          formattedNameAndDegree = formattedSchoolName + formattedSchoolDegree,
          formattedSchoolDates = HTMLschoolDates.replace('%data%', school.dates),
          formattedSchoolLocation = HTMLschoolLocation.replace('%data%', school.location);

      educationSection.append(HTMLschoolStart);

      $('.education-entry:last')
        .append(formattedNameAndDegree)
        .append(formattedSchoolDates)
        .append(formattedSchoolLocation);

      school.majors.forEach(function(major) {
        var formatedSchoolMajor = HTMLschoolMajor.replace('%data%', major);
        $('.education-entry:last').append(formatedSchoolMajor);
      });
    });

    educationSection.append(HTMLonlineClasses);

    if (education.onlineCourses) {
      education.onlineCourses.forEach(function(school) {
        var formattedOnlineTitle = HTMLonlineTitle.replace('%data%', school.title),
            formatedOnlineSchool = HTMLonlineSchool.replace('%data%', school.school),
            formattedTitleAndSchool = formattedOnlineTitle + formatedOnlineSchool,
            formattedOnlineDates = HTMLonlineDates.replace('%data%', school.dates),
            formattedOnlineURL = HTMLonlineURL.replace('%data%', school.url);

        educationSection.append(HTMLschoolStart);
        $('.education-entry:last')
          .append(formattedTitleAndSchool)
          .append(formattedOnlineDates)
          .append(formattedOnlineURL);
      });
    }
  }
};

work.display = function displayWork() {
  if (work.jobs) {
    work.jobs.forEach(function(job) {
      var formattedEmployer = HTMLworkEmployer.replace('%data%', job.employer),
          formattedTitle = HTMLworkTitle.replace('%data%', job.title),
          formattedDates = HTMLworkDates.replace('%data%', job.dates),
          formattedLocation = HTMLworkLocation.replace('%data%', job.location),
          formattedDescription = HTMLworkDescription.replace('%data%', job.description),
          output = formattedEmployer + ' ' + formattedTitle;

      $('#workExperience').append(HTMLworkStart);
      $('.work-entry:last')
        .append(output)
        .append(formattedDates)
        .append(formattedLocation)
        .append(formattedDescription);
    });
  }
};

projects.display = function() {
  if (projects.projects) {
    projects.projects.forEach(function(project) {
      var formattedProjectTitle = HTMLprojectTitle.replace('%data%', project.title),
          formattedProjectDates = HTMLprojectDates.replace('%data%', project.dates),
          formattedProjectDescription = HTMLprojectDescription.replace('%data%', project.description);

      $('#projects').append(HTMLprojectStart);
      $('.project-entry:last')
        .append(formattedProjectTitle)
        .append(formattedProjectDates)
        .append(formattedProjectDescription);

      project.images.forEach(function(image) {
        var formattedProjectImage = HTMLprojectImage.replace('%data%', image);
        $('.project-entry:last').append(formattedProjectImage);
      });
    });
  }
};

bio.display();
education.display();
work.display();
projects.display();

$('#mapDiv').append(googleMap);
