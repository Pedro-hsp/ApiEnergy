namespace ProjetoAPI.Models
{
    public class Produto : Base
    {
        public string Nome { get; set; }

        public int Quantidade { get; set; }

        public int Preco { get; set; }

        public string Fornecedor { get; set; }
    }
}
