class Banco {
    usuario;
    dinheiro;
    conta;
    agencia;

    constructor() {
        this.usuario = "";
        this.dinheiro = 0;
        this.conta = "";
        this.agencia = "";
        this.carregarDados(); // Carrega os dados ao criar uma nova instância
    }

    carregarDados() {
        this.usuario = sessionStorage.getItem("usuario") || "";
        this.dinheiro = Number(sessionStorage.getItem("dinheiro")) || 0;
        this.conta = sessionStorage.getItem("conta") || "";
        this.agencia = sessionStorage.getItem("agencia") || "";
    }

    salvarDados() {
        sessionStorage.setItem("usuario", this.usuario);
        sessionStorage.setItem("dinheiro", this.dinheiro);
        sessionStorage.setItem("conta", this.conta);
        sessionStorage.setItem("agencia", this.agencia);
    }

    cadastrartodos(usuario, dinheiro, conta, agencia) {
        this.usuario = usuario;
        this.dinheiro = Number(dinheiro);
        this.conta = conta;
        this.agencia = agencia;
        this.salvarDados();
    }

    exibirDados() {
        this.carregarDados();
    }

    depositar(valor) {
        this.carregarDados();
        this.dinheiro += Number(valor);
        this.salvarDados();
    }

    sacar(valor) {
        this.carregarDados();
        if (this.dinheiro < Number(valor)) {
            return false;
        }
        this.dinheiro -= Number(valor);
        this.salvarDados();
        return true;
    }
}