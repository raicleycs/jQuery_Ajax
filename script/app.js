$(document).ready(function () {
    const API_URL = "http://localhost:3000/users";

    // Função para mostrar mensagem
    function showMessage(msg, isError = false) {
        $('#message').text(msg).toggleClass('error', isError);
        setTimeout(() => $('#message').text(''), 3000);
    }

    // Função para listar usuários
    function listUsers() {
        $.ajax({
            url: API_URL,
            method: "GET",
            dataType: "json",
            success: function (data) {
                let rows = "";
                data.forEach(user => {
                    rows += `<tr>
              <td>${user.name}</td>
              <td>${user.email}</td>
              <td>
                <button class="editBtn" data-id="${user.id}">Editar</button>
                <button class="deleteBtn" data-id="${user.id}">Excluir</button>
              </td>
            </tr>`;
                });
                $('#userList').html(rows);
            },
            error: function () {
                showMessage("Erro ao carregar usuários.", true);
            }
        });
    }

    // Listar usuários ao carregar a página
    listUsers();

    // Salvar usuário (Criar ou Atualizar)
    $('#formUser').submit(function (e) {
        e.preventDefault();

        const id = $('#userId').val();
        const name = $('#name').val();
        const email = $('#email').val();

        if (!name || !email) {
            showMessage("Preencha todos os campos.", true);
            return;
        }

        const userData = { name, email };

        if (id) {
            // Atualizar (PUT)
            $.ajax({
                url: `${API_URL}/${id}`,
                method: "PUT",
                contentType: "application/json",
                data: JSON.stringify(userData),
                success: function () {
                    showMessage("Usuário atualizado com sucesso!");
                    $('#formUser')[0].reset();
                    $('#userId').val('');
                    listUsers();
                },
                error: function () {
                    showMessage("Erro ao atualizar usuário.", true);
                }
            });
        } else {
            // Criar (POST)
            $.ajax({
                url: API_URL,
                method: "POST",
                contentType: "application/json",
                data: JSON.stringify(userData),
                success: function () {
                    showMessage("Usuário criado com sucesso!");
                    $('#formUser')[0].reset();
                    listUsers();
                },
                error: function () {
                    showMessage("Erro ao criar usuário.", true);
                }
            });
        }
    });

    // Editar usuário - preencher o formulário
    $(document).on('click', '.editBtn', function () {
        const id = $(this).data('id');

        $.ajax({
            url: `${API_URL}/${id}`,
            method: "GET",
            dataType: "json",
            success: function (user) {
                $('#userId').val(user.id);
                $('#name').val(user.name);
                $('#email').val(user.email);
            },
            error: function () {
                showMessage("Erro ao buscar usuário.", true);
            }
        });
    });

    // Excluir usuário
    $(document).on('click', '.deleteBtn', function () {
        if (!confirm("Tem certeza que deseja excluir este usuário?")) return;

        const id = $(this).data('id');

        $.ajax({
            url: `${API_URL}/${id}`,
            method: "DELETE",
            success: function () {
                showMessage("Usuário excluído com sucesso!");
                listUsers();
            },
            error: function () {
                showMessage("Erro ao excluir usuário.", true);
            }
        });
    });
});
