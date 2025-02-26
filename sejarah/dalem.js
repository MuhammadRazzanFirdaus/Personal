document.addEventListener("DOMContentLoaded", function () {
    const dates = document.querySelectorAll("#dates li a");
    const issues = document.querySelectorAll("#issues li");
    let currentIndex = 0;

    function updateTimeline(index) {
        dates.forEach((date, i) => {
            date.classList.toggle("selected", i === index);
        });
        issues.forEach((issue, i) => {
            if (i === index) {
                issue.style.display = "block";
                issue.style.opacity = "0";
                setTimeout(() => {
                    issue.style.transition = "opacity 0.5s ease-in-out";
                    issue.style.opacity = "1";
                }, 10);
            } else {
                issue.style.transition = "opacity 0.5s ease-in-out";
                issue.style.opacity = "0";
                setTimeout(() => {
                    issue.style.display = "none";
                }, 500);
            }
        });
    }

    document.getElementById("next").addEventListener("click", function (event) {
        event.preventDefault();
        if (currentIndex < dates.length - 1) {
            currentIndex++;
            updateTimeline(currentIndex);
        }
    });

    document.getElementById("prev").addEventListener("click", function (event) {
        event.preventDefault();
        if (currentIndex > 0) {
            currentIndex--;
            updateTimeline(currentIndex);
        }
    });

    dates.forEach((date, index) => {
        date.addEventListener("click", function (event) {
            event.preventDefault();
            currentIndex = index;
            updateTimeline(currentIndex);
        });
    });

    updateTimeline(currentIndex);
});