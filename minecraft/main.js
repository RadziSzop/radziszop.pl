const onlineStatus = document.querySelector(".online-status")
const ipStatus = document.querySelector(".ip-status")
const versionStatus = document.querySelector(".version-status")
const hostnameStatus = document.querySelector(".hostname-status")
const playerStatus = document.querySelector(".player-status")
const playersStatus = document.querySelector(".players-status")
const copyButton = document.querySelector(".copyButton")
let apiData
fetch("https://api.mcsrvstat.us/2/130.61.25.233:25565")
    .then((response) => response.json())
    .then((response) => {
        apiData = response
        console.log(apiData)
        if(apiData.online){
            onlineStatus.textContent = "Online"
            ipStatus.textContent = apiData.ip
            versionStatus.textContent = apiData.version
            onlineStatus.style.backgroundColor = "green";
            playersStatus.textContent = `${apiData.players.online}/${apiData.players.max}`
            for(let i = 0; i < apiData.players.list.length; i++ )
            {
                let playerOnList = document.createElement("p")
                playerOnList.textContent =`- ${apiData.players.list[i]}`
                playerOnList.classList.add("blacbg")
                playerStatus.appendChild(playerOnList)
            }

            
        }
        else{
            onlineStatus.textContent = "Offline"
            onlineStatus.style.backgroundColor = "red"; 
            
        }
        
    })
    copyButton.addEventListener("click", copyText)

function copyText() {
    navigator.clipboard.writeText(ipStatus.textContent)
    copyButton.classList.add("copyButtonClick")
    setTimeout(() => {  copyButton.classList.remove("copyButtonClick") }, 175);
    
}

    