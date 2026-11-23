// URL de la API del backend
const API_URL = "/api/players";

// Elementos del HTML
const boton = document.getElementById("btnJugador");
const form = document.getElementById("formJugador");
const tituloForm = document.getElementById("tituloForm");
const btnCancelar = document.getElementById("btnCancelar");
const listaJugadores = document.getElementById("jugadores");
const mensaje = document.getElementById("mensaje");

// Campos del formulario
const campos = ["nombre", "apellidos", "edad", "dorsal", "posicion", "equipo", "nacionalidad"];

// Guarda el id del jugador que se está editando (null = jugador nuevo)
let idEditando = null;

// ---------- Mostrar / ocultar formulario ----------

function abrirFormulario(jugador = null) {
    form.reset();
    idEditando = jugador ? jugador._id : null;
    tituloForm.textContent = jugador ? "Editar jugador" : "Nuevo jugador";

    if (jugador) {
        campos.forEach((campo) => {
            document.getElementById(campo).value = jugador[campo] ?? "";
        });
    }

    form.classList.remove("oculto");
    form.scrollIntoView({ behavior: "smooth" });
}

function cerrarFormulario() {
    form.reset();
    idEditando = null;
    form.classList.add("oculto");
}

function mostrarMensaje(texto, esError = false) {
    mensaje.textContent = texto;
    mensaje.className = esError ? "error" : "ok";
    setTimeout(() => (mensaje.textContent = ""), 3000);
}

// ---------- Pintar jugadores ----------

function crearTarjeta(jugador) {
    const div = document.createElement("div");
    div.className = "jugador";

    const titulo = document.createElement("h3");
    titulo.textContent = `${jugador.nombre} ${jugador.apellidos}`;
    div.appendChild(titulo);

    const datos = [
        ["Dorsal", jugador.dorsal],
        ["Posición", jugador.posicion],
        ["Edad", jugador.edad],
        ["Equipo", jugador.equipo],
        ["Nacionalidad", jugador.nacionalidad],
    ];

    datos.forEach(([etiqueta, valor]) => {
        if (valor !== undefined && valor !== null && valor !== "") {
            const p = document.createElement("p");
            p.textContent = `${etiqueta}: ${valor}`;
            div.appendChild(p);
        }
    });

    const btnEditar = document.createElement("button");
    btnEditar.textContent = "Editar";
    btnEditar.addEventListener("click", () => abrirFormulario(jugador));

    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar";
    btnEliminar.className = "eliminar";
    btnEliminar.addEventListener("click", () => eliminarJugador(jugador));

    div.append(btnEditar, btnEliminar);
    return div;
}

// ---------- Llamadas a la API ----------

// READ: obtener todos los jugadores
async function cargarJugadores() {
    try {
        const respuesta = await fetch(API_URL);
        const jugadores = await respuesta.json();

        listaJugadores.innerHTML = "";

        if (jugadores.length === 0) {
            listaJugadores.innerHTML = "<p>Todavía no hay jugadores. ¡Añade el primero!</p>";
            return;
        }

        jugadores.forEach((jugador) => {
            listaJugadores.appendChild(crearTarjeta(jugador));
        });
    } catch (error) {
        mostrarMensaje("No se ha podido conectar con el servidor", true);
    }
}

// CREATE y UPDATE: guardar el formulario
async function guardarJugador(evento) {
    evento.preventDefault();

    const jugador = {};
    campos.forEach((campo) => {
        const valor = document.getElementById(campo).value.trim();
        if (valor !== "") jugador[campo] = valor;
    });

    const url = idEditando ? `${API_URL}/${idEditando}` : API_URL;
    const metodo = idEditando ? "PUT" : "POST";

    try {
        const respuesta = await fetch(url, {
            method: metodo,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(jugador),
        });

        if (!respuesta.ok) {
            const error = await respuesta.json();
            throw new Error(error.detalle || error.mensaje);
        }

        mostrarMensaje(idEditando ? "Jugador actualizado" : "Jugador añadido");
        cerrarFormulario();
        cargarJugadores();
    } catch (error) {
        mostrarMensaje(`Error al guardar: ${error.message}`, true);
    }
}

// DELETE: eliminar un jugador
async function eliminarJugador(jugador) {
    const confirmar = confirm(`¿Seguro que quieres eliminar a ${jugador.nombre} ${jugador.apellidos}?`);
    if (!confirmar) return;

    try {
        const respuesta = await fetch(`${API_URL}/${jugador._id}`, { method: "DELETE" });
        if (!respuesta.ok) throw new Error();

        mostrarMensaje("Jugador eliminado");
        cargarJugadores();
    } catch (error) {
        mostrarMensaje("Error al eliminar el jugador", true);
    }
}

// ---------- Eventos ----------

boton.addEventListener("click", () => abrirFormulario());
btnCancelar.addEventListener("click", cerrarFormulario);
form.addEventListener("submit", guardarJugador);

// Al abrir la página, cargar los jugadores
cargarJugadores();
