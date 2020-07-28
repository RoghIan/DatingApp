using System.ComponentModel.DataAnnotations;

namespace DatingApp.API.DTO
{
    public class UserRegisterDto
    {
        [Required]
        public string Username { get; set; }
        [Required]
        [StringLength(16, MinimumLength = 6)]
        public string Password { get; set; }

    }
}