
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using ProjetoAPI.Models;


namespace ProjetoAPI.Data.Mapeamentos
{
    public class ProdutoMap : IEntityTypeConfiguration<Produto>

    {
        public void Configure(EntityTypeBuilder<Produto> builder)
        {
            builder.HasKey(t => t.Id);

            builder.Property(t => t.Nome)
                .HasMaxLength(150)
                .IsRequired();

            builder.Property(t => t.Quantidade)
            .HasMaxLength(150)
            .IsRequired();

            builder.Property(t => t.Preco)
            .HasMaxLength(150)
            .IsRequired();

            builder.ToTable("Produto");

        }
    }
}
