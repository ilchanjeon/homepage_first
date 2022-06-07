document.querySelector("#gotohome").onclick = function() {
    location.href='./index.html'
}

document.querySelector("#checkmem").onclick = function() {
    let keys = Object.keys(localStorage);
    
    for(let key of keys) {
        const arr = localStorage.getItem(key);
        // alert(`${key}: ${arr}`);
        const info = JSON.parse(arr);
        console.log(key);
        
        const tbody = document.querySelector('#tbody');
        
        tbody.innerHTML += `<tr>
<td>${key}</td>
<td>${info.pwd}</td>
<td>${info.name}</td>
<td>${info.phone}</td>
</tr>`;



        // const row = tbody.insertRow(tbody.rows.length);
        // const ceil1 = row.insertceil(0);
        // const ceil2 = row.insertceil(1);
        // const ceil3 = row.insertceil(2);
        // const ceil4 = row.insertceil(3);
        
        // ceil11.innerHTML += key.length;
        // ceil12.innerHTML += key;
        // ceil13.innerHTML += info.pwd;
        // ceil14.innerHTML += info.name;

    }

    
}
