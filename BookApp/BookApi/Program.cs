var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll", policy =>
        policy.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());
});

builder.Services.AddControllers();

var app = builder.Build();

app.UseRouting();  
app.UseCors("AllowAll");
app.UseAuthorization();

app.UseEndpoints(endpoints => 
{
    endpoints.MapControllers();
});

app.Run();
