Problems faced during Development:
1. Problem: While comparing process.env.NODE_ENV with 'DEVELOPMENT' OR 'PRODUCTION' we used ---> process.env.NODE_ENV === 'DEVELOPMENT', which gave false 
in every case.
Solution: We have encouter the problem with process.env.NODE_ENV.includes('DEVELOPMENT') or process.env.NODE_ENV.trim() === 'DEVELOPMENT'.

