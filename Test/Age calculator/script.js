document.getElementById('form').addEventListener('submit', function(e){
    e.preventDefault();

    const dob = new Date(document.getElementById('dob').value);
    const today = new Date();
    
    let age_year = today.getFullYear() - dob.getFullYear();
    let age_month = today.getMonth() - dob.getMonth();

    if(age_month < 0){
        age_year--;
        age_month += 12;
    }

    document.getElementById('message').textContent = `You are ${age_year} years and ${age_month} months`

})