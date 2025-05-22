var builder = WebApplication.CreateBuilder(args);

// Enable CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll", policy =>
        policy.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());
});

builder.Services.AddControllers();

var app = builder.Build();

app.UseRouting();               // ✅ Add this
app.UseCors("AllowAll");
app.UseAuthorization();

app.UseEndpoints(endpoints =>   // ✅ Add this block
{
    endpoints.MapControllers();
});

app.Run();
