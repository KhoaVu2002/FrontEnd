document.getElementById('form').addEventListener('submit', function(e) {
    e.preventDefault();

    const dob = new Date(document.getElementById('dob').value);
    const today = new Date();

    let age_year = today.getFullYear() - dob.getFullYear();
    let age_month = today.getMonth() - dob.getMonth();
    let age_day = today.getDate() - dob.getDate();

    if (age_day < 0) {
        const previousMonth = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
        age_day += previousMonth;
        age_month--;
    }

    if (age_month < 0) {
        age_month += 12;
        age_year--;
    }

    document.getElementById('message').textContent = `You are ${age_year} years, ${age_month} months and ${age_day} days.`;
});
