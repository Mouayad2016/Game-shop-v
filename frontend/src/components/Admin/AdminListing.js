   
   
   
   
   
   const Removefuntion=(id) => {
        if(window.config("Do you want to remove?")) {
            fetch("http://localhost:3000/admin/review/"+ id,{
                method:"DELETE"
            }).then((res)=>{
                alert("Removed succeefully.")
                window.location.reload();
            }).catch((err)=>{
                console.log(err.message)
            })
        }
    }
