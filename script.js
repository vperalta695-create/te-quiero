// 🔐 CONTRASEÑA
const password = "el 2 de febrero";

const intento = prompt("💌 Esta carta tiene contraseña... ¿Cuál es?  pista el dia que fuimos novios" );

if (intento !== password) {
  document.body.innerHTML = `
    <div style="display:flex;justify-content:center;align-items:center;height:100vh;font-family:sans-serif;background:#ffe6f0;">
      <h2>❌ gracias no me queres </h2>
    </div>
  `;
}

// 💌 FUNCIÓN PARA ABRIR CARTA
function abrirCarta() {
  document.querySelector(".carta").classList.toggle("abierta");
}
