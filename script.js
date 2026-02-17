// 🔐 CONTRASEÑA
const password = "2 de febrero"; // cambia aquí

const intento = prompt("💌 Esta carta tiene contraseña... ¿Cuál es? pista dia que fuimos novios");

if (intento !== password) {
  document.body.innerHTML = `
    <div style="display:flex;justify-content:center;align-items:center;height:100vh;font-family:sans-serif;background:#ffe6f0;">
      <h2>❌ gracias por todo no me queres parece </h2>
    </div>
  `;
}

// 💌 Abrir carta
function abrirCarta() {
  document.querySelector(".carta").classList.toggle("abierta");
}
