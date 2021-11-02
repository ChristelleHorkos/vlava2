fetch('https://hidden-chamber-64541.herokuapp.com/TeamMembers')
   .then(response => response.json())
      .then(json =>{
   var OriginalContent=` <div >
   <div class="member">
     <div class="member-img">
        <img src="ZZZZ" class="img-fluid HadyImg" alt="">
        <div class="social">
          <a href=""><i class="bi bi-twitter"></i></a>
          <a href=""><i class="bi bi-facebook"></i></a>
          <a href=""><i class="bi bi-instagram"></i></a>
          <a href=""><i class="bi bi-linkedin"></i></a>
        </div>
      </div>
      <div class="member-info">
        <h4>XXXX</h4>
        <span>YYYY</span>
      </div>
    </div>
  </div>`
//      var Myrow=document.getElementById("Myrow")
//      var myHeaders = new Headers();
// myHeaders.append("Content-Type", "application/json");

// var raw = JSON.stringify({
// "name": document.getElementById("Name").value,
// "position": document.getElementById("Position").value,
// "url": document.getElementById("url").value,

// })
     for (let i = 0; i < json.length; i++) {
 var mydiv=document.createElement("div")
 mydiv.className="col-lg-3 col-md-6 d-flex align-items-stretch"
 currentcontent=OriginalContent
 currentcontent=currentcontent.replace('XXXX',json[i].name)
 currentcontent=currentcontent.replace('YYYY',json[i].position)
 currentcontent=currentcontent.replace('ZZZZ',json[i].url)
 mydiv.innerHTML=currentcontent
 Myrow.appendChild(mydiv)
     }}
       ) 
