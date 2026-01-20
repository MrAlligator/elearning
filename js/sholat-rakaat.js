const sholatData = [
    { n: "Subuh", r: 2, i: "🌅" },
    { n: "Dzuhur", r: 4, i: "☀️" },
    { n: "Ashar", r: 4, i: "🌤️" },
    { n: "Maghrib", r: 3, i: "🌇" },
    { n: "Isya", r: 4, i: "🌙" },
];

const rakaatData = [2, 3, 4];
let active = null;

sholatData
    .sort(() => Math.random() - 0.5)
    .forEach((s) => {
        const d = document.createElement("div");
        d.className = "item";
        d.draggable = true;
        d.dataset.r = s.r;
        d.innerHTML = `<div style="font-size:32px">${s.i}</div>${s.n}`;
        d.ondragstart = () => (active = d);
        sholatColumn.appendChild(d);
    });

rakaatData.forEach((n) => {
    const z = document.createElement("div");
    z.className = "dropzone";
    z.innerText = `${n} Rakaat`;
    z.ondragover = (e) => e.preventDefault();
    z.ondrop = () => {
        if (active && active.dataset.r == n) {
            z.appendChild(active);
            message.innerText = "🎉 Benar!";
        } else {
            message.innerText = "❌ Salah";
        }
        active = null;
    };
    rakaatColumn.appendChild(z);
});
