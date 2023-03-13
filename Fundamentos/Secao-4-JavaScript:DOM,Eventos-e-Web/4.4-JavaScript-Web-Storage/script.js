window.onload = () => {
    const setBackGroundColor = (color) => {
        let content = document.querySelector(".content");
        content.style.backgroundColor = color;
        localStorage.setItem("backgroundColor", color);
    }

    const setFontColor = (color) => {
        let paragraphs = document.querySelectorAll(".paragraph")
        for (let index = 0; index < paragraphs.length; index += 1){
            paragraphs[index].style.color = color;
        }
        localStorage.setItem("fontColor", color);
    }

    const setFontSize = (size) => {
        let paragraphs = document.querySelectorAll(".paragraph");
        for(let index = 0; index < paragraphs.length; index += 1){
            paragraphs[index].style.fontSize = size ;
        }
    localStorage.setItem("fontSize", size);
    }

    const setLineHeight = (height) => {
        let paragraphs = document.querySelectorAll(".paragraph");
        for(let index = 0; index < paragraphs.length; index += 1){
            paragraphs[index].style.lineHeight = height;
       }
    localStorage.setItem("lineHeigth", height);
    }
    const setFontFamily = (family) => {
        let paragraphs = document.querySelector("paragraph");
        for(let index = 0; index < paragraphs.length; index += 1){
            paragraphs[index].style.fontFamily = family;
        }
        localStorage.setItem("fontFamily", family);
    }
    //////////////////
    let backgroundColorButtons = document.querySelectorAll("#background-color>button")
  for (let index = 0; index < backgroundColorButtons.length; index += 1) {
    backgroundColorButtons[index].addEventListener("click", (event) => {
      setBackGroundColor(event.target.innerHTML)
    })
    }
    let fontColorButtons = document.querySelectorAll("#font-color>button");
    for(let index = 0; index < fontColorButtons.length; index += 1){
        fontColorButtons[index].addEventListener("click",(event) => {
            setFontColor(event.target.innerHTML)
     })
    }
    let fontSizeButtons = document.querySelectorAll("#font-size>button")
  for (let index = 0; index < fontSizeButtons.length; index += 1) {
    fontSizeButtons[index].addEventListener("click", (event) => {
      setFontSize(event.target.innerHTML)
    })
    }
    let fontFamilyButtons = document.querySelectorAll("#font-family>button")
    for(let index = 0; index < fontFamilyButtons.length; index += 1){
        fontFamilyButtons[index].addEventListener("click", (event) => {
            fontFamilyButtons(event.target.innerHTML)
        })
    }
    const iniatilizer = () => {
        let backGroundColor = localStorage.getItem("backgroundColor")
        if(backGroundColor) setBackGroundColor(backGroundColor)
        let fontColor = localStorage.getItem("fontColor")
        if(fontColor) setFontColor.getItem(fontColor)
        let fontSize = localStorage.getItem("fontSize")
        if(fontSize) setFontSize.getItem(fontSize)
        let fontFamily = localStorage.getItem("fontFamily")
        if(fontFamily) setFontFamily.getItem(fontFamily)
    }
    iniatilizer();
}