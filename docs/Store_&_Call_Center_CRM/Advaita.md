 
# STORE & CALL CENTER CRM

 
 
## **Index**


1.Advaita JCRM

- Introduction

- Purpose

- Scope

- Projects in Advaita || JCRM

2.JCRM store

- Introduction

- Responsible

- Frequency

- Workflow

- Process and operations

3.Advaita Call Center CRM

- Introduction

- Campaign

- Responsible

- Frequency

- Process and Operations

4.Server and storage

5.Escalation Matrix

















Advaita || JCRM

## **Introduction Page**

Advaita and JCRM are the CRM services we provide to our client, Kalyan Jewellers. These applications enable executives and customer relationship executives (CREs) to access customer details and make calls directly through the system. Our services commenced in January 2021 and have been ongoing since.

The operations heads for Advaita are Mr. Serudla Manmohan and Mr. Askar Nawaz Khan. Initially, we utilized CRMsherpa for our CRM needs. Developed by Mr. Sreeranjan and Mr. Hemanth, CRMsherpa was managed by Mr. Suresh and later taken over by Mr. Pavan Kalyan for further development and maintenance.

In February 2024, we introduced Advaita JCRM, developed by Mr. Krishnan and Mr. Pramanayagam. This new platform marks a significant upgrade, enhancing our CRM capabilities and supporting our continued commitment to delivering superior service to Kalyan Jewellers.

Client:

Kalyan Jewellers

Purpose & Importance:

JCRM serves the purpose of an industry to interact with the customers this helps them to build a healthy relationship and trust among customers. Its helps in:

  - Building Strong Relationships:
  - Personalized Engagement
  - Sales Performance Tracking
  - Enhanced Support
  - Feedback Management
  - Targeted Campaigns
  - Campaign Performance Analysis
  - Enhancing Customer Loyalty
  - Data-Driven Decision Making
  - Customer-Centric Approach
  - Customer Retention

Scope:

JCRM is a vital tool for the jewellery sector, helping businesses manage customer relationships, optimize sales and marketing efforts, improve customer service, and make data-driven decisions. By leveraging the capabilities of CRM, jewellery businesses can enhance customer loyalty, gain a competitive edge, and drive revenue growth.

  - Competitive Advantage:

    • Upselling and Cross-Selling: CRM helps identify opportunities for upselling and cross-selling, increasing the average transaction value and boosting revenue.

    • Customer Retention: By improving customer satisfaction and loyalty, CRM reduces customer churn and ensures a steady stream of repeat business.

  - Marketing Optimization:

    • Targeted Campaigns: CRM enables businesses to segment their customer base and run targeted marketing campaigns, leading to higher engagement and conversion rates.

    • Campaign Performance Analysis: Businesses can track the effectiveness of marketing campaigns through CRM, allowing for data-driven adjustments and optimization.



JCRM Projects:

   - Store JCRM

   - Call Center JCRM

## **Store Jcrm**

Since March 2021, Idamtat has been delivering CRM services to Kalyan Jewellers through their platform, Store Jcrm. Under the leadership of Mr. Serudla Manmohan as the operational head, Mr. Askar Nawaz Khan overseeing onboarding and services, Mr. Nikhil MM handling support and assistance and, Mr. Pavan Klayan as the platform developer and support to the application. The platform has made significant strides. Currently, over 3,500 executives actively use Store Jcrm across 207 stores throughout India.

Store Jcrm is designed to engage customers during special occasions such as birthdays, anniversaries, and various festivals. Executives reach out to customers based on the specific campaign, offering personalized greetings and informing them about ongoing promotions.

The active campaigns for Store Jcrm include:

1.Birthday

2.Anniversary

3.General Enquiry

4.Gold Coin

5.Loyalty Rewards

6.Inactive Customers

7.Festival Campaigns (such as Dhanteras, Akshaya Tritiya, New Year, Independence Day, etc.)

These campaigns are aimed at enhancing customer relationships and improving their overall experience with Kalyan Jewellers through timely and personalized communication.

