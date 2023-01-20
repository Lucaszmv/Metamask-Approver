# Metamask Approver
Este código é um script JavaScript que foi criado para aprovar transações. Ele usa a função `$` para selecionar elementos do DOM e a função `sleep` para adiar a execução do script por um determinado período de tempo. O script também cria um elemento `span` no corpo da página que exibe o texto "SCRIPT ATIVADO" quando é executado. 

O script então entra em um loop infinito, verificando se há alguma transação não confirmada e, se houver, clicando nela. Se houver um botão habilitado na página, o script clica nele também. Se nenhum botão for encontrado, uma mensagem de erro será exibida no console. 

Por fim, o script clica na guia "Home" a cada 30 segundos para atualizar as transações disponíveis. O tempo de execução do script é definido como 1800000 milissegundos (30 minutos).

<img src="https://i.imgur.com/rk8qw8I.jpg">
