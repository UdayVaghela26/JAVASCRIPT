function Color() {
    let letters = "0123456789ABCDEF"
    let color = "#"
    for (let i = 0; i < 6; i++) 
    {
      color = color + letters[Math.floor(Math.random() * 16)]
    }
    return color
}

function changeBackground() 
{
    let color1 = Color()
    let color2 = Color()
    document.body.style.background = `linear-gradient(45deg, ${color1}, ${color2})`
}
document.getElementById("changeBackground").addEventListener("click", changeBackground)