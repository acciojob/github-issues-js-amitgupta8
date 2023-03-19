const issuesList = document.getElementById("issuesList");
const pageNumberSpan = document.getElementById("pageNumber");
let pageNumber = 1;

function displayIssues(issues) {
  issuesList.innerHTML = "";
  issues.forEach((issue) => {
    const issueName = issue.title;
    const issueItem = document.createElement("li");
    issueItem.innerText = issueName;
    issuesList.appendChild(issueItem);
  });
}

function loadIssues() {
  fetch(`https://api.github.com/repositories/1296269/issues?page=${pageNumber}&per_page=5`)
    .then((response) => response.json())
    .then((issues) => displayIssues(issues))
    .catch((error) => console.error(error));
}

loadIssues();

document.getElementById("load_next").addEventListener("click", () => {
  pageNumber++;
  pageNumberSpan.innerText = pageNumber;
  loadIssues();
});

document.getElementById("load_prev").addEventListener("click", () => {
  if (pageNumber > 1) {
    pageNumber--;
    pageNumberSpan.innerText = pageNumber;
    loadIssues();
  }
});
