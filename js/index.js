import { mailFormSubmission } from './email.js';
// import { sendMail, testModule } from './emailAdapter.js';

mailFormSubmission();

document.getElementById('whatsappButton').addEventListener('click', async (e) => {
  var phoneNumber = '447308410720'; // Replace with actual number
  var message = 'Hello,\nI’d like to inquire about availability, rates, and amenities for a stay. Please provide details. \nThank you!';
  var url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
});
