using Microsoft.AspNetCore.Mvc;

namespace FirstWeb.Controllers;

public class HomeController : Controller
{
    // this is called an attribute
    [HttpGet("")]
    // attach this route to a method

    public string Index()
    {
        return "Index page";
    }
}