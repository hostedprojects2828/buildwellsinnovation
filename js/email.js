import { sendMail } from './emailAdapter.js';

export const mailFormSubmission = () => {
  document.getElementById('sendMessage').addEventListener('submit', async (e) => {
    try {
      e.preventDefault();

      let name = document.getElementById('name');
      let phone = document.getElementById('phone');
      let email = document.getElementById('email');
      let message = document.getElementById('message');

      document.getElementById('name_val').innerHTML = '';
      document.getElementById('phone_val').innerHTML = '';
      document.getElementById('message_val').innerHTML = '';

      var templateParams = {
        from_name: name.value,
        email: email.value,
        from_phone: phone.value,
        message: message.value,
      };

      if (name.value.length < 2) {
        document.getElementById('name_val').innerHTML = 'Name should have min 2 letter.';
        return;
      }
      if (phone.value.length < 10) {
        document.getElementById('phone_val').innerHTML = 'Name should have min 2 letter.';
        return;
      }

      if (message.value.length < 3) {
        document.getElementById('message_val').innerHTML = 'Sorry, Please write a valid message.';
        return;
      }
      document.getElementById('mail_send').innerHTML = 'Sending...';

      let responseMail = await sendMail('service_i5xi90l', 'template_oy4oiad', templateParams);

      if (responseMail && responseMail.success) {
        document.getElementById('mail_send').innerHTML = responseMail.message;
        document.getElementById('name').value = '';
        document.getElementById('phone').value = '';
        document.getElementById('email').value = '';
        document.getElementById('message').value = '';
      } else {
        document.getElementById('mail_send').innerHTML = 'Sorry, Not able to forward mail.';
      }
    } catch (error) {
      console.log('Error in email', error);
    }
  });
};
