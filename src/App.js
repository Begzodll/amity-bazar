import React, {useState, useEffect} from 'react';
export default function App() {
    const questions = [
        [
            {
                questionText: 'Which cable is used to connect a hard drive to a motherboard?',
                answerOptions: [
                    {answerText: 'An IDE Cable', isCorrect: false},
                    {answerText: 'A SATA Cable', isCorrect: true},
                    {answerText: 'A USB Cable', isCorrect: false},
                    {answerText: 'A PS2 Cable', isCorrect: false},
                ],
            },
            {
                questionText: 'Is a Keyboard an_________ device?',
                answerOptions: [
                    {answerText: 'Input ', isCorrect: true},
                    {answerText: 'Output', isCorrect: false},
                    {answerText: 'Both', isCorrect: false},
                    {answerText: 'None of the above', isCorrect: false},
                ],
            },
            {
                questionText: 'What is a URL?',
                answerOptions: [
                    {answerText: 'Universal Remote Long', isCorrect: false},
                    {answerText: 'None of the above', isCorrect: false},
                    {answerText: 'Universal Resource Locator', isCorrect: false},
                    {answerText: 'Uniform Resource Locator', isCorrect: true},
                ],
            },
            {
                questionText: 'Which of these is a free operating system?',
                answerOptions: [
                    {answerText: 'Ubuntu', isCorrect: true},
                    {answerText: 'Windows 7', isCorrect: false},
                    {answerText: 'Windows Xp', isCorrect: false},
                    {answerText: 'Mac OSX', isCorrect: false},
                ],
            },
            {
                questionText: 'What is RAM/DRAM?',
                answerOptions: [
                    {answerText: 'Random Access Memory', isCorrect: true},
                    {answerText: 'Random Memory', isCorrect: false},
                    {answerText: 'Run Memory', isCorrect: false},
                    {answerText: 'Read Access Memory', isCorrect: false},
                ],
            },
        ],
        [
            {
                questionText: 'What is a Universal Serial Bus?',
                answerOptions: [
                    {answerText: 'USB Port', isCorrect: false},
                    {answerText: 'SATA Port', isCorrect: false},
                    {answerText: 'HDMI Port', isCorrect: true},
                    {answerText: 'All of the above', isCorrect: false},
                ],
            },
            {
                questionText: 'What would you use HDMI cable for?',
                answerOptions: [
                    {answerText: 'Connecting a computer to a monitor.', isCorrect: true},
                    {answerText: 'Connecting to the internet.', isCorrect: false},
                    {answerText: 'Connecting a USB flash drive to a computer.', isCorrect: false},
                    {answerText: 'All of the above', isCorrect: false},
                ],
            },
            {
                questionText: 'Examples of a peripheral devices are',
                answerOptions: [
                    {answerText: 'Monitor', isCorrect: false},
                    {answerText: 'Keyboard', isCorrect: false},
                    {answerText: 'Mouse', isCorrect: false},
                    {answerText: 'All of the above', isCorrect: true},
                ],
            },
            {
                questionText: 'What would you use a USB Flash Drive for?',
                answerOptions: [
                    {answerText: 'Creating Music', isCorrect: false},
                    {answerText: 'Back up', isCorrect: false},
                    {answerText: 'Saving Files', isCorrect: true},
                    {answerText: 'Listening music', isCorrect: false},
                ],
            },
            {
                questionText: 'Which part of the computer system that one can physically touch?',
                answerOptions: [
                    {answerText: 'Hardware', isCorrect: false},
                    {answerText: 'OS', isCorrect: true},
                    {answerText: 'Programs', isCorrect: false},
                    {answerText: 'Software', isCorrect: true},
                ],
            },
        ],
        [
            {
                questionText: 'What are IC chips made of?',
                answerOptions: [
                    {answerText: 'Chromium', isCorrect: false},
                    {answerText: 'Silicon', isCorrect: true},
                    {answerText: 'Lead', isCorrect: false},
                    {answerText: 'Gold', isCorrect: false},
                ],
            },
            {
                questionText: 'Which is not an Operating System?',
                answerOptions: [
                    {answerText: 'Microsoft Office XP', isCorrect: true},
                    {answerText: 'Red Hat Linux', isCorrect: false},
                    {answerText: 'BSD Unix', isCorrect: false},
                    {answerText: 'Windows 98', isCorrect: false},
                ],
            },
            {
                questionText: 'The physical, tangible parts of a computer system is the',
                answerOptions: [
                    {answerText: 'Tower Casing', isCorrect: false},
                    {answerText: 'Keyboard', isCorrect: false},
                    {answerText: 'Monitor', isCorrect: false},
                    {answerText: 'Hardware', isCorrect: true},
                ],
            },
            {
                questionText: 'Which of the following is an example of non-volatile memory?',
                answerOptions: [
                    {answerText: 'RAM', isCorrect: false},
                    {answerText: 'Cache Memory', isCorrect: false},
                    {answerText: 'ROM', isCorrect: true},
                    {answerText: 'All of the above', isCorrect: false},
                ],
            },
            {
                questionText: 'What is hardware',
                answerOptions: [
                    {answerText: 'Hardware is any device you can touch', isCorrect: false},
                    {answerText: 'Hardware is an electronic device you can touch', isCorrect: true},
                    {answerText: 'Hardware is an electronic device you can not touch', isCorrect: false},
                    {answerText: 'Hardware is any device you can NOT touch', isCorrect: false},
                ],
            },
        ],
        [
            {
                questionText: 'The instructions that tell the computer what to do:',
                answerOptions: [
                    {answerText: 'Hardware', isCorrect: false},
                    {answerText: 'Software', isCorrect: true},
                    {answerText: 'Input ', isCorrect: false},
                    {answerText: 'Output', isCorrect: false},
                ],
            },
            {
                questionText: 'Microsoft Windows',
                answerOptions: [
                    {answerText: 'Utility Software', isCorrect: false},
                    {answerText: 'Application Software', isCorrect: false},
                    {answerText: 'Operating System', isCorrect: false},
                    {answerText: 'System Software', isCorrect: true},
                ],
            },
            {
                questionText: 'Mobile Device Apps',
                answerOptions: [
                    {answerText: 'System Software', isCorrect: false},
                    {answerText: 'Product', isCorrect: false},
                    {answerText: 'Application Software', isCorrect: true},
                    {answerText: 'Utility Software', isCorrect: false},
                ],
            },
            {
                questionText: 'How many Harry Potter books are there?',
                answerOptions: [
                    {answerText: '5', isCorrect: false},
                    {answerText: '7', isCorrect: true},
                    {answerText: '6', isCorrect: false},
                    {answerText: '8', isCorrect: false},
                ],
            },
            {
                questionText: 'A place in the computer system where data programs are temporarily stored',
                answerOptions: [
                    {answerText: 'Portable', isCorrect: false},
                    {answerText: 'Open', isCorrect: false},
                    {answerText: 'Memory', isCorrect: true},
                    {answerText: 'Paste', isCorrect: false},
                ],
            },
        ],
            [
            {
                questionText: 'What is the disadvantage of ict?',
                answerOptions: [
                    {answerText: 'Encourage the individual study', isCorrect: false},
                    {answerText: 'It is more expensive than traditional education', isCorrect: true},
                    {answerText: 'Provide educational activities in large geographical areasOption 2*', isCorrect: false},
                    {answerText: 'Provide instruction according to student needs', isCorrect: false},
                ],
            },
            {
                questionText: 'When Facebook added Business pages and ads?',
                answerOptions: [
                    {answerText: 'June 2009', isCorrect: false},
                    {answerText: 'April 2006', isCorrect: false},
                    {answerText: 'November 2007 year', isCorrect: true},
                    {answerText: 'May 2009', isCorrect: false},
                ],
            },
            {
                questionText: 'Which of the following is the telephone based shared Service Centre?',
                answerOptions: [
                    {answerText: 'Phone centre', isCorrect: true},
                    {answerText: ' ATM', isCorrect: false},
                    {answerText: 'Call centre', isCorrect: false},
                    {answerText: 'None of these', isCorrect: false},
                ],
            },
            {
                questionText: 'Which of the following have the fastest access time?',
                answerOptions: [
                    {answerText: 'Magnetic Disks', isCorrect: false},
                    {answerText: 'Compact Disks', isCorrect: false},
                    {answerText: 'Magnetic Tapes', isCorrect: false},
                    {answerText: 'Semiconductor Memories', isCorrect: true},
                ],
            },
            {
                questionText: 'What is the shape of CDs?',
                answerOptions: [
                    {answerText: 'Hexagonal', isCorrect: false},
                    {answerText: 'Circular', isCorrect: true},
                    {answerText: 'Rectangular', isCorrect: false},
                    {answerText: 'Quadrilateral', isCorrect: false},
                ],
            },
        ],
    ];
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);
    let arr = []
    arr.push(questions[Math.floor(Math.random() * 5)])

    const handleAnswerOptionClick = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < arr[0].length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    };
    return (
        <>
            <div className={'body'}>
                <div className={'block-img'}/>
                <div className='app'>
                    {showScore ? (
                        <div className='score-section'>
                            You scored {score} out of {arr[0].length}
                        </div>
                    ) : (
                        <>
                            <div className='question-section'>
                                <div className='question-count'>
                                    <span>Question {currentQuestion + 1}</span>/{arr[0].length}
                                </div>
                                <div className='question-text'>{arr[0][currentQuestion].questionText}</div>
                            </div>
                            <div className='answer-section'>
                                {arr[0][currentQuestion].answerOptions.map((answerOption) => (
                                    <>
                                        <button style={{padding:'5px 10px'}} className={'header-button'}
                                                onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button> <br/>
                                    </>
                                ))}
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    );
}
