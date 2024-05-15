//



let filterarray = [];

// gallery card array

let galleryarray = [
    {
        id: 1,
        name: "Empaque normal A414A",

        src: "mifolder/1024empaque.jpg",

        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, delectus."
    },
    {
        id: 2,
        name: "Mango superior",
        src: "mifolder/1024mango.jpg",

        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, delectus."
    },
    {
        id: 3,
        name: "Válvula",

        src: "mifolder/1024tapa.jpg",

        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, delectus."
    },
    {
        id: 4,
        name: "Mango inferior",
        src: "mifolder/1024peque.jpg",

        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, delectus."
    },
    {
        id: 5,
        name: "headphone",
        src: "mifolder/1024peque.jpg",

        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, delectus."
    },
    {
        id: 6,
        name: "smart watch",
        src: "mifolder/1024peque.jpg",

        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, delectus."
    }
];



showgallery(galleryarray);


// create function to show card


function showgallery(curarra) {
    document.getElementById("card").innerText = "";
    for (var i = 0; i < curarra.length; i++) {
        document.getElementById("card").innerHTML += `
        <div class="col-md-4 mt-3" >
           <div class="card p-3 ps-5 pe-5">
           <h4 class="text-capitalize text-center" style="font-size: 18px;font-family: 'Asap'; color: #000000">${curarra[i].name}</h4>
               

          <img src="${curarra[i].src}" width="100%" height="100%"/>
          <p class="mt-2">${curarra[i].desc}</p>
         
       
          </div>
          </div>
       `
    }

}

// For Live Searching Product

document.getElementById("myinput").addEventListener("keyup", function () {
    let text = document.getElementById("myinput").value.toLowerCase();

    filterarray = galleryarray.filter(function (a) {
        if (a.name.toLowerCase().includes(text)) {
            return a;
        }
    });

    if (this.value == "") {
        showgallery(galleryarray);
    }
    else {
        if (filterarray.length == 0) {
            document.getElementById("para").style.display = 'block'
            document.getElementById("card").innerHTML = "";
        }
        else {
            showgallery(filterarray);
            document.getElementById("para").style.display = 'none'
        }
    }
});

//video



(function () {
    var youtube = document.querySelectorAll(".video");

    for (var i = 0; i < youtube.length; i++) {
        var source = "https://img.youtube.com/vi/" + youtube[i].dataset.embed + "/hqdefault.jpg";
        var image = new Image();
        image.src = source;
        image.addEventListener("load", function () {
            youtube[i].appendChild(image);
        }(i));

        youtube[i].addEventListener("click", function () {
            var iframe = document.createElement("iframe");
            iframe.setAttribute("frameborder", "0");
            iframe.setAttribute("allowfullscreen", "");
            iframe.setAttribute("src", "https://www.youtube.com/embed/" + this.dataset.embed + "?rel=0&showinfo=0&autoplay=1");

            this.innerHTML = "";
            this.appendChild(iframe);
        });
    };
})();


