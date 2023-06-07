# linker-Bot
Linker Bot is a bot (made with Javascript) that allows the user to paste multiple links into a text document and then download them.

# What You Need
For this all to work you will need Node.js (ChatGPT helps so much when it comes to troubleshooting, trust me) and Visual Studio 

# Other Stuff You Need to Know
The linker.js file and the links.txt must be in the same folder, so when you set up code studio and set the folder it will use just make sure the two are in that same folder.

# Side Note
This is my first time on GitHub so if I forgot anything just yell at me in the comments, I didn't know how to word the how to install so I just told my process to ChatGPT and let it explain it (don't worry I checked over it to make sure it all works, its just awkward on how its worded but it still makes sense)

# How to Install
Install Node.js:

Node.js is a JavaScript runtime that allows you to run JavaScript code outside of a web browser.
Visit the official Node.js website: https://nodejs.org.
On the homepage, you'll see two versions available: LTS (Long-Term Support) and Current. It's recommended to choose the LTS version for stability.
Click on the LTS version download button that matches your operating system (Windows, macOS, or Linux).
Once the installer is downloaded, run it and follow the installation instructions to complete the installation of Node.js on your computer.
Install Visual Studio Code:

Visual Studio Code (VS Code) is a popular and free source code editor with excellent support for JavaScript development.
Visit the official VS Code website: https://code.visualstudio.com.
Click on the "Download" button to download the installer for your operating system (Windows, macOS, or Linux).
Run the installer and follow the instructions to complete the installation of Visual Studio Code.
Create a Project Folder:

Decide on a location on your computer where you want to create your project folder. It can be anywhere you prefer, such as your desktop or a specific directory.
Right-click on the desired location and select "New Folder" to create a new folder.
Give the folder a name, such as "VideoDownloader".
Open the Project Folder in Visual Studio Code:

Launch Visual Studio Code on your computer.
In the VS Code welcome screen, click on "Open Folder" or go to "File" > "Open Folder".
Navigate to the project folder you created in the previous step and click "Open".
Create the Script File:

In Visual Studio Code, right-click on the project folder in the Explorer sidebar and select "New File".
Name the file as "linker.js" (or any other name you prefer). Make sure it has the .js extension, indicating it's a JavaScript file.
Copy the Script Code:

Copy the full updated script code provided earlier in this conversation.
Paste the copied code into the "linker.js" file you created in the previous step in Visual Studio Code.
Save the Script File:

Press Ctrl+S (or Cmd+S on macOS) or go to "File" > "Save" to save the "linker.js" file.
Create the Links File:

In the project folder, right-click on an empty space and select "New File".
Name the file as "links.txt". This file will store the list of video links.
Open the "links.txt" file and enter the video links, with each link on a separate line.
Modify the Script Variables:

In the "linker.js" file in Visual Studio Code, you'll see two variables: linksFilePath and usbDrivePath.
Modify the linksFilePath variable to match the path to your "links.txt" file. For example, if the file is in the same project folder, you can set it as ./links.txt.
If you want to save the videos to a specific location on a USB flash drive, modify the usbDrivePath variable to the desired path on the USB drive.
Run the Script:

Open the integrated terminal in Visual Studio Code by going to "View" > "Terminal" or using the keyboard shortcut Ctrl+` (backtick).
In the terminal, navigate to the project folder

# Troubles
Inform me of any issues and I will help you fix it, I might not get to you right away (could be anywhere from a couple of hours to a couple of days, be patient as I can be busy sometimes) just paste any errors in the comments and give a small explanation of what you did before you got it, I will do my best to explain the issue any why you probably got it.

# note
there is a line of the code where you will have to specify the path to where you want the videos to download to. The line looks like this: "// Specify the save path on the USB flash drive
const usbDrivePath = '--path here';--path here-delete this text after the ";""
dont delete the ";" just the "--path here-delete this text after the ";"" and the --path here   (the first one) that is where you will put your directory at
