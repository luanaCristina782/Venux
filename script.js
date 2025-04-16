function gerarSenha() {
  const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*";
  let senha = "";
  for (let i = 0; i < 12; i++) {
    const index = Math.floor(Math.random() * caracteres.length);
    senha += caracteres.charAt(index);
  }
  document.getElementById("senha").textContent = senha;
}
