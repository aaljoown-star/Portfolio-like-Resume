const certificates = document.querySelectorAll('.certificate');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

let currentIndex = 0;

function showCertificate(index) {
  certificates.forEach((certificate, i) => {
    if (i === index) {
      certificate.classList.add('active');
    } else {
      certificate.classList.remove('active');
    }
  });
}

function showNextCertificate() {
  currentIndex = (currentIndex + 1) % certificates.length;
  showCertificate(currentIndex);
}

function showPrevCertificate() {
  currentIndex = (currentIndex - 1 + certificates.length) % certificates.length;
  showCertificate(currentIndex);
}

nextButton.addEventListener('click', showNextCertificate);
prevButton.addEventListener('click', showPrevCertificate);

// Show the first certificate initially
showCertificate(currentIndex);


//  


  document.addEventListener("DOMContentLoaded", function () {
    // Get references to the navigation links
    const profileLink = document.querySelector("#profile-link");
    const educationLink = document.querySelector("#education-link");
    const workExperienceLink = document.querySelector("#work-experience-link");
    const programmingLanguagesLink = document.querySelector("#programming-languages-link");
    const skillsLink = document.querySelector("#skills-link");
    const certificatesLink = document.querySelector("#certificates-link");

    // Get references to the respective sections
    const profileSection = document.querySelector("#profile");
    const educationSection = document.querySelector("#education");
    const workExperienceSection = document.querySelector("#work-experience");
    const programmingLanguagesSection = document.querySelector("#programming-languages");
    const skillsSection = document.querySelector("#skills");
    const certificatesSection = document.querySelector("#certificates");

    // Add click event listeners to the navigation links
    profileLink.addEventListener("click", function () {
      profileSection.scrollIntoView({ behavior: "smooth" });
    });

    educationLink.addEventListener("click", function () {
      educationSection.scrollIntoView({ behavior: "smooth" });
    });

    workExperienceLink.addEventListener("click", function () {
      workExperienceSection.scrollIntoView({ behavior: "smooth" });
    });

    programmingLanguagesLink.addEventListener("click", function () {
      programmingLanguagesSection.scrollIntoView({ behavior: "smooth" });
    });

    skillsLink.addEventListener("click", function () {
      skillsSection.scrollIntoView({ behavior: "smooth" });
    });

    certificatesLink.addEventListener("click", function () {
      certificatesSection.scrollIntoView({ behavior: "smooth" });
    });
  });



  // 


  document.addEventListener("DOMContentLoaded", function () {

    function handleLinkClick(linkElement) {

      document.querySelectorAll(".link").forEach((link) => link.classList.remove("active-link"));


      linkElement.classList.add("active-link");
    }


    profileLink.addEventListener("click", function () {
      profileSection.scrollIntoView({ behavior: "smooth" });
      handleLinkClick(profileLink);
    });

    educationLink.addEventListener("click", function () {
      educationSection.scrollIntoView({ behavior: "smooth" });
      handleLinkClick(educationLink);
    });

  });


  // 


 
   var btn = document.querySelector('.download-resume');
   btn.onclick = () => {
      window.print();
   }