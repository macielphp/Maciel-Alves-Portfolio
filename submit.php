<?php
// Verifica se os dados foram enviados
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Coleta os dados do formulário
    $nome = $_POST["name"];
    $email = $_POST["email"];
    $mensagem = $_POST["message"];

    // Aqui você pode adicionar a lógica para enviar o e-mail, salvar no banco de dados, etc.

    // Configuração do e-mail de destino
    $destinatario = "macielalvescontato@gmail.com"; // Substitua pelo seu endereço de e-mail

    // Assunto do e-mail
    $assunto = "Nova mensagem do formulário de contato do seu site";

    // Corpo do e-mail
    $corpo_email = "Nome: $nome\n";
    $corpo_email .= "E-mail: $email\n";
    $corpo_email .= "Mensagem:\n$mensagem";

    // Cabeçalhos do e-mail
    $headers = "From: $nome <$email>";

    // Envio do e-mail
    // Envio do e-mail
    if (mail($destinatario, $assunto, $corpo_email, $headers)) {
        // Se o e-mail for enviado com sucesso, exibe um alerta
        echo "<script>alert('Obrigado! Sua mensagem foi enviada com sucesso.');</script>";
    } else {
        // Se houver um erro no envio do e-mail, exibe uma mensagem de erro
        echo "Ocorreu um erro ao enviar o e-mail. Por favor, tente novamente mais tarde.";
    }
}
?>