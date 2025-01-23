let existingPassword = "uday123";

document.getElementById("passwordForm").addEventListener("submit", function (e) 
{
    e.preventDefault();

    let oldPassword = document.getElementById("oldPassword").value;
    let newPassword = document.getElementById("newPassword").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let message = document.getElementById("message");

    if (oldPassword !== existingPassword) 
    {
        message.textContent = "Error: Old password is incorrect!";
    } 
    else if (newPassword.length <= 6) 
    {
        message.textContent = "Error: New password must be at least 6 characters!";
    } 
    else if (newPassword !== confirmPassword) 
    {
        message.textContent = "Error: New passwords do not match!";
    } 
    else 
    {
        message.textContent = "Password Updated Succesfully!";
    }
});
