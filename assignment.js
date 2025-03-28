document.addEventListener("DOMContentLoaded", function () {
    const input = document.getElementById("markdown-input");
    const preview = document.getElementById("preview");
    const clearBtn = document.getElementById("clear-btn");

    function updatePreview() {
        preview.innerHTML = marked.parse(input.value);
    }

    input.addEventListener("input", updatePreview);

    clearBtn.addEventListener("click", function () {
        input.value = "";
        preview.innerHTML = "";
    });

    updatePreview(); // Initial preview update
});