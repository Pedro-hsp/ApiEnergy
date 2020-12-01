namespace ProjetoAPI.Models
{
    public class Usuario : Base
    {
        public string Nome { get; set; }

        public string Login { get; set; }

        public string Senha { get; set; }

        public string Categoria { get; set; }
    }
}
