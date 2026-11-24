--Readme document for kent kawashima, kykawash@uci.edu, 56662055--
[A4 group 36]

1. How many assignment points do you believe you completed (replace the *'s with your numbers)?

9/10
- 1/1 The ability to log overnight sleep
- 1/1 The ability to log sleepiness during the day
- 1/1 The ability to view these two categories of logged data
- 2/2 Either using a native device resource or backing up logged data
- 2/2 Following good principles of mobile design
- 1/2 Creating a compelling app
- 1/1 A readme and demo video which explains how these features were implemented and their design rationale

2. How long, in hours, did it take you to complete this assignment?

~4 hours

3. What online resources did you consult when completing this assignment? (list specific URLs)

looking over the ionic online resources such as the basic app docs: https://ionicframework.com/docs/angular/your-first-app
As well as naturally using Claude to help fill in the blanks and break down the planning and rationale for changes were used 

4. What classmates or other individuals did you consult as part of this assignment? What did you discuss?

Individual 

5. Is there anything special we need to know in order to run your code?

No

--Aim for no more than two sentences for each of the following questions.--


6. Did you design your app with a particular type of user in mind? If so, whom?

Although I didn't design my application with a particular user in mind, like with all designs I do,
I approached it in a way that I, myself would want to interact with an app. That is, making it as
least-error-prone as possible while keeping the interface simple. 

7. Did you design your app specifically for iOS or Android, or both?

Both, as it leverages local device storage for both without differentitating between the platforms. 
As gestures such as swiping, etc are naturally the same between mobile platforms as well, however, this app lends itself a bit better to the mobile user over web.

8. How can a person log overnight sleep in your app? Why did you choose to support logging overnight sleep in this way?

They simply choose the sleep and wake times after the fact using spinning wheels. This both allows
quick selection- without the need for manual typing, and limits the scope of input to restrict invalid
inputs and make testing more simple later, if desired. 

9. How can a person log sleepiness during the day in your app? Why did you choose to support logging sleepiness in this way?

Much the same was as they log sleepiness, using a selector imported from the Stanford Sleepiness data.
This allows them to quickly and without much effort, select their level of energy throughout the day. 

10. How can a person view the data they logged in your app? Why did you choose to support viewing logged data in this way?

This gets into my 1/2 in terms of a compelling app, at the moment, it's simply logged as a scrolling list of dates, which doesn't give a particularly inspiring insight to users about their sleep over time.

11. Which feature choose--using a native device resource, backing up logged data, or both?

Backing up data- data is logged to native storage in IOS/Android, or local storage on web, depending on how they access the application. 

12. If you used a native device resource, what feature did you add? How does this feature change the app's experience for a user?

n/a

13. If you backed up logged data, where does it back up to?

Native storage in IOS/Android, or local storage on web

14. How does your app implement or follow principles of good mobile design?

Selectors instead of inputs, buttons that span the entire width of the screen, intuitive gestures for deletion, as well as undo capabilities in case of misinputs. 