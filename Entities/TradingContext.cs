using Microsoft.EntityFrameworkCore;

namespace TradingApp.Entities
{
    public class TradingContext : DbContext
    {
        public TradingContext(DbContextOptions<TradingContext> options) : base(options)
        {

        }

    }
}
