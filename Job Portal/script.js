let jobCount = 0;

function updateJobCount() {
    document.getElementById("jobCount").innerText = jobCount;
}

function addJob() {
    
    let title = document.getElementById("jobTitle").value.trim();
    let company = document.getElementById("companyName").value.trim();
    let location = document.getElementById("jobLocation").value.trim();

    if (title === "" || company === "" || location === "") {
        alert("Please fill all the fields!");
        return;
    }

    let jobCard = document.createElement("div");
    jobCard.className = "job-card";

    jobCard.innerHTML = `
        <h3>${title}</h3>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Location:</strong> ${location}</p>
        <button class="apply-btn">Apply</button>
        <button class="delete-btn">Delete</button>
    `;

    let applyBtn = jobCard.querySelector(".apply-btn");
    applyBtn.onclick = function () {
        applyBtn.innerText = "Applied";
        applyBtn.disabled = true;
        applyBtn.style.backgroundColor = "gray";
        alert("Application submitted successfully!");
    };

    let deleteBtn = jobCard.querySelector(".delete-btn");
    deleteBtn.onclick = function () {
        jobCard.remove();
        jobCount--;
        updateJobCount();
        setTimeout(() => { 
            alert("Job Deleted, HURRAY");
        }, 200);
    };

    document.getElementById("jobList").appendChild(jobCard);

    jobCount++;
    updateJobCount();

    document.getElementById("jobTitle").value = "";
    document.getElementById("companyName").value = "";
    document.getElementById("jobLocation").value = "";
}