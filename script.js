
document.getElementById('admissionForm').addEventListener('submit',function(e){
e.preventDefault();
alert('Admission enquiry submitted successfully!');
});

window.addEventListener('scroll',()=>{
document.querySelectorAll('.card').forEach(c=>{
if(c.getBoundingClientRect().top<window.innerHeight-50){
c.style.opacity='1';
}
});
});
