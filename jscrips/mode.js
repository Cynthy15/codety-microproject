
db.collection("student").where("ItemType", "==", "student").where("Program", "==", "AR")
.get()
.then(
    function(querySnapshot){
        querySnapshot.forEach(function(doc){
            dataObj = doc.data()
            console.log(dataObj)
            buildTable(dataObj)
            function buildTable(data){
                var table = document.getElementById('tbody1')
        
                for (var i = 0; i < data.length; i++){
                    var row = `<tr>
                                    <td>${data[i].RegNo}</td>
                                    <td>${data[i].Name}</td>
                                    <td>${data[i].Email}</td>
                                    <td>${data[i].LaptopName}</td>
                                    <td>${data[i].serialNumber}</td>
                                    
                              </tr>`
                    table.innerHTML += row
                }
            }
          })
      } )
      .catch(err=>{
        console.log(`Error: ${err}`)
    });