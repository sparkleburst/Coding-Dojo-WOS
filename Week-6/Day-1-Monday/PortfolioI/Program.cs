// Max Gilhespy

var builder = WebApplication.CreateBuilder(args);

// this one is added inbetween var builder and var app
builder.Services.AddControllersWithViews();

var app = builder.Build();

// added this
// Our builder code
app.UseStaticFiles();
app.UseRouting();
app.UseAuthorization();

// changed below
// app.MapGet("/", () => "Hello World!");
// to this
app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

app.Run();
