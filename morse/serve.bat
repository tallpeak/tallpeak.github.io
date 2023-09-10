@echo off
echo This starts a debug server
echo The start command asynchronously starts your default web browser
echo Note Port 7767 chosen because M,C in ASCII = 77,67 (and MC="Morse Code")
start "debug browser" "http://localhost:7767"
:python -m http.server 7767
python simplehttp-nocache.py
: or npx http-server -c-1
@echo if the last command didn't work, then run:
@echo pip install simple-http-server
