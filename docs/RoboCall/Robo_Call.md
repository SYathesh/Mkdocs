# **AUTOMATED VOICE CALLS || ROBO CALLS**
 

# Index

1.**Introduction**

   - Purpose

   - Scope

   - Activities in Robo calls

2.**Data Maintenance**

   - Responsible

   - Process detail

   - Reviewer

3.**Report Generation**

   - Responsible

   - Daily Calls tracker

   - Monthly Call Report

   - Process detail

   - Reviewer

4.**Server Monitoring and Network Handle**

5.**Escalation Matrix**

# *Introduction Page*

Robocalls, also known as automated calls, are phone calls that use a computerized autodialer to deliver a pre-recorded message to a large number of recipients. Here we are providing this to Kalyan Jewellers from Jan-2022 till present under supervision of Mr. Askar Nawaz Khan. We Help Kalyan Jewellers team to reach its customer and greet them on their special day via automated calls.

Services Include:

   - Birthday wishes

   - Anniversary wishes

We automate/assign the calls in the last week of each month for preceding month.
The services include Naudabao setup developed by Mr. Dinesh (creeper technologies). Handled by Mr. Tinesh. Mr. S Yathesh is looking after all performance and server activity regarding the robo calls.

Work Flow:

 - Data is uploaded in Robo call (naudabao Platform)

 - Every day at 11 am calls start trigger to customer based on event date and campaign

 - In case of non contact in 1st attempt, System re-dials the number at interval of Two hours

 - In case of contact

   o Robo call will play based on campaign.

   o Customer can listen the audio again by pressing 1 in keypad

   o Maximum two times an audio can be played

   o Call will disconnect on wrong selection.

![alt text](.\Images\image-7.png)
Purpose:

Robocalls are employed to connect with all existing customers of Kalyan Jewellers on their special occasions, such as birthdays and anniversaries, to extend warm wishes. This initiative helps foster trust and strengthen relationships between Kalyan Jewellers and its valued customers.

Scope:

 - Customer Engagement

• Sending personalized birthday and anniversary wishes to existing customers.

• Enhancing customer loyalty by acknowledging special occasions.

 - Trust Building

• Strengthening customer trust and enhancing the relationship by making customers feel valued and remembered on important personal milestones

Activities in Robo calls:

   - Data Maintenance

   - Report generation

   - Server Monitoring

   - Network handle









## **Data Maintenance**

Data Maintenance is the activity include all those activities related to data. This includes:

   - Data Preparation

   - Data Upload

Frequency:

   • Monthly

Responsible:

   - Primary:

         S Yathesh

   - Secondary:

         Askar Nawaz Khan

**Process of data preparation and data Upload**

Step 1: Data Cleaning (Date Modification)

1.Date Modification:

Clean and modify the date format in the dataset.

Ensure all dates are in a consistent format (e.g., YYYY-MM-DD).

2.Mobile Number Formatting:

Standardize the format of mobile numbers if necessary.

Remove any inconsistencies or formatting errors.

Step 2: Open QlikView Robo Calls Data Manager Automation

1.Accessing QlikView Script:

   - Open QlikView application.
   - Navigate to the "Edit Script" section.

2.Navigating to Birthday Data Tab:

   - Locate and access the Birthday data tab within the script editor.

   - This section contains the script responsible for loading and processing birthday data.

3.Modifying File Paths:

   - Update the file paths to the Excel files containing birthday and anniversary data.

   - Use appropriate table files or script commands to specify the new file locations.

4.Saving and Reloading:

   - Save the changes made to the script.

   -	Reload the QlikView application to apply the modifications.

5.Exporting Data to CSV:

   -	Export the processed data from QlikView to Excel format (.CSV).

   -	Ensure all date values are converted to the "YYYY-MM-DD" format.

Step 3: Accessing NauDaba Website

1.Opening Chrome Browser:

   - Launch the Chrome browser on your computer.

2.Accessing NauDaba Website:

   - Enter the URL for the NauDaba website

       * Url: www.192.168.15.48/login.php

