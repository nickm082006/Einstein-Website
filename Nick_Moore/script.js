async function getPapers() {
    try {
        const response = await fetch("https://upadhayay.github.io/db.json");
        const data = await response.json();
        console.log(data);


        const papers = data.books;
        const parent = document.getElementById("paperParent");

        for (let i = 0; i < papers.length; i++) {
            const paper = document.createElement("li");
            paper.classList.add("paper");
            const paperTitle = document.createElement("h3");
            paperTitle.textContent = "Title: " +papers[i].title;

            const year = document.createElement("p");
            year.textContent = "Year: " + papers[i].year;

            if(papers[i].published === true) {
                papers[i].published = "Yes";
            } else {
                papers[i].published = "No";
            }

            const published = document.createElement("p");
            published.textContent = "Published: " + papers[i].published;

            paper.appendChild(paperTitle);
            paper.appendChild(year);
            paper.appendChild(published);

            parent.appendChild(paper);
        }
    }
    catch(error) {
        console.log("Error in fetch;");
    }
}
getPapers();

const imageArray = [
    {
        image: "images/e1.jpg",
        caption: "Young Einstein posing for a professional photo."
    },
    {
        image: "images/e2.jpg",
        caption: "Young Einstein standing outside posing for a photo."
    },
    {
        image: "images/e3.jpg",
        caption: "Einstein explaining his theories on a chalkboard."
    },
    {
        image: "images/e4.jpg",
        caption: "Einstein later in life relaxing with a pipe in his mouth."
    },
    {
        image: "images/e5.jpg",
        caption: "Einstein much later in life, sitting in his office in deep thought."
    }

];

let number = 0;
const image = document.getElementById("image");
const caption = document.getElementById("caption");

function display() {
    image.src = imageArray[number].image;
    caption.textContent = imageArray[number].caption;
};

document.getElementById("next").addEventListener("click", function() {
    number++;
    if (number >= imageArray.length) {
        number = 0;
    }
display();
});

document.getElementById("back").addEventListener("click", function () {
number--;
if (number < 0) {
    number = imageArray.length - 1;
}

display();

});

display();