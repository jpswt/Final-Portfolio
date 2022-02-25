const formResults = document.getElementById("results")

new URLSearchParams(window.location.search).forEach((value, name) => {
    formResults.append(`${name} : ${value}`)
    formResults.append(document.createElement("br"))
})