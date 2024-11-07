document.querySelectorAll('.accordion').forEach(question => {
question.addEventListener('click',() =>{
    const content = question.nextElementSibling;
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
})    
});