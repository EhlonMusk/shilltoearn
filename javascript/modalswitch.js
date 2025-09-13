let rankingsModal = "off";
let distributionModal = "off";
let sectionsCount = "on";

// Helper function to close all main sections
const closeMainSections = () => {
  const sectionOne = document.querySelector(".sectionOne");
  const sectionTwo = document.querySelector(".sectionTwo");
  const sectionThree = document.querySelector(".sectionThree");
  const sectionFour = document.querySelector(".sectionFour");

  sectionOne.classList.add("closed");
  sectionTwo.classList.add("closed");
  sectionThree.classList.add("closed");
  sectionFour.classList.add("closed");

  sectionsCount = "off";
};

// Helper function to open all main sections
const openMainSections = () => {
  const sectionOne = document.querySelector(".sectionOne");
  const sectionTwo = document.querySelector(".sectionTwo");
  const sectionThree = document.querySelector(".sectionThree");
  const sectionFour = document.querySelector(".sectionFour");

  sectionOne.classList.remove("closed");
  sectionTwo.classList.remove("closed");
  sectionThree.classList.remove("closed");
  sectionFour.classList.remove("closed");

  sectionsCount = "on";
};

// Helper function to close rankings modal
const closeRankingsModal = () => {
  const sectionFive = document.querySelector(".sectionFive");
  sectionFive.classList.remove("open");
  rankingsModal = "off";
};

// Helper function to close distribution modal
const closeDistributionModal = () => {
  const sectionSix = document.querySelector(".sectionSix");
  sectionSix.classList.remove("open");
  distributionModal = "off";
};

// Main function to handle rankings button click
const rankingsModalToggle = () => {
  if (rankingsModal === "off") {
    // Opening rankings modal
    closeMainSections();
    if (distributionModal === "on") {
      closeDistributionModal();
    }

    const sectionFive = document.querySelector(".sectionFive");
    sectionFive.classList.add("open");
    rankingsModal = "on";
  } else {
    // Closing rankings modal
    closeRankingsModal();
    openMainSections();
  }
};

// Main function to handle distribution button click
const distributionModalToggle = () => {
  if (distributionModal === "off") {
    // Opening distribution modal
    closeMainSections();
    if (rankingsModal === "on") {
      closeRankingsModal();
    }

    const sectionSix = document.querySelector(".sectionSix");
    sectionSix.classList.add("open");
    distributionModal = "on";
  } else {
    // Closing distribution modal
    closeDistributionModal();
    openMainSections();
  }
};

// Function to handle navigation to main sections
const navigateToMainSection = (targetSection) => {
  const wasModalOpen = rankingsModal === "on" || distributionModal === "on";

  if (rankingsModal === "on") {
    closeRankingsModal();
  }
  if (distributionModal === "on") {
    closeDistributionModal();
  }
  if (sectionsCount === "off") {
    openMainSections();
  }

  // If a modal was open, scroll to the target section after a brief delay
  // to allow the sections to be restored first
  if (wasModalOpen && targetSection) {
    setTimeout(() => {
      const targetElement = document.querySelector(targetSection);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 100); // Small delay to ensure sections are visible
  }
};

// Event listeners for modal buttons
document.querySelector(".rankingsBtn").onclick = () => {
  rankingsModalToggle();
  console.log("Rankings:", rankingsModal, "Distribution:", distributionModal);
};

document.querySelector(".distributionBtn").onclick = () => {
  distributionModalToggle();
  console.log("Rankings:", rankingsModal, "Distribution:", distributionModal);
};

// Event listeners for main navigation buttons
document.querySelector('a[href="#sectionOne"]').onclick = (e) => {
  e.preventDefault(); // Prevent default anchor behavior
  navigateToMainSection("#sectionOne");
  console.log(
    "Navigating to Home - Rankings:",
    rankingsModal,
    "Distribution:",
    distributionModal
  );
};

document.querySelector('a[href="#sectionTwo"]').onclick = (e) => {
  e.preventDefault(); // Prevent default anchor behavior
  navigateToMainSection("#sectionTwo");
  console.log(
    "Navigating to Join - Rankings:",
    rankingsModal,
    "Distribution:",
    distributionModal
  );
};

document.querySelector('a[href="#sectionThree"]').onclick = (e) => {
  e.preventDefault(); // Prevent default anchor behavior
  navigateToMainSection("#sectionThree");
  console.log(
    "Navigating to About - Rankings:",
    rankingsModal,
    "Distribution:",
    distributionModal
  );
};

document.querySelector('a[href="#sectionFour"]').onclick = (e) => {
  e.preventDefault(); // Prevent default anchor behavior
  navigateToMainSection("#sectionFour");
  console.log(
    "Navigating to FAQ - Rankings:",
    rankingsModal,
    "Distribution:",
    distributionModal
  );
};
