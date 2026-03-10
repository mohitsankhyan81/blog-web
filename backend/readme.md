# Blog App Backend

This is the backend of a blog website.

First, I set up the **server.js** file to create the server.  
Then I install **express** and **dotenv**.

After that, I connect the database using **mongoose**.  
Then I create the **schema** using mongoose.

I install **validator** to check whether the email entered by the user is in the correct format or not.

After this, I create the **register function** in the controller and set up the **router** for the register endpoint.

In the controller, I check if the **name, email, phone, education, role, and password** fields are filled or not.  
If any field is missing, it shows the message **"Fill all the fields"**.

Then I check whether the email already exists in **MongoDB** or not.  
If it already exists, it shows **"User is already logged in"**.

At the end, the data is saved in the database using:

```javascript
new data.save();
```

For uploading the user photo, I set up **Cloudinary**.

First, I installed the **cloudinary** library to upload images to Cloudinary.

Then I installed **express-fileupload** to handle file uploads in the server.