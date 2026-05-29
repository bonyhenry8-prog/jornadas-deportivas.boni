// app.js - Motor de Renderizado Estético Oficial (CACM)

document.addEventListener("DOMContentLoaded", () => {
    if (typeof jorndasDeportivasData === 'undefined') return;

    const disc = jorndasDeportivasData.disciplinas;

    // 1. CARGAR TABLAS DE FÚTBOL
    if (disc.futbol) {
        const fCat = disc.futbol.categorias;
        const tMaster = document.getElementById("tabla-posiciones-master");
        if (tMaster && fCat.master) renderizarFutbol(tMaster, fCat.master.equipos);

        const tSeniorA = document.getElementById("tabla-posiciones-senior-a");
        if (tSeniorA && fCat.senior) renderizarFutbol(tSeniorA, fCat.senior.grupoA);

        const tSeniorB = document.getElementById("tabla-posiciones-senior-b");
        if (tSeniorB && fCat.senior) renderizarFutbol(tSeniorB, fCat.senior.grupoB);

        const tFemenino = document.getElementById("tabla-posiciones-femenino");
        if (tFemenino && fCat.femenino) renderizarFutbol(tFemenino, fCat.femenino.equipos);
    }

    // 2. CARGAR TABLA DE ECUAVOLEY
    if (disc.ecuavoley && disc.ecuavoley.categorias.unico) {
        const tEcuavoley = document.getElementById("tabla-posiciones-ecuavoley");
        if (tEcuavoley) {
            renderizarEcuavoley(tEcuavoley, disc.ecuavoley.categorias.unico.equipos);
        }
    }

    // 3. CARGAR TABLA DE BASKETBALL
    if (disc.basketball && disc.basketball.categorias.unico) {
        const tBasket = document.getElementById("tabla-posiciones-basketball");
        if (tBasket) {
            renderizarBasket(tBasket, disc.basketball.categorias.unico.equipos);
        }
    }
});

// Función Render Fútbol
// Función Render Fútbol
function renderizarFutbol(tablaElement, listaEquipos) {
    tablaElement.innerHTML = "";
    // Ordenamiento: Pts > GD > PJ
    [...listaEquipos].sort((a, b) => b.pts - a.pts || b.gd - a.gd || a.pj - b.pj).forEach((equipo, index) => {
        const fila = document.createElement("tr");
        fila.innerHTML = `
            <td style="text-align: center; font-weight: bold;">${index + 1}</td>
            <td style="text-align: left; font-weight: 500;">${equipo.nombre}</td>
            <td style="text-align: center;">${equipo.pj}</td>
            <td style="text-align: center; font-weight: bold;">${equipo.gd}</td>
            <td style="text-align: center; font-weight: bold; color: #1f4e78; background-color: rgba(31, 78, 120, 0.04);">${equipo.pts}</td>
        `;
        tablaElement.appendChild(fila);
    });
}

function renderizarEcuavoley(tablaElement, listaEquipos) {
    tablaElement.innerHTML = "";
    
    // Convertimos a array, filtramos y ordenamos numéricamente
    const dataOrdenada = [...listaEquipos].sort((a, b) => {
        const puntosA = parseInt(a.pts) || 0;
        const puntosB = parseInt(b.pts) || 0;
        return puntosB - puntosA;
    });

    dataOrdenada.forEach((equipo, index) => {
        const fila = document.createElement("tr");
        fila.innerHTML = `
            <td style="text-align: center; font-weight: bold;">${index + 1}</td>
            <td style="text-align: left; font-weight: 500;">${equipo.nombre}</td>
            <td style="text-align: center;">${equipo.pj}</td>
            <td style="text-align: center;">${equipo.qg}</td>
            <td style="text-align: center;">${equipo.qp}</td>
            <td style="text-align: center; font-weight: bold; color: #1f4e78; background-color: rgba(31, 78, 120, 0.04);">${equipo.pts}</td>
        `;
        tablaElement.appendChild(fila);
    });
}



// Función Render Basketball
function renderizarBasket(tablaElement, listaEquipos) {
    tablaElement.innerHTML = "";
    // Ordenamiento: Pts > PG > PP
    [...listaEquipos].sort((a, b) => b.pts - a.pts || b.pg - a.pg || a.pp - b.pp).forEach((equipo, index) => {
        const fila = document.createElement("tr");
        fila.innerHTML = `
            <td style="text-align: center; font-weight: bold;">${index + 1}</td>
            <td style="text-align: left; font-weight: 500;">${equipo.nombre}</td>
            <td style="text-align: center;">${equipo.pj}</td>
            <td style="text-align: center;">${equipo.pg}</td>
            <td style="text-align: center;">${equipo.pp}</td>
            <td style="text-align: center; font-weight: bold; color: #1f4e78; background-color: rgba(31, 78, 120, 0.04);">${equipo.pts}</td>
        `;
        tablaElement.appendChild(fila);
    });
}