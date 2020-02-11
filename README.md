# SmiirlCustomCounter
A simple web api for Smiirl custom counter. One GET endpoint for showing the counter, and one POST endpoint for updating the counter.

## What is Smiirl custom counter
https://help.smiirl.com/article/41-what-is-a-custom-counter

## URL for Smiirl custom counter
See details at https://help.smiirl.com/article/51-how-does-the-custom-counter-get-its-access-to-my-data, and set the URL to endpoint http://localhost:3000/counter

## Update counter by powershell
```powershell
Invoke-WebRequest -ContentType "application/json"  -Uri http://localhost:3000/counter -Method POST -Body '{"count":999}'
```
