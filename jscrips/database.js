
 
  const  AddData = ()=>{
    
    const Name = document.getElementById("Name").value;
    const  email = document.getElementById("email").value;
    const Reg = document.getElementById("regNo").value;
    const  depart = document.getElementById("department").value;
    const  lap = document.getElementById("lapName").value;
    const  serial = document.getElementById("serialNumber").value;

    
    console.log({
        Name, email, Reg, depart, lap, serial
    })


    db.collection("student").doc().set({ 
        Reg ,
        Name ,
        email,
        lap,
        serial
    })
      .then(()=>{
          alert("data inserted successfully"); 
    
      })
      .catch((error)=>{
          alert("data not inserted successfully");
          console.log(error);
  
      })

      const register = document.getElementById("insert");
    
  }
