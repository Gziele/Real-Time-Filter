const nomes = ["Ana", "Bruno", "Carla", "Beatriz", "André"];

document.getElementById("busca").addEventListener("input", () => {
    const termo = document.getElementById("busca").value;

    const filtrados = nomes.filter(nome =>
        nome.toLowerCase().includes(termo.toLowerCase())
    );

    document.getElementById("lista").innerHTML = filtrados
    .map(nome => `<li>${nome}</li>`)
    .join("");
});