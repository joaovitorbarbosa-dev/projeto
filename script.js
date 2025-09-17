function toggleMode(){
    const html = document.documentElement
    html.classList.toggle("light")

    //pegar a teg img
    const img = document.querySelector("#profile img")

    //substituir a imagem
    //se tiver light mode, adicionar a imagem light
     if(html.classList.contains("light")) {
        img.setAttribute("src", "profile.png" )
         }
        
    //se não tiver light mode, manter a imagem normal
    else{
        img.setAttribute("src", "profile.png" )

    }




}