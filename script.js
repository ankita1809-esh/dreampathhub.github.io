document.addEventListener("DOMContentLoaded", function() {
    const faqButtons = document.querySelectorAll(".faq-question");

    faqButtons.forEach(button => {
        button.addEventListener("click", function() {
            const answer = this.nextElementSibling;
            answer.style.display = answer.style.display === "block" ? "none" : "block";
        });
    });
});
document.addEventListener("DOMContentLoaded", function() {
    let sections = document.querySelectorAll(".section-title"); // Class ko target kar rahi hu

    sections.forEach(section => {
        section.addEventListener("click", function() {
            let content = this.nextElementSibling; // Jo bhi next content h usko toggle karna hai
            if (content.style.display === "none" || content.style.display === "") {
                content.style.display = "block";
            } else {
                content.style.display = "none";
            }
        });
    });
});
