const workers = [
    {
        id: 1,
        name: "Prajaal Adhikari",
        job: "Ethical Hacker",
        img: "url(prajal.jpg)",
        info: "Hi I am Prajal Adhikari and Cybersecurity Expert."
    },

    {
        id: 2,
        name: 'Manoj Baniya',
        job: "Web developer",
        img: "url(manoj.jpg)",
        info: "Hi I am front end web developer and designer from Jhapa."
    },

    {
        id: 3,
        name: "Kshitiz Gajurel",
        job: "Artificial Intelligence Engineer",
        img: "url(kshitiz.jpg)",
        info: "Hi I am Kshitiz Gajurel from Biratnagar a  artificial Intelligence, Machine Learning , and Data Science programs ofdriveh a job guarantee."
    },

    {
        id: 4,
        name: "Saurav Raj Niroula",
        job: "Civil Engineer",
        img: "url(saurav.jpg)",
        info: "Hi I am Saurav Raj Niroula and I am civil engineer with structural engineering speciality."
    },
]


//Taking target elements

// alert("working");

const naam = document.getElementById("name");
const job = document.getElementById("job");
const info = document.getElementById("info");
let image = document.getElementById("imageDiv");

const random = document.getElementById("random");
const previous = document.getElementById("previousBtn");
const next = document.getElementById("nextBtn");



let currentProfile = 0;
window.addEventListener('DOMContentLoaded',function(e)
{
    changeProfile(currentProfile);
})

function changeProfile(person) {

    const item = workers[person];
    naam.textContent = item.name;
    job.textContent = item.job;
    let imageURL = item.img;
    image.style.backgroundImage = imageURL;
    info.textContent = item.info;

}

random.onclick = function () {
    currentProfile = Math.floor(Math.random() * workers.length)
    changeProfile(currentProfile);
}

previous.addEventListener('click', function (e) {

    currentProfile--;
    if (currentProfile < 0) {
        currentProfile = workers.length - 1;
    }

    changeProfile(currentProfile);
})

next.addEventListener("click", function (e) {
    currentProfile++;
    if (currentProfile > workers.length - 1) {
        currentProfile = 0;
    }

    changeProfile(currentProfile);
})