# Lab-2

In this lab you will build a weather app using Node.js and API calls.

1. Install node.js ([https://nodejs.org/en/download/](https://nodejs.org/en/download/): select LTS), if you don't have it already.
2. Create the project folder.

```bash
mkdir weatherApp
cd weatherApp
```

3. Create necessary files.

```bash
atom index.html weatherapp.js style.css
```

4. Initialize the package manager.

```bash
npm init
```

5. Install express package using npm.
6. Get your API keys at [https://rapidapi.com/signup](https://rapidapi.com/signup) for Open Weather Map API.
7. Edit the weatherapp.js file as needed. 
    1. Test your code for full functionality.
    2. For example: What happens if they enter nothing for the city name? How can you fix inside the code is it is empty?
    For this, I had it run an error page with a link back to re-enter the city name to look for
8. Display on your page at least **three** weather-related information in a nice way. Get creative with your design. You can add icons or use API icons if there are any.
    Formatted to easier read main weather topics (temp, humidity, conditions, rain in the last hour)
    Pulled icon from API
9. Last but not the least, **deploy and run** your app on the site we recommend.
    1. Submit your deployed link in the github repository read.me file.
    https://lab-2-ahlersn13.onrender.com
10. Update the **readme file** by answering the following questions:
    1. Assume that in your API call you received a 401 status code. Which part of your code most probably is not correct?
    This would most likely indicate that the key is not correct to access the API
    2. Explain your design choices and how you used CSS to realize those changes.
    Followed the standard background color and font on the first page, but I bolded h1 to make it stand out
    Then on the page with individual city, I kept the temperature and rain options red because they are the most important. I moved the humidity and conditions to black. I centered that whole page as well
11. Submit your repository via github.
