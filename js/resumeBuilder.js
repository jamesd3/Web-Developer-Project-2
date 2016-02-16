var bio = {
	"name" : "James DeLapa III",
	"role" : "<strong>Full Stack Web Developer</strong>",
	"welcomeMessage" : "<br />Fast-learning entry-level developer with a passion for programming <br /><br />",
	"skills" : [
	  "Python (Intermediate)", "PostgreSQL (Intermediate)", "HTML/CSS (Advanced)", "Javascript (Intermediate)"
	],
	"contacts" : {
		"mobile" : "858-342-9614",
		"email" : "james.delapa@gmail.com",
		"github" : "JamesD3",
		"location" : "San Diego, CA"
	},
	"bioPic" : "C:/Users/James/fullstack/FrontEndWebDeveloper/P2/images/JamesDeLapaIII.jpg"
}

if(bio.role.length > 0) {
	var formattedHeaderRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").prepend(formattedHeaderRole);
}

if(bio.name.length > 0) {
	var formattedHeaderName = HTMLheaderName.replace("%data%", bio.name);
	$("#header").prepend(formattedHeaderName);
}

if(bio.bioPic.length > 0) {
    var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
    $("#header").append(formattedBioPic);
}

if(bio.welcomeMessage.length > 0) {
	var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedWelcomeMsg);
}

if(bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);

	formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);

	formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);

	formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
	$("#skills").append(formattedSkill);
}

function displayContacts() {
		var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
		var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
		var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
		var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
       	var formattedContactData = formattedMobile + formattedEmail + formattedGitHub + formattedLocation;

		$("#topContacts").append(formattedContactData);
		$("#footerContacts").append(formattedContactData);
	}

displayContacts();


var work = {
	"jobs" : [
	{
		"employer" : "Senior Care Directory",
		"title" : "President",
		"location" : "Del Mar Heights Road San Diego, CA",
		"dates" : "February 2014 - Present",
		"description" : "Started a business originally called &quot;Senior Care Agents&quot; to help families find senior care homes in San Diego. Obtained a license to own and operate Residential Care Facilities for the Elderly in California and helped many families find their care needs. Transitioned to a web platform to create a national directory service for senior care services. Currently this site receives several thousand views each month with a monthly viewership growth rate of 15%. Active participants in our service include hundreds of individual communities along with some of the largest senior care providers in the United States which account for thousands of profiles."
	},
	{
		"employer" : "AMN Healthcare",
		"title" : "Senior Recruiter",
		"location" : "12000 High Bluff Drive San Diego, CA",
		"dates" : "June 2012 - February 2014",
		"description" : "Duties ranged widely from cold calls to maintaining clients. Received &quot;Traveler Keeper&quot; award for having highest travel nurse retention in the company in 2013. Sourced candidate nurses from an applicant pool that had leads of varying quality then matched interested candidates with hospital positions nationwide. Nurses took contracts of varying length but a standard contract was 3 months, after which the job search began again. Left the company in good standing to start my own unrelated business."
	},
	{
		"employer" : "TakeLessons",
		"title" : "Marketing Manager",
		"location" : "San Diego, CA",
		"dates" : "May 2011 - June 2012",
		"description" : "Optimize and manage online marketing channels to attract music teachers to work for TakeLessons. Started as a sales rep and quickly graduated to an outbound recruitment role. From recruitment, the position transitioned to marketing where talent sourcing was focused on instructors as a group as opposed to individual instructors."
	}
	]
}

function displayWork() {
	for(job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		// employer, title
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		// location, date, description
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		// add them up and what do you have?
		var formattedEmployerDetails = formattedEmployer + formattedTitle + formattedLocation + formattedDates + formattedDescription;

		$(".work-entry:last").append(formattedEmployerDetails);
	}
}

displayWork();

var education = {
	"schools" : [
	  {
	  	"name" : "University of Southern California",
	  	"location" : "Los Angeles, CA",
	  	"degree" : "B.S.",
	  	"major" : ["Business Administration"],
	  	"years" : "2007 - 2010"
	  }],
	"onlineCourses" : [
	   {
	   	"title" : "Full Stack Web Developer Nanodegree",
	   	"school" : "Udacity",
	   	"dates" : "October 2015 - January 2016",
	   	"url" : "http://www.udacity.com/"
	   }]
}

function displayEducation() {
	for(school in education.schools) {
		$("#education").append(HTMLschoolStart);
		// Degree and university
		var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		// location, date, description
		var formattedCity = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].years);
		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
		// add them up and what do you have?
		var formattedEducation = formattedName + formattedDegree + formattedCity + formattedDates + formattedMajor;

		$(".education-entry:last").append(formattedEducation);

	}
}

displayEducation();

function displayOnEd() {
	for(onlineCourse in education.onlineCourses) {
		$("#oned").append(HTMLonlineClasses);
		// Degree title, school name
		var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title);
		var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
		// date, description
		var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].dates);
		var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url);
		// add them up and what do you have?
		var formattedOnEd = formattedTitle + formattedSchool + formattedDates + formattedURL;

		$(".oned-entry:last").append(formattedOnEd);
	}
}


displayOnEd();

var projectData = {
	"projects" : [
	  {
	  	"title" : "Udacity Movie Project",
		"dates" : "October",
		"description" : "A project that displays information about six movies using Python, HTML, and CSS.",
		"images" : [
		"C:/Users/James/fullstack/FrontEndWebDeveloper/P2/images/Movie-Project-Image.png"]
		},
		{
	  	"title" : "Udacity Tournament Project",
		"dates" : "November",
		"description" : "Created a tournament project using Python and PostgreSQL to implement a Swiss-Style Tournament that ranks players by wins and matches them with the most suitable opponent.",
		"images" : [
		"C:/Users/James/fullstack/FrontEndWebDeveloper/P2/images/tournament-project-image.png"]
		}]
}

projectData.display = function() {
	for(var index in projectData.projects) {
		$("#projects").append(HTMLprojectStart);

		// title
		var formattedTitle = HTMLprojectTitle.replace("%data%", projectData.projects[index].title);
		$(".project-entry:last").append(formattedTitle);

		// date, description, and image
		var formattedDates = HTMLprojectDates.replace("%data%", projectData.projects[index].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projectData.projects[index].description);
		$(".project-entry:last").append(formattedDescription);

		if (projectData.projects[index].images.length > 0) {
			for (image in projectData.projects[index].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projectData.projects[index].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}

	}
}

projectData.display();

$("#mapDiv").append(googleMap);

