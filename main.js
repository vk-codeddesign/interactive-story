
import './style.css'
import { storyStates } from './Story.js'
import GameManager from './GameManager.js'

// Hooks til DOM-elementer
const storyImage = document.getElementById('story-image')
const storyHeader = document.querySelector('#story-header h1')
const storyText = document.querySelector('#story-text p')
const optionButtons = document.getElementById('option-buttons')

// Funktion der nulstiller state og starter spillet
function startGame() {
    GameManager.state.stateID = 1

    let state = getStateFromID(GameManager.state.stateID)

    showImage(state)
    showText(state)
    showChoices(state.options)
}

/**
 * Henter state-objektet fra storyStates-arrayet baseret på det angivne ID.
 * @param {number} id - ID'et for den state, der skal hentes.
 * @returns {object} - State-objektet, der svarer til det angivne ID.
 */
function getStateFromID(id) {
    // Find den state i arrayet, hvor state.id er lig med id
    let state = storyStates.find((currentState) => {
        return currentState.id === id;
    })
    return state
}

/**
 * Viser et billede baseret på den leverede state.
 * 
 * @param {Object} storyState - Aktuelle state.
 */
function showImage(storyState) {
    // Hvis storyState har en image property, så vis billedet
    if (storyState.hasOwnProperty('image')) {
        storyImage.style.backgroundImage = `url('images/${storyState.image}')`
        storyImage.style.backgroundSize = 'cover'

        // Hvis storyState ikke har en image property, så vis en farve
    } else {
        storyImage.style.cssText = "background-color: #33aa88;"
    }
}

/**
 * Viser overskriften og teksten i en historie baseret på det angivne storyState-objekt.
 * 
 * @param {Object} storyState - Historiens tilstand indeholdende overskrift og tekst egenskaber.
 */
function showText(storyState) {
    if (storyState.hasOwnProperty('header')) {
        storyHeader.innerText = storyState.header
    }
    if (storyState.hasOwnProperty('text')) {
        storyText.innerText = storyState.text
    }
}

function showChoices(options) {
    // Slet alle knapper fra sidste state
    optionButtons.innerHTML = ''

    // For hver option i options arrayet, lav en knap
    options.forEach(option => {
        const button = document.createElement('button')
        button.innerText = option.text
        button.classList.add('btn')
        button.addEventListener('click', () => selectOption(option))
        optionButtons.appendChild(button)
    })
}

function selectOption(option) {
    // Hvis option har en nextState property, så skift stateID til nextState
    if (option.hasOwnProperty('nextState')) {

        // Hvis nextState er -1, så start spillet forfra.
        // nextState kunne have været 1, men dette giver mulighed
        // at udvikle en "game over" state.
        if (option.nextState === -1) {
            GameManager.state.stateID = 1
        } else {
            // Ellers skift stateID til nextState
            GameManager.state.stateID = option.nextState
        }


        let state = getStateFromID(GameManager.state.stateID)
        showImage(state)
        showText(state)
        showChoices(state.options)
    }
}

startGame()