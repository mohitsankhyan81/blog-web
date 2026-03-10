# Blog App

This is a simple blog application that has a backend and a frontend.

---

# Blog App Backend

This is the backend of the blog website.

First, I set up the **server.js** file to create the server.  
Then I installed **express** and **dotenv**.

After that, I connected the database using **mongoose** and created the **schema**.

I also installed **validator** to check whether the email entered by the user is in the correct format or not.

Then I created the **register function** in the controller and set up the **router** for the register endpoint.

In the controller, I check whether the **name, email, phone, education, role, and password** fields are filled or not.  
If any field is missing, it shows the message **"Fill all the fields"**.

After that, I check whether the email already exists in **MongoDB**.  
If it already exists, it shows the message **"User is already logged in"**.

At the end, the data is saved in the database using:

```javascript
new data.save();
```

# Blog App Frontend

In the frontend, I created a **React** application using **Vite**.

First, the project is created using the following command:

npm create vite@latest
