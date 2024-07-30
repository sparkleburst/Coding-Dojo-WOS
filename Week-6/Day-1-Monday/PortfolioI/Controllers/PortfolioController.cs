// Max Gilhespy
// Worked with Irina and Hoda

// This brings all the MVC features we need to this file
using Microsoft.AspNetCore.Mvc;

namespace PortfolioI.Controllers;
public class PortfolioController : Controller
{
    // This will go to "localhost:5XXX"
    [HttpGet("")]
    // [Route("")] route has been included with HttpGet
    public string Index()
    {
        return "This is my index!";
    }

    // This will go to "localhost:5XXX/projects"
    [HttpGet("projects")]
    // [Route("")] route has been included with HttpGet
    public string Projects()
    {
        return "These are my projects";
    }

    // This will go to "localhost:5XXX/contacts"
    [HttpGet("contact")]
    // [Route("")] route has been included with HttpGet
    public string Contact()
    {
        return "This is my Contact!";
    }
}