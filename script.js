 const issuesList = document.getElementById('issues-list');
    const pageNum = document.getElementById('page-num');
    let currentPage = 1;

    function displayIssues(issues) {
      issuesList.innerHTML = '';
      issues.forEach(issue => {
        const li = document.createElement('li');
        li.textContent = issue.title;
        issuesList.appendChild(li);
      });
    }

    function fetchIssues(page) {
      const url = `https://api.github.com/repositories/1296269/issues?page=${page}&per_page=5`;

      fetch(url)
        .then(response => response.json())
        .then(data => {
          displayIssues(data);
          pageNum.textContent = page;
          currentPage = page;
        })
        .catch(error => console.error(error));
    }

    document.getElementById('load-next').addEventListener('click', () => {
      fetchIssues(currentPage + 1);
    });

    document.getElementById('load-prev').addEventListener('click', () => {
      if (currentPage > 1) {
        fetchIssues(currentPage - 1);
      }
    });

    fetchIssues(currentPage);