document.addEventListener("DOMContentLoaded", function(){
    const counter = document.getElementById("counter");
    let counterTimer = window.setInterval(numberIncrementor, 1000);
    const minus = document.getElementById("minus");
    const pause = document.getElementById("pause");
    const plus = document.getElementById("plus");
    const likeList = document.querySelector("ul.likes");
    const heart = document.getElementById("heart");
    const comment = document.getElementById("submit");

    function numberIncrementor() {
        counter.innerText++;
    }

    pause.addEventListener("click", () => {
        if (pause.innerText === "pause"){
            clearInterval(counterTimer);
            minus.disabled = true
            plus.disabled = true
            heart.disabled = true
            submit.disabled = true
            pause.innerText = "resume"
          }
          else {
            minus.disabled = false
            plus.disabled = false
            heart.disabled = false
            submit.disabled = false
            pause.innerText = "pause"
            setInterval(numberIncrementor, 1000)
          }
        });

        minus.addEventListener("click", () => {
            if(counter.innerText > 0) {
                counter.innerText--
              }
        });
    
        plus.addEventListener("click", () => {
            counter.innerText++
        });

        heart.addEventListener("click", (e) => {
            let likeItem = document.createElement("li");
            let num = counter.innerText + " has been liked 1 time";
            likeItem.innerText = num;
            likeList.appendChild(likeItem);
            console.log(e);
        });
    
        comment.addEventListener("click", (e) =>{
            e.preventDefault();
            let comment = document.createElement("p");
            comment.innerText = document.getElementById("comment-input").value;
            document.getElementById("list").appendChild(comment);
        });

    });