[NauDaba Website](http://192.168.15.48/login.php)

Username: admin

Password: admin

3.Navigating to Customer View:

   - Once logged in, locate and click on the "Customer" tab.

   - Select the "View" option to access the customer data management interface.

![alt text](.\Images\image-1.png)
 

5.Uploading the File:

Use the file upload feature to upload the CSV file containing the modified robo call data.

   - Follow on-screen instructions to complete the upload process.

![alt text](.\Images\image-2.png)
 
By following these steps meticulously, you can ensure seamless data cleaning, script modification in QlikView, and successful data upload to the NauDaba platform for automated robo call management.

Review and Approval

  - Reviewed by: S Yathesh

  - Approved by: Askar Nawaz Khan



## **Report Generation**

Reports that we are providing for the robo calls are:

1.Daily calls tracker

2.Monthly Call detail Report

Daily Calls tracker:

Daily calls tracker is a daily report that we paste in the google sheet.
 It contains the overall picture of daily call history of CDR on day-1 basis.

Frequency: 

 - Daily

Importance: This report helps to keep the track of daily performance of robo calls.

Responsible:

  - Primary

    •	S Yathesh

  - Secondary

    •	Askar Nawaz Khan

Reviewer:

  - Askar Nawaz Khan

  - Serudla Manmohan

Process of preparation:

1.Open Forti Client VPN and Connect to Server:

   - Open your VPN application.

   - Input the server address: 164.52.193.171.

   - Connect to the server.

2.Open QlikView:

   - Launch QlikView application.

3.Go to Edit Script:

   - Inside QlikView, locate the option to edit the script.

4.Check Data in the Dashboard:

   - Check the data related to

   - Robo call date

   - Count%

   - Max updated

   - Robo disposition

5.Reload QlikView:

   - Initiate a reload of the QlikView application to incorporate the changes made.

 ![alt text](.\Images\image-3.png)

6.Select a Particular Date:

  - Navigate to the interface where you can select a specific date.

7.Retrieve Count for the Selected Date:

  - Once the date is selected, the system should automatically display the count for that particular date.

8.Save QlikView file and copy the required data

9.Open Google Sheet:

   - Launch your web browser and navigate to Google Sheets.

10.Upload Data for Specific Dates:

   - Create or open the sheet where you want to upload the data.
   - Input the data for particular dates, including:
   - Total number of calls
   - Answered calls
   - Failed calls
   - Congestion
   - Busy
   - Ring no response
   - Interactive calls
   - Proactive calls
   - Not interested calls


[MIS Link](https://docs.google.com/spreadsheets/d/1x3U5oRWIwrFeKaf0N0kGrDr_ySQmohZo1mEnc5Sm2No/edit#gid=0)


 ![alt text](.\Images\image-4.png)



Monthly Call detail Report

This report is very much essential to review monthly call volume of the Robo calls. This report we share with the client on the first week of every month.

Frequency: Monthly

Importance: This report helps the client to evaluate the overall call volume and CDR details. This helps them to keep the track of active customers.

Responsible:

 -	Primary

    •	S Yathesh

 -	Secondary

    •	Askar Nawaz Khan

Reviewer:

 -	Askar Nawaz Khan

 -	Serudla Manmohan

Sent to:

 -	Jayaram < Jayaram.k@kalyanjewellers.net >

 -	Askar < askar@wyzmindz.com >

 -	Manmohan < manmohan@wyzmindz.com >

Process of preparation:

•	Open chrome browser and enter the below url:

o	[Link](https://reports.autosherpa.net/qlikview/FormLogin.htm)

• Enter username and password:

   o Username: KalyanCRM report

   o Password: Kaly@n_123

• Navigate to Robocalls

 ![alt text](.\Images\image-5.png)

• Then select the call month

 ![alt text](.\Images\image-6.png)


• Post that downloads the data and paste screenshot of charts and graphs in the presentation reports.

• Provide disposition wise insights.

• Do changes as per requirement.









## **Server Monitoring And Network Handle**

Server monitoring and network management are critical activities essential for ensuring the smooth operation of processes within an organization. These activities involve the continuous surveillance, analysis, and optimization of servers and network infrastructure to maintain optimal performance, security, and reliability. Below are detailed insights into server monitoring and network management.

Server Monitoring

   • Real-Time Performance Monitoring

   • Capacity Planning

   • Security Monitoring

   • Performance Optimization

Network Management

   • Network Performance Monitoring

   • Configuration Management

   • Fault Management

   • Capacity Planning and Scalability


Responsible:

   - Primary

      • Tinesh Balasubramanian

      • S Yathesh

   - Secondary

      • Askar Nawaz Khan


















## **Escalation Matrix**

1.Level 1 - Operations Team and POC:

	Responsible: Mr. S Yathesh

	Responsibilities: Initial monitoring and basic troubleshooting of server and network issues.

	Escalation Criteria:

     • Email: s.yathesh@idamtat.in

	Resolution: 

   - Initial troubleshooting steps fail to resolve the issue within a specified timeframe.

2.Level 2 - System Administrators or Network Engineers or IT Management:

	Responsible: Mr. Kishor Kumar Balasubramanian and Mr. Tinesh      Balasubramanian

	Responsibilities: Advanced troubleshooting and resolution of server and network issues.

	Escalation Criteria:

      • Email: kishor@wyzmindz.com

      • Email: tineshkumar.b@wyzmindz.com

	Resolution:

   - Confirmation of server or network downtime impacting critical services.

   - Need for specialized knowledge or access to infrastructure resources.

   - Identification of hardware or software issues requiring vendor intervention.

3.Level 3 - Technical Support:

	Responsible: Mr. Askar Nawaz Khan

	Responsibilities: Engage with technical support teams or vendors for further assistance.

	Escalation Criteria:

    • Email: askar@wyzmindz.com

	Resolution:

   - Escalation of complex network configurations or performance issues.

4.Level 4 - Incident Response Team:

	Responsible: Mr. Serudla Manmohan

	Responsibilities: Coordinate incident response efforts and make strategic decisions.

	Escalation Criteria:

    • Email: manmohan@wyzmindz.com

	Resolution:

   - Escalation of major incidents affecting multiple servers or network segments.

   - Need for senior management involvement in prioritizing resources or communicating with stakeholders.

