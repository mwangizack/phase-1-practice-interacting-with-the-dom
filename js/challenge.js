const counter = document.querySelector('#counter')
function secondsCounter(second = parseInt(counter.textContent)){
    second++
    return counter.textContent = second
}

document.addEventListener('DOMContentLoaded', () => {
    // See the timer increment every second once the page has loaded.
    let secondsElapsed = setInterval(secondsCounter, 1000)

    // Manually increment and decrement the counter using the plus and minus buttons.
    const plusButton = document.querySelector('#plus')
    const minusButton = document.querySelector('#minus')
    plusButton.addEventListener('click', e => {
        let counterValue = parseInt(counter.textContent)
        return counter.textContent = ++counterValue
    })
    minusButton.addEventListener('click', e => {
        let counterValue = parseInt(counter.textContent)
        return counter.textContent = --counterValue
    })

    // "Like" an individual number of the counter. I should see the count of the number of "likes" associated with that number displayed.
    const likesSection = document.querySelector('.likes')
    const likeButton = document.querySelector('#heart')
    likeButton.addEventListener('click', e => {
        const like = document.createElement('li')
        like.textContent = `${counter.textContent} has been liked 1 time`
        likesSection.appendChild(like)
    })

    /*Pause the counter, which should:
    pause the counter
    disable all buttons except the pause button
    switch the label on the button from "pause" to "resume"*/
    const pauseButton = document.querySelector('#pause')
    pauseButton.addEventListener('click', e => {
        const buttonsToDisable = document.querySelectorAll('#minus, #plus, #heart, #submit')
        const buttonsToDisableArray = Array.from(buttonsToDisable)
        if (e.target.textContent === 'pause'){
            // disable all buttons except the pause button
            buttonsToDisableArray.forEach(button => button.classList.add('disable'))

            // switch the label on the button from "pause" to "resume"
            e.target.textContent = 'resume'

            // pause the counter
            return clearInterval(secondsElapsed)
        }else{
            // switch the label on the button from "resume" to "pause"
            e.target.textContent = 'pause'
            
            // re-enable the buttons
            buttonsToDisableArray.forEach(button => button.classList.remove('disable'))

            // restart the counter
            return secondsElapsed = setInterval(secondsCounter, 1000)
        }
        
    })

    // Leave comments on my gameplay, such as: "Wow, what a fun game this is."
    const form = document.querySelector('#comment-form')
    form.addEventListener('submit', e => {
        e.preventDefault();
        const userInput = e.target.comment_input.value
        const commentsSection = document.querySelector('#list')
        const comment = document.createElement('p')
        comment.textContent = userInput
        commentsSection.appendChild(comment)
        form.reset()
    })
})

