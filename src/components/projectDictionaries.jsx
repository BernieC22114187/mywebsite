import React from 'react'

export var aiProjects = [
    {
        "projName" : "01. Gridworld",
        "projDescText":
        "In this simulation, three different characters can be chosen to navigate through the maze starting at the door and ending at the exit. The maze terrain can be altered with clicks on the grid. Flash can dash through rocks and leaves a fades behind becaues of his speeed. The middle character moves normally. Sonic leaves trails of dust and rolls into a ball at high speeds.\nGridworld is about moving an agent through a maze on its own to find an exit. The rule that I applied for this project was to follow the walls of any maze until it finds the exit. This simple/greedy algorithm works as the exit can always be found by following the walls in a few selected directions. ",
        "descImg":
        "GridWorldDescImg.png",
        "sec1Title": 
        "Things learned: ",
        "sec2Title":
        "Challenges faced: ",
        "sec1":
        "I mainly implemented the StdDraw library in Java and wrote the whole simulation in Java. I learned about agents, familiarized myself with animation graphics, and interactive simulations. I think this project felt a lot different from the previous projects in this class.  It felt really cool to see the computer figure out how to exit the maze on itself based on a few simple rules. I guess it felt different because I used to play with mazes when I was little. This topic allowed me to visualize and comprehend how some few rules can allow an agent to finish such a task.",
        "sec2":
        "Previously, I didn't understand why we needed to group two blocks together when detecting whether a direction is open.  Therefore, I tried to run the program without grouping two cells per direction. It was after then that I noticed the problem. Some of the other problems I faced was trying to successfully create an after-image effect for both Flash and Sonic. First, I created a loop per index of the array to draw the image multiple times after one-anther. After successfully adjusting the increments of the loop and matching it with the StdDraw Canvas, I wanted to remove those after-images after several have been drawn. The only way to do this is to draw the picture of the floor on top of those after-images. However, when I tried erasing these images at the same increments of the creation of the after-images, the whole program became really laggy. This is even with the addition of Double-Buffering. I speculate that because I have to call StdDraw.show() multiple, times, the graphics look really laggy. Instead, I decided to erase after every index is drawn, this would reduce the number of times StdDraw would have to handle multiple show() commands. In the end, it kinda worked but still not as cool as what I would have liked it to be. ",
        "sec1Img":
        "none",
        "sec2Img":
        "none",
    },
    
    
    ];

export var modernTopics = [
    {
        "projName" : "01. Musical Key Detection with Machine Learning",
        "projDescText":
        "For full project description, see presentation https://tinyurl.com/berniemusicmlpresentation\nGithub repository: https://tinyurl.com/berniegithubmusicml\n\nBase from which the piece/song is built/centered\n\nRecurring theme/pattern that’s embedded\n\nFor classical music\n\nKeys changes occasionally\n\nEach passage with same key mostly follows the key signature\n\nFor pop and jazz music:\n\nKey very vague when lots of changes in the chord progressions",
        "descImg":
        "MusicDescImg.png",
        "sec1Title": 
        "Method 1: ",
        "sec2Title":
        "Method 2: ",
        "sec1":
        "Start with classical music MIDI files http://www.piano-midi.de/\n\nMIDI file: global standard music file type\n\nStores musical data\n\npython miditoolkit https://github.com/YatingMusic/miditoolkit\n\nMIDI files use ticks as units of time (240 ticks per 16th note)\n\npitch at different ticks in different tracks\n\n1 Input size: 12x1 (12 semitones * frequency)\n\nLabel = [0, 0, 0, 1, 0, 0…], [0, 1, 0, 0, 0, 0…], [0, 0, 0, 0, 0, 1…]\n\n\nObservations: Within first 10 epochs, val_accuracy starts to plateau\n\nValidation accuracy ~ 93%\n\nVal_accuracy oscillates at the end",
        "sec2":
        "Using python mido https://mido.readthedocs.io/en/latest/\n\nGet parameters\n\n\t88 * n , each row is state of 88 notes at time (n)\n\n\tvalues = on/off (0 means note off, 1 note on), ignore velocity\n\nUsing mido functions:  msg2dict, switch_note , track2seq\n\nUse spectrogram/2dNumpyArray as input\n\nConv2D (play around with filters, window/kernel size, activation func, an other parameters)\n\nHave to “flatten” before passing dense layers",
        "sec1Img":
        "MusicSec1Img.png",
        "sec2Img":
        "MusicSec2Img.png",

    }
    
    ];
const projectDictionaries = () => {
  return (
    <div></div>
  )
}

export default projectDictionaries