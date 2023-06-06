import React from 'react'

const MinutesReading = ({ minutes }) => {
    const coffeeEmoji= "☕️"
    const bentoBoxEmoji = "🍱"
    let coffeeEmojiCount;
    let bentoBoxEmojiCount;
    let minutesOfReadingComponent;
 
    if (minutes < 30) {
        coffeeEmojiCount = coffeeEmoji.repeat(Math.ceil(minutes/5));
        minutesOfReadingComponent = <small>
        {coffeeEmojiCount} {minutes} min read
        </small>
                }
                else {
                    bentoBoxEmojiCount = bentoBoxEmoji.repeat(Math.ceil(minutes/10));
                    minutesOfReadingComponent = <small>
                    {bentoBoxEmojiCount} {minutes} min read
                    </small> 
                } 
  return (
    <div>
        {minutesOfReadingComponent}
    </div>
  )
}

export default MinutesReading