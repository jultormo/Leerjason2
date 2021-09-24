console.log('Correcto')

document.querySelector('#boton').addEventListener('click',get_dates);


function get_dates(){
    console.log("En la función")

    const xhttp = new XMLHttpRequest();
    xhttp.open('GET','https://jsonplaceholder.typicode.com/photos',true);
    xhttp.send();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            //console.log(this.responseText);

            let inputValue = document.getElementById("cant_datos").value;
            let datos = JSON.parse(this.responseText);
            console.log(datos);

            let conten = document.querySelector('#contenido');
            conten.innerHTML = '';
            var newArr = datos. slice(0, inputValue);

            for(let item of newArr){
                //console.log(item.id);
                conten.innerHTML += `
                <tr> 
                    <th>
                        ${item.id}
                    </th>
                    <th>
                        ${item.title}
                    </th>
                    <th>
                    <img src="${item.url}" style = "width: 50px; height: 50px;"> 
                    </th>
                    

                </tr>
                `

            }
        }
    }
}