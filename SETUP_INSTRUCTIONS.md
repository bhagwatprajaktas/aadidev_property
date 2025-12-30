# Google Apps Script Setup Instructions

## Complete Setup Guide for Email Form Submissions

### Step 1: Create Google Apps Script
1. Go to https://script.google.com
2. Click **"New Project"** button
3. Delete any existing code in the editor
4. Copy and paste the entire code from `google-apps-script.gs` file
5. Click the **disk icon** or press `Ctrl+S` to save
6. Name your project: "Aadidev Property Form Handler"

### Step 2: Deploy the Script
1. Click **"Deploy"** button (top right)
2. Select **"New deployment"**
3. Click the gear icon ⚙️ next to "Select type"
4. Choose **"Web app"**
5. Configure settings:
   - **Description:** Aadidev Property Inquiry Form
   - **Execute as:** Me (your email)
   - **Who has access:** Anyone
6. Click **"Deploy"**
7. You may need to authorize:
   - Click **"Authorize access"**
   - Choose your Google account
   - Click **"Advanced"** if you see a warning
   - Click **"Go to [your project name] (unsafe)"**
   - Click **"Allow"**
8. **IMPORTANT:** Copy the **Web app URL** that appears
   - It will look like: `https://script.google.com/macros/s/ABC123.../exec`

### Step 3: Update Your Website
1. Open the file: `js/script.js`
2. Find the line: `const scriptURL = 'YOUR_SCRIPT_URL_HERE';`
3. Replace `'YOUR_SCRIPT_URL_HERE'` with your actual deployment URL
4. Example:
   ```javascript
   const scriptURL = 'https://script.google.com/macros/s/ABC123xyz.../exec';
   ```
5. Save the file

### Step 4: Test the Form
1. Open your website
2. Go to the Inquiry page
3. Fill out the form with test data
4. Submit the form
5. Check your email at **bhagwatprajaktas@gmail.com**
6. You should receive a nicely formatted email with all the form details

### Troubleshooting

**If emails aren't arriving:**
1. Check your Gmail spam/junk folder
2. Verify the script URL is correctly pasted in `script.js`
3. Make sure you authorized the script with "Allow" permissions
4. Try running the `testEmail()` function in the script editor:
   - In script.google.com, select `testEmail` from the function dropdown
   - Click the Run button (▶️)
   - Check if you receive a test email

**If you see permission errors:**
- You must authorize the script to send emails on your behalf
- This is normal and safe - it's your own script
- Follow the authorization steps carefully

**To view submission logs:**
1. In script.google.com, click "Executions" (left sidebar)
2. You'll see all form submissions and any errors

### Email Features
- Formatted HTML emails with your brand colors
- All form fields included (name, email, phone, project, message)
- Indian timezone timestamp
- Reply-to address set to customer's email
- Professional layout matching your brand

### Need to Update?
If you need to make changes:
1. Edit the code in script.google.com
2. Save your changes
3. Click "Deploy" > "Manage deployments"
4. Click the pencil icon to edit
5. Change version to "New version"
6. Click "Deploy"
7. The URL stays the same, so no need to update your website

### Security Notes
- The script only sends emails to bhagwatprajaktas@gmail.com
- Form data is not stored anywhere except in your email
- The script runs under your Google account
- Only you can see the script execution logs

---

**Support:** If you have any issues, check the "Executions" log in Google Apps Script for error messages.
