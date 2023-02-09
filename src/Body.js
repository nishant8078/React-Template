import React from 'react'

function Body() {

  let a;
        let date;
        let time;
        const options = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        };
        setInterval(() => {
            a = new Date();
            date = a.toLocaleDateString(undefined, options);
            time = a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds();
            document.getElementById('time').innerHTML = time + "<br>on " + date;
        }, 1000);


  return (

    <div className='body'>
      <h1 > <span>INNOVATION DIGITAL</span> <br /> TECHNOLOGY</h1>
      <p>everything we do is the consumer, imagination and you.</p>

        <div class="jumbotron">
            <h1 class="display-4" style={{color: "white", fontWeight: 300, fontSize:50}}>Current time Is: <span id="time" style={{color: "red", fontWeight: 100, fontSize:30}}></span></h1>
        </div>
    </div>
    
    
  )
}

export default Body
