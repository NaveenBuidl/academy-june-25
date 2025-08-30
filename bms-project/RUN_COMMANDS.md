# Standard Commands for Running Client and Server

## Client (React)

### Development Mode
```
cd client
npm run dev
```
- Visit: http://localhost:5173

### Production Build
```
cd client
npm run build
```
- Output: `client/dist/`

---

## Server (Express Backend)

### Start Server
```
cd server
node server.js
```
- Or use `npm start` if available in `package.json`.

### After Changing Backend Code or .env
- Stop the server (Ctrl+C) and run `node server.js` again.

---

## Typical Workflow
1. Make changes in client or server code.
2. For client: use `npm run dev` for development, or `npm run build` for production.
3. For server: restart with `node server.js` after changes.
4. For full production test: build client, then run server and visit http://localhost:5000

---

Keep this file for quick reference!


Here are specific steps to test all major flows in your app before deployment:

1. Login Flow
Go to your app in the browser (e.g., http://localhost:5000 or http://localhost:5173).
Click “Login.”
Enter valid credentials for an existing user.
Click “Login” and verify you are redirected to the dashboard or home page.

2. Registration Flow
Click “Register” or “New User? Register Here.”
Fill in the registration form with a new email and password.
Submit the form.
Check for a success message or automatic login.
(If email verification is required, check your inbox for the verification email.)

3. Forgot/Reset Password Flow
Click “Forgot Password?”
Enter your registered email.
Check your email inbox for an OTP or reset link.
Enter the OTP or follow the link to reset your password.
Set a new password and verify you can log in with it.

4. Booking Flow
Log in as a user.
Browse movies and select a show.
Choose seats and proceed to book.
Complete the booking process (fill in any required details).
Check for a booking confirmation message or email.

5. Payment Flow (Stripe)
During the booking process, proceed to payment.
Enter Stripe test card details (e.g., 4242 4242 4242 4242, any future date, any CVC).
Complete the payment.
Verify you get a payment success message and booking confirmation.

6. Email Flow
For registration, password reset, or booking, check your email inbox (and spam folder) for emails sent by your app.
Verify the content and links in the emails.

7. Admin/Partner Flows (if applicable)
Log in as an admin or partner.
Test adding, editing, and deleting movies, theatres, or shows.
Verify changes appear for users.
Tips:

Use different browsers or incognito windows to test multiple users.
Use test data and Stripe test cards (never real card numbers).
Check both frontend and backend logs for errors.
Let me know if you want a checklist or want to automate any of these tests!