let searchProduct=(str)=>{
    let xhttp = new XMLHttpRequest()
    xhttp.onreadystatechange = function(){
        if(this.readyState==4 && this.status==200){
            let jsonObj = JSON.parse(this.responseText)
            let tableBody = document.getElementById("tblbody")

            tableBody.innerHTML=""
            jsonObj.forEach((element,index) => {
                let row = document.createElement("tr")
                let col = document.createElement("td")
                col.innerHTML=(index+1)
                row.appendChild(col)

                col = document.createElement("td")
                col.innerHTML=element.deptname
                row.appendChild(col)

                col=document.createElement("td")
                col.innerHTML="<a href= '/deleteProd?id=id"+element.id+"'>DELETE</a>"
                row.appendChild(col)

                col=document.createElement("td")
                col.innerHTML="<a href= '/update?id=id&name=name&category=category"+element.deptname+"&id="+element.deptid+"'>UPDATE</a>"
                row.appendChild(col)

                tableBody.appendChild(row)
            });
        }
    }
    xhttp.open("get","/searchDeptByName?name="+str,true)
    xhttp.send();
}