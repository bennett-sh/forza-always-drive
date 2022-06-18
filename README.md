# Always Drive [FH4/FH5]
A simple program which pauses FH4/FH5 when you are not driving/crash.

## Setup
### Initial Setup (just once)
1) Install NodeJS
2) Run ```npm i -g typescript```
3) Clone this repo
4) Run ```npm i&tsc``` in the root of the repo

### To run the script (every time)
1) Run ```node .``` in the root of the repo

## Configuration
You can configure the following things in the ```.env``` file.
| Name          | Description                                                                        | Type   |
|---------------|------------------------------------------------------------------------------------|--------|
| PORT          | The port which you entered in the Data Out IP Port-setting in the game.            | number |
| INITIAL_DELAY | The time (in s) the program should wait at the beginning so you can start driving. | number |
