
using Microsoft.EntityFrameworkCore;
using ProjetoAPI.Data.Mapeamentos;
using ProjetoAPI.Models;

namespace ProjetoAPI.Data

{
    public class GreenContexto : DbContext
    {

        public GreenContexto(DbContextOptions<GreenContexto> options) : base(options)
        {

        }

        public DbSet<Produto> Produtos { get; set; }

        private DbSet<Usuario> usuarios;

        public DbSet<Usuario> GetUsuarios()
        {
            return usuarios;
        }

        public void SetUsuarios(DbSet<Usuario> value)
        {
            usuarios = value;
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)

        {
            modelBuilder.ApplyConfiguration(new ProdutoMap());
            modelBuilder.ApplyConfiguration(new UsuarioMap());

        }

        public DbSet<ProjetoGreensystem.Models.Usuario> Usuario { get; set; }
    }
}
