// const btns = document.querySelectorAll('button');
// for(btn of btns){
//     btn.addEventListener("click",()=>{console.log("button was click");});
// }
const btns = document.querySelectorAll('button');

btns.forEach(btn => {
    btn.addEventListener("click", () => {
        console.log("Button was clicked!");

        // Add a scale animation
        btn.style.transform = 'scale(1.1)';
        setTimeout(() => {
            btn.style.transform = 'scale(1)';
        }, 3000);

        // Change background color on click
        btn.style.backgroundColor = 'lightcoral';

        // Reset background color after a short delay
        setTimeout(() => {
            btn.style.backgroundColor = 'darkcyan';
        }, 3000);
    });
});
