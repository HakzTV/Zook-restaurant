const doc = document;
const menuOpen = doc.querySelector(".menu");
const menuClose = doc.querySelector(".close");
const overlay = doc.querySelector(".overlay");

menuOpen.addEventListener("click", () => {
  overlay.classList.add("overlay--active");
});

menuClose.addEventListener("click", () => {
  overlay.classList.remove("overlay--active");
});




let tl = gsap.timeline({
  defaults:{ease: "power2.out"}
});
tl.to(".slider", {y:"-100%", duration: 1.2})
tl.to(".hero", {y:"0", duration: 1.2}, "-=1")
tl.to(".cool", {y:"0", duration: 1.2})

tl.to(".main-txt", {y:"0", duration: 0.8})
tl.to(".sub-txt", {y:"0", duration: 0.6})
tl.to(".cta-main", {y:"0", duration: 0.4})

tl.fromTo(".wrapper", {opacity: 0}, {opacity: 1, duration:1})

AOS.init({
  offset: 120, 
  delay: 0,
  duration: 1200, 
  easing: 'ease', 
  once: true, 
  mirror: false, 
  anchorPlacement: 'top-bottom', 
  // disable: "mobile"
});

// Updating the code per what file is uploaded
const input = document.getElementById('input-file');
const preview = document.getElementById('preview');

input.style.opacity = 0;
input.addEventListener('change', updateImageDisplay);

const fileTypes = [
  "application/pdf"
];

function validFileType(file) {
    console.log(file.type);
  return fileTypes.includes(file.type);
}

function updateImageDisplay() {
  while(preview.firstChild) {
    preview.removeChild(preview.firstChild);
  }

  const curFiles = input.files;
  if (curFiles.length === 0) {
    const para = document.createElement('p');
    para.textContent = 'No files currently selected for upload';
    preview.appendChild(para);
  } else {
    const list = document.createElement('ol');
    preview.appendChild(list);

    for (const file of curFiles) {
      const listItem = document.createElement('li');
      const para = document.createElement('p');
      if (validFileType(file)) {
        para.textContent = `File name ${file.name}, file size ${returnFileSize(file.size)}.`;
        //const image = document.createElement('img');
        //image.src = URL.createObjectURL(file);
        //listItem.appendChild(image);
        listItem.appendChild(para);
      } else {
        para.textContent = `File name ${file.name}: Not a valid file type. Update your selection.`;
        listItem.appendChild(para);
      }

      list.appendChild(listItem);
    }
  }
}

function returnFileSize(number) {
  if (number < 1024) {
    return `${number} bytes`;
  } else if (number >= 1024 && number < 1048576) {
    return `${(number / 1024).toFixed(1)} KB`;
  } else if (number >= 1048576) {
    return `${(number / 1048576).toFixed(1)} MB`;
  }
}


