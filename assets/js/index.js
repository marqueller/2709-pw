document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.nav-link'); // Seleciona todos os links da navegação
    const sections = document.querySelectorAll('.secao'); // Seleciona todas as seções

    links.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault(); // Evita o comportamento padrão do link

            // Esconde todas as seções
            sections.forEach(section => {
                section.style.display = 'none';
            });

            // Mostra apenas a seção correspondente ao link clicado
            const targetId = this.getAttribute('href'); // Pega o valor do href (por exemplo, #secao1)
            const targetSection = document.querySelector(targetId); // Seleciona a seção correspondente
            targetSection.style.display = 'block';
        });
    });
});
