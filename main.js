/*
    D H R U V I L   M O D I
    100727467
    Animate 2 faces via on click event to change their expressions in to normal, happy, sad and angry
*/
window.onload = function(){
    // reference the characteres
    let character02 = document.getElementById('character02').contentDocument;    

    // reference the character02 elements
    let ch02LeftEyeBrow = character02.getElementById('leftEyebrow');
    let ch02RightEyeBrow = character02.getElementById('rightEyebrow');
    let ch02LeftEyeBall = character02.getElementById('leftEyeBall');
    let ch02RightEyeBall = character02.getElementById('rightEyeBall');
    let ch02Lips = character02.getElementById('normalLip');

    // reference the buttons
    /* ----------- normal button ----------- */
    let normal = document.getElementById('normal');
        normal.addEventListener('click', displayLine);

    // reference the reset button
    /* ----------- normal button ----------- */
    let reset = document.getElementById('reset');
    reset.addEventListener('click', displayLine);

    /* ----------- happy button ----------- */
    let happy = document.getElementById('happy');
        happy.addEventListener('click', displayLine);

    /* ----------- sad button ----------- */
    let sad = document.getElementById('sad');
        sad.addEventListener('click',  displayLine);

    /* ----------- angry button ----------- */
    let angry = document.getElementById('angry');
        angry.addEventListener('click', displayLine);
    
    // setup for normal eyebrow
    let t1 = new TimelineMax({});
        t1.addLabel("start")
        .set(ch02Lips,  {
            attr: {
                d: "M236,453 Q310,471.5 392.6,453"
            },
            delay: 1000
        })
        .addLabel("end");
        t1.addLabel("start")
        t1.set(ch02LeftEyeBall, {
            attr: {
                cx: 227.7,
                cy: 310,
                rx: 19.2,
                ry: 19.2
            },
            fill: "black",
            delay: 1000
        })
        t1.addLabel("end");
        t1.addLabel("start")
        .set(ch02LeftEyeBrow, {
            attr: {
                d: "M176.8,286 Q260,250 280,286"
            },
            strokeWidth: 1,
            delay: 1000
        })
        .addLabel("end");
        t1.addLabel("start")
        .set(ch02RightEyeBrow, {
            attr: {
                d: "M329,286 Q349,250 433.7,286"
            },
            strokeWidth: 1,
            delay: 1000
        })
        .addLabel("end");
        t1.addLabel("start")
        .set(ch02RightEyeBall, {
            attr: {
                cx: 386.2,
                cy: 310,
                rx: 19.2,
                ry: 19.2
            },
            fill: "black",
            delay: 1000
        })
        .addLabel("end");

    function displayLine() {
        /* -------- happy button animation -------- */
        if(this.id === 'happy'){
            TweenMax.to(ch02LeftEyeBrow, 1, {
                attr: {
                    d: "M176.8,286 Q260,235 280,286"
                }
            });
            t1.tweenFromTo("start", "end");
            TweenMax.to(ch02RightEyeBrow, 1, {
                attr: {
                    d: "M329,286 Q349,235 433.7,286"
                }
            });
            t1.tweenFromTo("start", "end");
            TweenMax.to(ch02LeftEyeBall, 1, {
                attr: {
                    cx: 227.7,
                    cy: 310,
                    rx: 19.2,
                    ry: 19.2
                },
                fill: "black"
            });
            t1.tweenFromTo("start", "end");
            TweenMax.to(ch02RightEyeBall, 1, {
                attr: {
                    cx: 386.2,
                    cy: 310,
                    rx: 19.2,
                    ry: 19.2
                },
                fill: "black"
            });
            t1.tweenFromTo("start", "end");
            TweenMax.to(ch02Lips, 1, {
                attr: {
                    d: "M236,453 Q310,521.5 392.6,453"
                }
            });
            t1.tweenFromTo("start", "end");

        /* -------- sad button animation -------- */
        } else if(this.id === 'sad'){
            TweenMax.to(ch02LeftEyeBrow, 1, {
                attr: {
                    d: "M176.8,286 Q178,255 280,255"
                }
            });
            t1.tweenFromTo("start", "end");
            TweenMax.to(ch02RightEyeBrow, 1, {
                attr: {
                    d: "M329,255 Q423.7,255 433.7,286"
                }
            });
            t1.tweenFromTo("start", "end");
            TweenMax.to(ch02LeftEyeBall, 1, {
                attr: {
                    cx: 227.7,
                    cy: 310,
                    rx: 14.2,
                    ry: 14.2
                },
                fill: "black"
            });
            t1.tweenFromTo("start", "end");
            TweenMax.to(ch02RightEyeBall, 1, {
                attr: {
                    cx: 386.2,
                    cy: 310,
                    rx: 14.2,
                    ry: 14.2
                },
                fill: "black"
            });
            t1.tweenFromTo("start", "end");
            TweenMax.to(ch02Lips, 1, {
                attr: {
                    d: "M236,453 Q310,401.5 392.6,453"
                }
            });
            t1.tweenFromTo("start", "end");
        
        /* -------- angry button animation -------- */
        }else if(this.id === 'angry'){
            TweenMax.to(ch02LeftEyeBrow, 1, {
                attr: {
                    d: "M176.8,255 Q178,215 280,286"
                }
            });
            t1.tweenFromTo("start", "end");
            TweenMax.to(ch02RightEyeBrow, 1, {
                attr: {
                    d: "M329,286 Q423.7,215 433.7,255"
                }
            });
            t1.tweenFromTo("start", "end");
            TweenMax.to(ch02LeftEyeBall, 1, {
                attr: {
                    cx: 227.7,
                    cy: 310,
                    rx: 19.2,
                    ry: 19.2
                },
                fill: "red"
            });
            t1.tweenFromTo("start", "end");
            TweenMax.to(ch02RightEyeBall, 1, {
                attr: {
                    cx: 386.2,
                    cy: 310,
                    rx: 19.2,
                    ry: 19.2
                },
                fill: "red"
            });
            t1.tweenFromTo("start", "end");
            TweenMax.to(ch02Lips, 1, {
                attr: {
                    d: "M236,453 Q402,413.5 392.6,453"
                }
            });
            t1.tweenFromTo("start", "end");

        /* -------- normal button animation -------- */
        }else if(this.id === 'reset'){
            TweenMax.to(ch02LeftEyeBrow, 1, {
                attr: {
                    d: "M176.8,286 Q260,250 280,286"
                }
            });
            t1.tweenFromTo("start", "end");
            TweenMax.to(ch02RightEyeBrow, 1, {
                attr: {
                    d: "M329,286 Q349,250 433.7,286"
                }
            });
            TweenMax.to(ch02Lips, 1, {
                attr: {
                    d: "M236,453 Q310,471.5 392.6,453",
                }
            });
            t1.tweenFromTo("start", "end");
            TweenMax.to(ch02LeftEyeBall, 1, {
                attr: {
                    cx: 227.7,
                    cy: 310,
                    rx: 19.2,
                    ry: 19.2
                },
                fill: "black"
            });
            t1.tweenFromTo("start", "end");
            TweenMax.to(ch02RightEyeBall, 1, {
                attr: {
                    cx: 386.2,
                    cy: 310,
                    rx: 19.2,
                    ry: 19.2
                },
                fill: "black"
            });
            t1.tweenFromTo("start", "end");

        /* -------- normal button animation -------- */
        }else{
            TweenMax.to(ch02LeftEyeBrow, 1, {
                attr: {
                    d: "M176.8,286 Q260,250 280,286"
                }
            });
            t1.tweenFromTo("start", "end");
            TweenMax.to(ch02RightEyeBrow, 1, {
                attr: {
                    d: "M329,286 Q349,250 433.7,286"
                }
            });
            TweenMax.to(ch02Lips, 1, {
                attr: {
                    d: "M236,453 Q310,471.5 392.6,453",
                }
            });
            t1.tweenFromTo("start", "end");
            TweenMax.to(ch02LeftEyeBall, 1, {
                attr: {
                    cx: 227.7,
                    cy: 310,
                    rx: 19.2,
                    ry: 19.2
                },
                fill: "black"
            });
            t1.tweenFromTo("start", "end");
            TweenMax.to(ch02RightEyeBall, 1, {
                attr: {
                    cx: 386.2,
                    cy: 310,
                    rx: 19.2,
                    ry: 19.2
                },
                fill: "black"
            });
            t1.tweenFromTo("start", "end");
        }
    }
};