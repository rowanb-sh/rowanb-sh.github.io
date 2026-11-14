document.addEventListener("DOMContentLoaded", () => {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const projectCards = document.querySelectorAll(".project-card");

    filterButtons.forEach((button) => {
        button.addEventListener("click", () => {
            // Снимаем активный класс со всех кнопок и вешаем на нажатую
            filterButtons.forEach((btn) => btn.classList.remove("active"));
            button.classList.add("active");

            const selectedCategory = button.getAttribute("data-filter");

            // Показываем или скрываем карточки проектов
            projectCards.forEach((card) => {
                const cardCategory = card.getAttribute("data-category");

                if (selectedCategory === "all" || cardCategory === selectedCategory) {
                    card.classList.remove("hidden");
                } else {
                    card.classList.add("hidden");
                }
            });
        });
    });
});
