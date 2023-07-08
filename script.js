// Mock data for candidates
const candidates = [
    { name: "Candidate 1", location: "Location A", jobRole: "Job Role A" },
    { name: "Candidate 2", location: "Location B", jobRole: "Job Role B" },
    { name: "Candidate 3", location: "Location C", jobRole: "Job Role C" }
  ];
  
  // Function to handle form submission
  function searchCandidates(event) {
    event.preventDefault();
  
    const location = document.getElementById("location").value;
    const jobRole = document.getElementById("job-role").value;
  
    const filteredCandidates = candidates.filter(candidate => {
      return (
        candidate.location.toLowerCase().includes(location.toLowerCase()) &&
        candidate.jobRole.toLowerCase().includes(jobRole.toLowerCase())
      );
    });
  
    displayCandidates(filteredCandidates);
  }
  
  // Function to display candidates
  function displayCandidates(candidates) {
    const candidatesList = document.getElementById("candidates-list");
    candidatesList.innerHTML = "";
  
    candidates.forEach(candidate => {
      const candidateElement = document.createElement("div");
      candidateElement.className = "candidate";
      candidateElement.innerHTML = `
        <h3>${candidate.name}</h3>
        <p>Location: ${candidate.location}</p>
        <p>Job Role: ${candidate.jobRole}</p>
      `;
      candidatesList.appendChild(candidateElement);
    });
  }
  
  // Attach form submission event listener
  const searchForm = document.querySelector("form");
  searchForm.addEventListener("submit", searchCandidates);
  