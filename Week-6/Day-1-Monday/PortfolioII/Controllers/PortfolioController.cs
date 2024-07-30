// Max Gilhespy
// Worked with Irina and Hoda

// This brings all the MVC features we need to this file
using Microsoft.AspNetCore.Mvc;

namespace PortfolioII.Controllers;
public class PortfolioController : Controller
{
    // for the index page at "localhost:5XXX"
    // handling the request
    [HttpGet("")]

    // this connects the controller in Controllers to the view in Views
    // it is middlewear - it comes between the request and the response
    // it is an action method
    public ViewResult Index()
    {
        // we are returning the index view, we will create the view in index
        return View("Index");
    }

    // This will go to "localhost:5XXX/projects"
    [HttpGet("Projects")]
    // [Route("projects")] route has been included with HttpGetS
    public ViewResult Projects()
    {
        return View("Projects");
    }

    // This will go to "localhost:5XXX/contacts"
    [HttpGet("contact")]
    // [Route("contact")] route has been included with HttpGet
    public ViewResult Contact()
    {
        return View("Contact");
    }
}