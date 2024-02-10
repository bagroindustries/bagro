document.getElementById('customerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
  
    const customerInfo = {
      name: name,
      email: email,
      phone: phone
    };
  
    console.log('New customer information:', customerInfo);
  
    document.getElementById('customerForm').style.display = 'none';
    const successMessage = document.createElement('p');
    successMessage.textContent = 'Thank you for submitting your information!';
    document.getElementById('customerForm').parentNode.appendChild(successMessage);
  });