Responsible:

Primary:

  - Askar Nawaz Khan, Nikhil MM

Secondary:

  - Mr. Serudla Manmohan

Frequency:

    • Twice in a month for Birthday and anniversary

    • Other campaign uploads as per requirement

Work Flow:
 
![alt text](.\Images\image.png)
Process and operation:

Jcrm works on the data that is being uploaded in the CRM stores wise on to the executives. The executive has to dial the call with the campaign expires. 

These include various activities and steps:

1.Head count preparation

2.Data download from client

3.Data preparation store wise

4.Upload to Jcrm

5.Executive Access to Jcrm

6.Call trigger

Responsible for overall process:

   - Primary:

      • Nikhil MM

   - Secondary

      • Askar Nawaz Khan

## **Head count preparation**:

To upload the data in JCRM we need the latest head count store wise. That helps us to track active executives with the stores also helps to manage the transferred executives. To receive the latest head count below are the steps.

Responsible:

 - Primary

    • Md. Sarfaraj

    • Nikhil MM

 - Secondary

    • Askar Nawaz Khan

Step 1:  Source of head count:

  - Connect the forti client VPN

      • IP: 111.92.84.69 0r 111.93.196.158   port: 10443

      • Username - Wyzmindz

      • Password - Wyzm!nd$

Step 2:

  - Open the postman application

  - Generate the new Auth token

      • Method: Post

      • [url:](https://cubehr.kalyanjewellers.company/api/Token)

      • "username" :"WYZMINDZUSER1",

      • "password":"L9P3xwW3vnkPMuc*"

  - Once the token is generated, use the token as Auth bearer token.

  - Then get the head count as below:

      • Method Get

      • [Url:](https://cubehr.kalyanjewellers.company/api/cubehr/ExternalIntegration/EmployeeInfo?Status=10)

      • The head count will be generated. Save the response in Json format.

  - Then generate the latest branch info:

      • Use the same generated token as Auth bearer token.

      • Method: Get

      • [Url:](https://cubehr.kalyanjewellers.company/api/cubehr/ExternalIntegration/BranchInfoByBranchType?BranchType=Shop)

      • The Branch detail will be generated. Save the response in Json format
 ![alt text](.\Images\image-1.png)


Step 4: 

  - Convert the downloaded head count and branch detail Json files into readable excel format.

  - [Conversion Use](https://conversiontools.io/convert/json-to-excel)to convert the files.

Step 5:

  - Upload the downloaded branch and head count file in QlikView

  - Run the QlikView file.

  - Then export the table into excel as per screen shot
  ![alt text](.\Images\image-2.png)
 

Note: The detail process of is explained in Head Count for store SOP.

Data preparation:

Responsible:

  - Primary

     • Nikhil MM

  - Secondary

     • Askar Nawaz Khan

Step 1:

  - Source of data:

    • Data is forwarded by Netcarrot teams via email

    • Download the data and save it in specified folder.

  - Data Cleaning

    o Clean and modify the date format in the dataset.

    o Ensure all dates are in a consistent format (e.g., YYYY-MM-DD).

  - Mobile Number Formatting:

    • Standardize the format of mobile numbers if necessary.

    • Remove any inconsistencies or formatting errors.

Step 2: Data allocation to CREs

  - Accessing QlikView:

    • Open QlikView application (Store CRM upload).

    • Navigate to the "Edit Script" section.

  - Navigating to Head count tab Data Tab:

    • Change the file path. (Upload the latest head count file).

 ![alt text](.\Images\image-3.png)

  - Preparing Birthday File.

    • Then go to Birthday tab to assign birthday data to CREs:

    • Change the file path or upload the raw dump of birthday data
 
![alt text](.\Images\image-4.png)

  - Preparing Anniversary File:

    • Go to anniversary tab

    • Change the file path or upload the anniversary raw file.

  - Exporting Data to excel (.xlsx):

    • Once you reload the data is prepared.

    • Download both birthday and anniversary file individually into excel for upload.

Uploading the File:

Step 1:

  - Open the [Jcrm link:](https://crmsherpa.wyzmindz.com/KalyanJewellers)

Step 2:

  - Then go to Uploads>upload data

Step 3:

  - Select Service reminder in upload type

Step 4:

  - Then select appropriate campaign

Step 5:

  - Click on upload data.

Step 6:

  - Watch out for any error.

Step 7:

  - Data is uploaded to the executives.

 
![alt text](.\Images\image-5.png)

Executive id creation in Jcrm:

Responsible:

   - Primary:

      • Nikhil MM

      • Pavan Kalyan

   - Secondary:

      • Askar Nawaz Khan

If the employee login is not created in Jcrm, we need to create the employee id. The process of creating the employee login as below:

Step 1

• Connect the forti client VPN

o Remote gateway: 164.52.193.171

 Username: Askar

 Password: 0qsW01eT
 
![alt text](.\Images\image-6.png)

- Step 2

o Connect to MySql workbench

 IP:35.244.19.188 

 Port : 3306

 username: syntheta_pw

 password: 5o1oVaf6VSAQf]$)

o Go to kalyanijeweller schema

o Select wyzuser table

 Create the employee id there within its respective location.
 
![alt text](.\Images\image-7.png)

The id is created in Jcrm.

## **Executive Access to Jcrm**:

The Executives can login into the account and can access the data to dial the call.

   - Process:

       1.Step 1:

   - The executive login in the JCRM

o [JCRM URL:](https://crmsherpa.wyzmindz.com/KalyanJewellers/)

o Select CRE login

o Enter username

o Enter password

   2.Step 2:

  - Online successful login, you will be directed to call log page.
 
![alt text](.\Images\image-8.png)

  - There we have further 5 types of call category

    o Fresh calls

    o Pending follow up

    o Appointment booked

    o Non contact

    o Future follow up

 Fresh calls: Fresh calls contains the list of calls which are have not been attempted

 Non-contact: This list contains the calls which were not contacted during the call attempt. The reason may include:

 Ringing No Response

 Switched off

 Busy on another call

 Appointment Book: This bucket contains the list of customers who asked the CRE to book an appointment to visit the store

 Future follow-up: This list contains the data of customer who ask the CRE to give a call back. The CRE arrange a call back on preferred time as a follow up.

 Pending follow-up: This list contains the list of customers who have asked for a call back and executives fails to take a follow up call on mentioned time. So the data moves to pending follow from future follow-up

Step 3:

   - Then Select the data that you need to call from listed bucket

Step 4:

   - Click on the action button to navigate to 360’ page
Step 4:

   - 360’ page contains the overall detail of the customer

   - Analyse the customer details

Step 6:

   - Click on call icon to call the customer.

Step 7:

   - The call will be triggered. Then the CRE has to answer the call on phone/softphone as per the active service.

Call disposition:

   - On the basis of call, CRE has to dispose the call. There are predefined disposition questions that executive needs to submit after the call.

   - The disposition questions are as below:

         Did you talk to the customer?

         Yes/No

         In case of No

         Reason not to talk to customer

         Ringing No Response

         Busy on another call

         Switched off

         Invalid number

         Customer and executive Remarks

 
![alt text](.\Images\image-9.png)

         In case of did you talk to customer? Yes

         Did you wish the customer?

         Yes/Call Me Later

         Then enter follow up date and time and mention the remarks
 
![alt text](.\Images\image-10.png)

         In case of did you talk to customer? Yes

         Did you wish the customer?

         Yes/Call Me Later

         Will the customer Visit the store?

         If yes

         Enter appointment date and time followed by remarks

         If No, then give remarks and close the call.

## **Call Trigger Work Flow and process**:

Jcrm works on click2call services where executives trigger the call and calls gets initiated.

For this, we took services from tata tele communication. These services are cloud based solutions where we initiate the call via two methods.

   - Mobile based calling

   - VPN based calling (desktop calling)

Mobile based calling consumes two channels at the time of dialling the call where as VPN based calling consumes one channel at a time.

Two way calling (mobile based calling)

        o Plan cost: 850 per channel (*gst excluded)

        o No of channels available: 250

        o Customer name 	 IDAMTAT TECHNOLOGIES & SERVICES LLP

        o Product name 	SIP – Smart flo

        o Account number 	 922588417

        o Pilot Number: 	 8062247000

        o DID Range: 	 8062247000- 8062247749

        o DND scrubbing charges 	0.03 Paise per number

VPN based calling Desktop calling:

        o Plan cost: 1450 per channel (*gst excluded)

        o No of channels available: 250

        o Customer name 	 IDAMTAT TECHNOLOGIES & SERVICES LLP

        o Product name 	SIP – Smart flo

        o Account number 	 922582631

        o Pilot Number: 	 8062239250 

        o DID Range: 	 8062239250 - 8062239999 

        o DND scrubbing charges 	0.03 Paise per number

Work flow:
 
![alt text](.\Images\image-11.png)


Review and Approval

   - Prepared by: Askar Nawaz Khan

   - Approved by: Mr. Serudla Manmohan























Advaita || Call Centre CRM

The Call Center CRM is a process where we provide comprehensive CRM services to the call centers of Kalyan Jewellers. This initiative commenced in June 2022 under the supervision of Mr. Serudla Manmohan, with service onboarding managed by Mr. Askar Nawaz Khan. In April 2024, the system transitioned from CRMsherpa CRM to Advaita CRM. The CRM services are operated from two locations: Bangalore, which handles calls to northern customers, and Coimbatore, which manages calls to the southern region. There are two type of services operated from both location i.e., inbound and outbound.

Advaita (in Brief):

Advaita is an open platform where we can create numerous number of forms to store/update the data of the client. In Kalyan Jewellers we are using Advaita as a CRM application. We can have hierarchy-based login such as executive wise, TL wise, Manager wise and, admin wise. In call center we are using Advaita application for both outbound and inbound process

Process: 

   - Outbound

   - Inbound

Outbound Process:

   - Outbound process is an activity where executives dials the call based on assigned campaign to the customer and enquire about their experienced based on sales and purchase.

Campaign:

        • New Walkin Data

        •Existing Customers

The campaign aims to evaluate the customer experience based on their most recent purchase. This evaluation is conducted through predefined questions designed to assess the quality of the customer's experience.

Key Aspects of the Campaign

1.Customer Experience Evaluation: The primary goal is to assess the customer's experience from their latest purchase.

2.Predefined Questions: We use a set of predefined questions to systematically evaluate the customer's experience.

3.Salesperson Rating: Customers are asked to rate the salesperson based on six specific questions.

4.Data Enrichment: This process also includes data enrichment activities to enhance the quality and depth of customer information.

Through this campaign, we aim to gather valuable insights into customer satisfaction and improve service quality at Kalyan Jewellers.

Responsible:

   - Primary

         Nikhil MM

         Askar Nawaz Khan

   - Secondary

         Mr. Serudla Manmohan

Frequency:

        o Daily

Process and Operation

Jcrm operates based on the data uploaded to the CRM, categorized by store for the executives. The executives are required to make calls before the campaign expires. The process encompasses various activities and steps, including:

1.Head Count Preparation: 

         Determining the number of executives needed.

2.Data Download from Client:

         Acquiring the necessary customer data from the client.

3.User Account Creation:

         Executives id creation/updation

4.Data Preparation language Wise:

         Organizing the data according to each executive.


5.Upload to Advaita

  - Uploading the prepared data to the Advaita CRM system.

These steps ensure a streamlined operation, allowing the call center to effectively reach out to customers and enhance their engagement with Kalyan Jewellers.


Head Count Preparation:

The head count file is being provide by the respective TLs every alternate day of there respective teams. 

Source of data:

   - Coimbatore

         we get the head count details via email from Customer care (Customer care customercare@kalyanjewellers.net ). 

   - Bangalore

         TLs (Balaji and Anup) are responsible to share the head count.


Data Download from Client: 

Data is being forwarded by the client on every alternate day via email for both Coimbatore and Bangalore location.

User Account Creation:

To create a new executive account in advaita we need to follow below steps:

   Login using admin access

        o Username: super_admin

        o Password: Qwerty@123

   Go to user setup > user management 

   - Click on create (on right side of panel)
 
![alt text](.\Images\image-12.png)

   - The fill the required details

   - Select Cre in groups

   - Click on create.
      
![alt text](.\Images\image-13.png)

   - Then come to user management 

   - Select the created cre and click on user mapping icon in action group

 
![alt text](.\Images\image-14.png)

   - Then add the process in the Process tab and Save.

 ![alt text](.\Images\image-15.png)

   - Then move to System Mapping tab for cloud telephony setup

   - Fill the required details from tata portal and save.
 
![alt text](.\Images\image-16.png)

The id is ready to dial the call.




Data Preparation:

Step 1:

   - Once the data is received from the client.

   - Paste the data in respective folder.

Step 2:

   - Open the QlikView

   - Map the head count that we prepared in previous steps in head count file.

   - Upload the raw data in data tab in QlikView

   - Reload the QlikView file.

Step 3:

   - Download the data in excel format .xlsx

   - Paste into specified folder.

Data Upload into Advaita (JCRM):

 Step 1:

   - Login to Advaita with super admin credential

   - URL Bangalore: KALYAN JEWELLERS (idamtat.in) 

   - URL Coimbatore: KALYAN JEWELLERS - COI (idamtat.in)

        o Username: super_admin

        o Password: Qwerty@123

   - Go to Data Upload and create the data set.

 ![alt text](.\Images\image-17.png)

   - The create the file and upload the raw dump in upload sheet.
 
	![alt text](.\Images\image-18.png)

   - The upload is complete.

Data Allocation:

   - Once the data is uploaded, Generate the samples.

   - The go to manual allocation and allocate the data to the respective executives.

Note: The detail explanation of how to update the sample data can be found in advaita data upload SOP

Once the data is allocated to the advaita CRE can dial the calls.





















## **Server and Cloud Storage**

Project Store JCRM and Advaita CRM:

Vendor: Google Cloud Platform

Owner: Pramanayagam

Maintenance: Pavan Kalyan and Sreenath

 

## **Escalation Matrix**

1. Level 1 - Operations Team and POC:

     Responsible: Mr. Raja simha reddy

     Responsibilities: Initial monitoring and basic troubleshooting of server and network issues.

     Escalation Criteria:

        • Email: rajasimhareddy@wyzmindz.com 

     Resolution: 

       - Initial troubleshooting steps fail to resolve the issue within a specified timeframe.

2. Level 2 - System Administrators or Network Engineers or IT Management:

     Responsible: Mr. Sreenath and Mr. leo Charles Antony

     Responsibilities: Advanced troubleshooting and resolution of server and network issues.

     Escalation Criteria:

        • Email: sreenath@wyzmindz.com 

        • Email: Leo@wyzmindz.com 

     Resolution: 

      - Confirmation of server or network downtime impacting critical services. 

      - Need for specialized knowledge or access to infrastructure resources.

      - Identification of hardware or software issues requiring vendor intervention.

3. Level 3 - Technical Support:

     Responsible: Mr. Askar Nawaz Khan

     Responsibilities: Engage with technical support teams or vendors for further assistance.

     Escalation Criteria:

        • Email: askar@wyzmindz.com

     Resolution: 

       - Escalation of complex network configurations or performance issues.


4. Level 4 - Incident Response Team:

     Responsible: Mr. Serudla Manmohan

     Responsibilities: Coordinate incident response efforts and make strategic decisions.

     Escalation Criteria:

        • Email: manmohan@wyzmindz.com

     Resolution: 

       - Escalation of major incidents affecting multiple servers or network segments.

       - Need for senior management involvement in prioritizing resources or communicating with stakeholders.


