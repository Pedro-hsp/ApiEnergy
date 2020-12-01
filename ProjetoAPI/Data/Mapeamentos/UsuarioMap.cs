
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using ProjetoAPI.Models;


namespace ProjetoAPI.Data.Mapeamentos
{
    public class UsuarioMap : IEntityTypeConfiguration<Usuario>
    {

        public void Configure(EntityTypeBuilder<Usuario> builder)
        {
            builder.HasKey(t => t.Id);

            builder.Property(t => t.Nome)
                .HasMaxLength(150)
                .IsRequired();

            builder.Property(t => t.Login)
            .HasMaxLength(150)
            .IsRequired();

            builder.Property(t => t.Senha)
            .HasMaxLength(150)
            .IsRequired();

            builder.Property(t => t.Categoria)
          .HasMaxLength(150)
          .IsRequired();

            builder.ToTable("Usuario");

        }
    }
}
