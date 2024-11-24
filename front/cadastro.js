let button = document.getElementById("enviar");

button.onclick = async function () {
    let name = document.getElementById("name").value;
    let cpf = document.getElementById("cpf").value;
    let endereco = document.getElementById("endereco").value;
    let credencial = document.getElementById("credencial").value;
    let cargo = document.getElementById("cargo").value;

    
    // Prepara os dados para envio
    let data = { name, cpf, endereco, credencial, cargo };
    console.log(data)
    try {
        const response = await fetch('http://localhost:3005/api/cadastrar', {
            method: "POST",
            headers: { "Content-Type": "application/json;charset=UTF-8" },
            body: JSON.stringify(data)
        });

        let content = await response.json();

        console.log(content);
        if (content.success) {
            Swal.fire({
                title: "Sucesso!",
                text: "Formulário enviado com sucesso, aproveite!",
                icon: "success"
            }).then(() => {
                window.location.href = "../front/index.html";
            });
        } else {
            Swal.fire({
                title: "Erro!",
                text: "Não enviado: " + (content.message || "Erro desconhecido"),
                icon: "error"
            });
        }
    } catch (error) {
        console.error("Erro:", error);
        Swal.fire({
            title: "Erro!",
            text: "Houve um erro ao enviar o formulário.",
            icon: "error"
        });
    }
};

// Função para verificar se o e-mail já existe no banco de dados
async function verificarEmail(email) {
    try {
        const response = await fetch('http://localhost:3005/api/verificar-email', {
            method: 'POST',
            headers: { "Content-Type": "application/json;charset=UTF-8" },
            body: JSON.stringify({ email: email })
        });

        const data = await response.json();
        return data.existe;  // Retorna true se o e-mail existir, caso contrário, false
    } catch (error) {
        console.error('Erro na verificação de e-mail:', error);
        Swal.fire({
            title: "Erro!",
            text: "Erro ao verificar o e-mail. Tente novamente.",
            icon: "error"
        });
        return false;  // Caso haja erro na verificação, consideramos que o e-mail não existe
    }
}