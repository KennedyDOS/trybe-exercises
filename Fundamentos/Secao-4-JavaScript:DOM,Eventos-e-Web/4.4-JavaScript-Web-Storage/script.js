window.onload = () => {
    /// Função para mudar a cor de fundo.
    const setBackGroundColor = (color) => {
        let content = document.querySelector(".content");
        content.style.backgroundColor = color;
        localStorage.setItem("backgroundColor", color);
    }
    /// Função para mudar a cor da fonte.
    const setFontColor = (color) => {
        let paragraphs = document.querySelectorAll(".paragraph")
        for (let index = 0; index < paragraphs.length; index += 1){
            paragraphs[index].style.color = color;
        }
        localStorage.setItem("fontColor", color);
    }
    /// Função para mudar o tamanho da letra.
    const setFontSize = (size) => {
        let paragraphs = document.querySelectorAll(".paragraph");
        for(let index = 0; index < paragraphs.length; index += 1){
            paragraphs[index].style.fontSize = size ;
        }
    localStorage.setItem("fontSize", size);
    }
    /// Fimção para colocar espaçamento entre as linhas.
    const setLineHeight = (height) => {
        let paragraphs = document.querySelectorAll(".paragraph");
        for(let index = 0; index < paragraphs.length; index += 1){
            paragraphs[index].style.lineHeight = height;
       }
    localStorage.setItem("lineHeigth", height);
    }
    /// Função para alterar a fonte das letras.
    const setFontFamily = (family) => {
        let paragraphs = document.querySelector("paragraph");
        for(let index = 0; index < paragraphs.length; index += 1){
            paragraphs[index].style.fontFamily = family;
        }
        localStorage.setItem("fontFamily", family);
    }
    /// Criando evento para o botão de fundo de cor.
    let backgroundColorButtons = document.querySelectorAll("#background-color>button")
    for (let index = 0; index < backgroundColorButtons.length; index += 1) {
        backgroundColorButtons[index].addEventListener("click", (event) => {
            setBackGroundColor(event.target.innerHTML)
    })
    }
    /// Criando evento para o botão da cor da fonte.
    let fontColorButtons = document.querySelectorAll("#font-color>button");
    for(let index = 0; index < fontColorButtons.length; index += 1){
        fontColorButtons[index].addEventListener("click",(event) => {
            setFontColor(event.target.innerHTML)
     })
    }
    /// Criando evento para o botão de espaçamentos de linhas.
    let lineHeightButtons = document.querySelectorAll("#line-height>button")
    for (let index = 0; index < lineHeightButtons.length; index += 1) {
        lineHeightButtons[index].addEventListener("click", (event) => {
            setLineHeight(event.target.innerHTML)
    })
    }
    /// Criando evento para o botão de tamanho das fontes.
    let fontSizeButtons = document.querySelectorAll("#font-size>button")
    for (let index = 0; index < fontSizeButtons.length; index += 1) {
        fontSizeButtons[index].addEventListener("click", (event) => {
            setFontSize(event.target.innerHTML)
    })
    }
    /// Criando evento para o botão da familia da fonte.
    let fontFamilyButtons = document.querySelectorAll("#font-family>button")
    for(let index = 0; index < fontFamilyButtons.length; index += 1){
        fontFamilyButtons[index].addEventListener("click", (event) => {
            setFontFamily(event.target.innerHTML)
        })
    }
    /// Criando função de cadeias de "if" para checar as funções da página.
    const iniatilizer = () => {
        let backGroundColor = localStorage.getItem("backgroundColor")
        if(backGroundColor) setBackGroundColor(backGroundColor);
        let fontColor = localStorage.getItem("fontColor")
        if(fontColor) setFontColor(fontColor);
        let fontSize = localStorage.getItem("fontSize")
        if(fontSize) setFontSize(fontSize);
        let fontFamily = localStorage.getItem("fontFamily")
        if(fontFamily) setFontFamily(fontFamily)
        let lineHeight = localStorage.getItem("lineHeigth")
        if(lineHeight) setLineHeight(lineHeight)
    }   
    iniatilizer();
}