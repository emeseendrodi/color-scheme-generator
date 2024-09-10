const schemeTitle = document.getElementById("scheme-title");
const colorPicker = document.getElementById("color-picker");

document.getElementById("get-scheme-btn").addEventListener("click", getColorScheme);

function getColorScheme(){
    const color = colorPicker.value.replace(/^#/, "");
    const colorScheme = schemeTitle.value;
    const colorCount = 5;

    fetch(`https://www.thecolorapi.com/scheme?hex=${color}&mode=${colorScheme}&count=${colorCount}`)
        .then(res => res.json())
        .then(data => {
            let colors = [];
            for (let i = 0; i < data.colors.length; i++) {
                colors.push(data.colors[i].hex.value);
            }
            
            let html = "";
            colors.forEach(function(color) {
                html += `
                    <div class="color-item">
                        <div class="color-block" style="background-color:${color};"></div>
                        <p class="color-item-hex-code">${color}</p>
                    </div>
                `;
            });
            document.getElementById("color-palette-container").innerHTML = html;
        });
}
