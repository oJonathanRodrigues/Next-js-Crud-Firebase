import Cliente from "./Cliente";

export default interface ClienteRepositorio{
    salvar(Cliente: Cliente): Promise<Cliente>
    excluir(cliente: Cliente): Promise<void>
    obterTodos(): Promise<Cliente[]>
}