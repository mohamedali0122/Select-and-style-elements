const spaceContainer =document.getElementById("space-container");

const title =document.createElement("h2");
title.textContent = "The Universe";
title.style.color = 'red'
spaceContainer.appendChild(title);

const planetsContainer =document.createElement("div");
spaceContainer.appendChild(planetsContainer);

const planetsListTitle =document.createElement("h3");
planetsListTitle.textContent = "Our Planets";
planetsListTitle.setAttribute("style", "background-color:red; text-size =20px;", "padding =10px");
spaceContainer.appendChild(planetsListTitle);

const planetsList=document.createElement("ul");
planetsList.innerHTML = "<li>mars</li> <li>venus</li> <li>erith</li>"
spaceContainer.appendChild(planetsList);

const universeImg = document.createElement("img");
universeImg.src ="data:image/jpeg;base64,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"
spaceContainer.appendChild(universeImg);
