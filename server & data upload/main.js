
function handleImg(){
    let target = document.getElementById("myInput");
    let reader = new FileReader();
    reader.onloadend = function() {
      console.log(reader.result.length);
      //console.log('RESULT: ' +  reader.result);



      fetch('https://kjj-hackathontest-7192023.glitch.me/', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: "kev.jelinek@gmail.com",
          promptID: "test" + Math.round(Math.random() * 1000),
          images: JSON.stringify(reader.result),
          postNum: 123,
        })
      }).then((res) => {
        console.log(res);
      })
    
    }
    reader.readAsDataURL(target.files[0]);

}



