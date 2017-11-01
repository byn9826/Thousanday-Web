# Thousanday-Web
Photo sharing social web app for your pets and you.  

<b>Please test with real pets images, thanks!</b>  

[Live Site](https://thousanday.com)  

Mobile App by React Native:  
[Repo](https://github.com/byn9826/Thousanday-Mobile)  
<img src="https://github.com/byn9826/Thousanday-Mobile/blob/master/example.gif?raw=true" width="200px" />  

App architecture
--
1. Frontend: React  
2. Backend: Phalcon  
3. Database: MySQL, Redis  
4. SDK: Google SDK, Facebook SDK  
5. Scheduling: cron  

Features:
--
1. Create Account, show all your pets  
2. Add pets, every pet has their own page showing all their photos  
3. Watch pet, follow any pet you love  
4. Post moments, record your lovely moments with your pets  
5. Leave comments, comment on any photo makes you laugh  
6. Love moments, save moments in your personal list  
...  

Screen Shot
--
<b>Digital Home for you</b>  
![user](https://raw.githubusercontent.com/byn9826/Thousand-Day/master/~legend/user.png)  

<b>Private page for your pet</b>  
![pet](https://raw.githubusercontent.com/byn9826/Thousand-Day/master/~legend/pet.png)  

Development Setup
--
1. Install dependencies  
npm install    
composer install  
2. Set up Cron  
crontab -e :  
0 0 * * 0 php /var/www/html/app/cli.php main backup >/dev/null 2>&1  
3. Start Services  
service redis-server start  
service mysql start  
service cron start  

Other  
--
[A list of reusable React UI components](https://github.com/byn9826/Thousanday-React)  

Author  
--
Baozier  

License  
--
BSD-3   
Icons from glyphicons.com