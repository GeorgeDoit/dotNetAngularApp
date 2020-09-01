using Microsoft.AspNetCore.Http;

namespace DatingApp.API.Helpers
{
    //we dont need to create a new instance of this class when we want to use one of its methods
    public static class Extensions
    {
        public static void AddApplicationsError(this HttpResponse response, string message)
        {
            response.Headers.Add("Application-Error", message);
            response.Headers.Add("Access-Control-Expose-Headers", "Application-Error");
            response.Headers.Add("Access-Control-Allow-Origin", "*");

        }
    }
}