using System.Threading.Tasks;
using DatingApp.API.Models;

namespace DatingApp.API.Data
{

    public interface IAuthRepository
    {
        //registering user
        Task<User> Register(User user, string Password);
        //login user to API
        Task<User> Login(string username, string password);
        //check if user exists
        Task<bool> UserExists(string username);

    }
}