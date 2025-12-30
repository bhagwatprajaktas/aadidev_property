// Google Apps Script for Aadidev Property Inquiry Form
// Instructions:
// 1. Go to https://script.google.com
// 2. Click "New Project"
// 3. Delete any existing code
// 4. Paste this entire code
// 5. Click "Deploy" > "New deployment"
// 6. Choose "Web app" as deployment type
// 7. Set "Execute as": Me
// 8. Set "Who has access": Anyone
// 9. Click "Deploy"
// 10. Copy the deployment URL
// 11. Replace 'YOUR_SCRIPT_URL_HERE' in js/script.js with your deployment URL

function doPost(e) {
  try {
    // Email address where form submissions will be sent
    const recipientEmail = "bhagwatprajaktas@gmail.com";
    
    // Get form data
    const name = e.parameter.name || '';
    const email = e.parameter.email || '';
    const phone = e.parameter.phone || '';
    const project = e.parameter.project || 'Not specified';
    const message = e.parameter.message || '';
    
    // Create email subject
    const subject = "New Property Inquiry from " + name;
    
    // Create HTML email body
    const htmlBody = `
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #c41e3a; color: white; padding: 20px; text-align: center; }
            .content { background-color: #f9f9f9; padding: 20px; border: 1px solid #ddd; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #c41e3a; }
            .value { margin-top: 5px; padding: 10px; background-color: white; border-left: 3px solid #c41e3a; }
            .footer { margin-top: 20px; padding: 10px; text-align: center; color: #666; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>New Property Inquiry</h2>
              <p>Aadidev Property</p>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Full Name:</div>
                <div class="value">${name}</div>
              </div>
              <div class="field">
                <div class="label">Email Address:</div>
                <div class="value">${email}</div>
              </div>
              <div class="field">
                <div class="label">Phone Number:</div>
                <div class="value">${phone}</div>
              </div>
              <div class="field">
                <div class="label">Interested Project:</div>
                <div class="value">${project}</div>
              </div>
              <div class="field">
                <div class="label">Message:</div>
                <div class="value">${message}</div>
              </div>
            </div>
            <div class="footer">
              <p>This inquiry was submitted from the Aadidev Property website.</p>
              <p>Submitted on: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</p>
            </div>
          </div>
        </body>
      </html>
    `;
    
    // Plain text version for email clients that don't support HTML
    const plainBody = `
New Property Inquiry - Aadidev Property

Full Name: ${name}
Email: ${email}
Phone: ${phone}
Interested Project: ${project}

Message:
${message}

---
Submitted on: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
    `;
    
    // Send email
    MailApp.sendEmail({
      to: recipientEmail,
      subject: subject,
      body: plainBody,
      htmlBody: htmlBody,
      replyTo: email
    });
    
    // Log the submission (optional, for your records)
    Logger.log('Form submitted: ' + name + ' - ' + email);
    
    // Return success response with CORS headers
    return ContentService.createTextOutput(
      JSON.stringify({ result: 'success', message: 'Email sent successfully' })
    )
    .setMimeType(ContentService.MimeType.JSON)
    .setHeader('Access-Control-Allow-Origin', '*')
    .setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS')
    .setHeader('Access-Control-Allow-Headers', 'Content-Type');
    
  } catch (error) {
    // Log error
    Logger.log('Error: ' + error.toString());
    
    // Return error response with CORS headers
    return ContentService.createTextOutput(
      JSON.stringify({ result: 'error', message: error.toString() })
    )
    .setMimeType(ContentService.MimeType.JSON)
    .setHeader('Access-Control-Allow-Origin', '*')
    .setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS')
    .setHeader('Access-Control-Allow-Headers', 'Content-Type');
  }
}

// Handle OPTIONS requests for CORS preflight
function doGet(e) {
  return ContentService.createTextOutput(
    JSON.stringify({ result: 'success', message: 'CORS enabled' })
  )
  .setMimeType(ContentService.MimeType.JSON)
  .setHeader('Access-Control-Allow-Origin', '*')
  .setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS')
  .setHeader('Access-Control-Allow-Headers', 'Content-Type');
}

// Test function - you can run this to test the script
function testEmail() {
  const testData = {
    parameter: {
      name: "Test User",
      email: "test@example.com",
      phone: "+91 9999999999",
      project: "Test Project",
      message: "This is a test message to verify the email system is working."
    }
  };
  
  doPost(testData);
  Logger.log("Test email sent!");
}
